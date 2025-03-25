import { ListQuotesController } from "@/lib/api/controllers/quotes/listQuotesController";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const controller = new ListQuotesController();

    const response = await controller.listController();

    return NextResponse.json({ response });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal server error", status: 500 });
  }
}
