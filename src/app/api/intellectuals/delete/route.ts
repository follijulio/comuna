import { Auth } from "@/lib/api/auth/authDelete";
import { DeleteIntellectualsController } from "@/lib/api/controllers/intellectuals/deleteIntellectualsService";
import { NextResponse } from "next/server";

export async function DELETE(request: Request) {
  try {
    const { pass, id } = await request.json();

    if (!pass || !id) {
      return NextResponse.json({ error: "missing information ", status: 400 });
    }

    const auth = Auth(pass);

    if (!auth)
      return NextResponse.json({
        error: "error",
        status: 400
      });

    const controller = new DeleteIntellectualsController();

    const response = await controller.deleteController(id);

    return NextResponse.json({ response: response });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal server error", status: 500 });
  }
}
