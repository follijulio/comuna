import { GetQuotesController } from "@/lib/api/controllers/quotes/getQuotesController";
import { Message } from "@/lib/db/models/Message";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { id } = await request.json();

    if (!id) {
      const message = new Message(false, "missing information");
      return NextResponse.json({ message });
    }
    const controller = new GetQuotesController();

    const response = await controller.getController(id);

    return NextResponse.json({ response });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal server error", status: 500 });
  }
}
