import { NextResponse } from "next/server";
import { Message } from "@/lib/db/models/Message";
import { UpdateEventsController } from "@/lib/api/controllers/events/updateEventsController";
import { Event } from "@/lib/db/models/Event";

export async function PUT(request: Request) {
  try {
    const { id, title, description, eventDate, image } = await request.json();

    if (!id || !title || !description || !eventDate) {
        const message = new Message(false, "missing information");
        return NextResponse.json({ message });
    }

    const controller = new UpdateEventsController();

    const event = new Event(title, description, eventDate, image, id);

    const response = await controller.updateController(event);

    return NextResponse.json({ response });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal server error", status: 500 });
  }
}
