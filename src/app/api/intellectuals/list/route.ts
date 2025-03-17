import { listIntellectualsController } from "@/lib/api/controllers/intellectuals/listIntellectualsController";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const controller = new listIntellectualsController();

    const response = await controller.listController();

    return NextResponse.json({ response: response });
  } catch (error) {
    console.error(error);
  }
}
