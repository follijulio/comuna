import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({message: "api is working | works"});
}