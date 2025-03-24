import { CreateintellectualsController } from "@/lib/api/controllers/intellectuals/createIntellectualsController";
import { Message } from "@/lib/db/models/Message";
import { Thinker } from "@/lib/db/models/Thinker";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, summary, image, birth } = await request.json();

    if (!name || !summary || !image) {
      return NextResponse.json({ error: "missing information ", status: 400 });
    }

    const intellectual = new Thinker({name, summary, birth, image});

    const controller = new CreateintellectualsController();

    const response = await controller.createController(intellectual);

    return NextResponse.json({
      response: response
        ? response.message
        : new Message(false, "Failed to create intellectual")
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal server error", status: 500 });
  }
}
