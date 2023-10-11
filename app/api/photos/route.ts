import { NextResponse } from "next/server";

// TODO: save image
export async function POST() {
  return NextResponse.json({
    type: "post",
  });
}

// TODO: get all images
export async function GET() {
  return NextResponse.json({
    type: "get",
  });
}
