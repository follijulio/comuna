import { ListEventsController } from "@/lib/api/controllers/events/listEventsController";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const controller = new ListEventsController();
    const response = await controller.listController();

    return NextResponse.json({ response });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal server error", status: 500 });
  }
}
