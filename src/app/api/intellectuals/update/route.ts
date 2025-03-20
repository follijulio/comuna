import { UpdateIntellectualsController } from "@/lib/api/controllers/intellectuals/updateIntellectualsController";
import { NextResponse } from "next/server";

export async function PUT(request: Request) {
  try {
    const {
      name,
      summary,
      image,
      birth,
      death,
      id,
      works
    } = await request.json();

    if (!id || !name || !summary || !image || !birth) {
      return NextResponse.json({ error: "missing information ", status: 400 });
    }

    const controller = new UpdateIntellectualsController();

    const response = await controller.updateController({
      name,
      summary,
      image,
      birth,
      death,
      id,
      works
    });

    return NextResponse.json({ response });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "error" });
  }
}
