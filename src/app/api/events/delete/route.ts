import { NextResponse } from "next/server";
import { Message } from "@/lib/db/models/Message";
import { DeleteEventsController } from "@/lib/api/controllers/events/deleteEventsController";

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();

    if (!id) {
      const message = new Message(false, "missing information");
      return NextResponse.json({ message });
    }

    const controller = new DeleteEventsController();
    const response = await controller.deleteController(id);

    return NextResponse.json({ response });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal server error", status: 500 });
  }
}
