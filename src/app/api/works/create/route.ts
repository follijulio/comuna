import { CreateWorksController } from "@/lib/api/controllers/works/createWorksController";
import { Message } from "@/lib/db/models/Message";
import { Work } from "@/lib/db/models/Work";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const {
      title,
      year,
      theme,
      link,
      fullText,
      image,
      thinkers
    } = await request.json();

    if (!title || !year || !theme || thinkers.length == 0) {
      const message = new Message(false, "missing information");
      return NextResponse.json({ message });
    }

    const newWork = new Work({
      title,
      year,
      theme,
      thinkers,
      link,
      fullText,
      image
    });

    const controller = new CreateWorksController();

    const response = await controller.createController(newWork);

    return NextResponse.json({ response });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error });
  }
}
