import { ListWorksController } from "@/lib/api/controllers/works/listWorksController";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const controller = new ListWorksController();

    const response = await controller.listController();

    return NextResponse.json({ response });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
