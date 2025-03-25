import { CreateQuoteController } from "@/lib/api/controllers/quotes/CreateQuotesController";
import { Message } from "@/lib/db/models/Message";
import { Quote } from "@/lib/db/models/Quote";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { content, thinkerId } = await request.json();

    if (!content || !thinkerId) {
      const message = new Message(false, "missing information");
      return NextResponse.json({ message });
    }

    const quote = new Quote(content, thinkerId);

    const controller = new CreateQuoteController();

    const response = (await controller.createController(quote)) as Message;

    return NextResponse.json({ response });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal server error", status: 500 });
  }
}
