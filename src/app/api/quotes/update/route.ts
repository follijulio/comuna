import { UpdateQuotesController } from "@/lib/api/controllers/quotes/updateQuotesController";
import { Message } from "@/lib/db/models/Message";
import { Quote } from "@/lib/db/models/Quote";
import { NextResponse } from "next/server";

export async function PUT(request: Request) {
  try {
    const { id, content, thinkerId } = await request.json();

    if (!id || !content || !thinkerId) {
      const message = new Message(false, "missing information");
      return NextResponse.json({ message });
    }

    const quote = new Quote(content, thinkerId, id);

    const controller = new UpdateQuotesController();

    const response = await controller.updateController(quote);

    return NextResponse.json({ response });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal server error", status: 500 });
  }
}
