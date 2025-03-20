import { GetWorkController } from "@/lib/api/controllers/works/getWorksController";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { id } = await request.json();

    if (!id) {
      return NextResponse.json(
        { error: "Missing information!" },
        { status: 400 }
      );
    }

    const controller = new GetWorkController();

    const response = await controller.getById(id);

    return NextResponse.json({ response });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal server error", status: 500 });
  }
}
