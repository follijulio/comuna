import { GetIntellectualController } from "@/lib/api/controllers/intellectuals/getIntellectualController";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { id } = await request.json();

    if (!id) {
      return NextResponse.json({ error: "missing information ", status: 400 });
    }

    const controller = new GetIntellectualController();

    const response = await controller.getController(id);
    return NextResponse.json({ response: response});
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal server error", status: 500 });
  }
}
