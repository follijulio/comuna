import { Auth } from "@/lib/api/auth/authDelete";
import { DeleteWorkController } from "@/lib/api/controllers/works/deleteWorksController";
import { NextResponse } from "next/server";

export async function DELETE(request: Request) {
  try {
    const { id, pass } = await request.json();

    if (!id || !pass) {
      return NextResponse.json({ error: "missing information ", status: 400 });
    }

    const auth = Auth(pass);

    if (!auth)
      return NextResponse.json({
        error: "error",
        status: 400
      });

    const controller = new DeleteWorkController();

    const response = await controller.deleteController(id);

    return NextResponse.json({ response });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal server error", status: 500 });
  }
}
