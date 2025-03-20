import { UpdateWorksController } from "@/lib/api/controllers/works/updateWorksController";
import { Message } from "@/lib/db/models/Message";
import { NextResponse } from "next/server";

export async function PUT(request: Request) {
  try {
    const {
      title,
      year,
      theme,
      link,
      fullText,
      image,
      thinkers,
      id
    } = await request.json();

    if (!id || !title || !year || !theme || thinkers.length == 0) {
      const message = new Message(false, "missing information");
      return NextResponse.json({ message });
    }

    const controller = new UpdateWorksController();

    const response = await controller.updateController({
      title,
      year,
      theme,
      thinkers,
      fullText,
      image,
      id,
      link
    });

    return NextResponse.json({ response });
  } catch (error) {
    console.error(error);
    return NextResponse.json({});
  }
}
