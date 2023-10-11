import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

// TODO: save image
export async function POST(request: Request) {
  const storageBucket = "uploadphotosdemo";

  const supabase = createClient(
    process.env.SUPABASE_URL ?? "",
    process.env.SUPABASE_KEY ?? "",
  );

  const formData = await request.formData();
  const file = formData.get("file") as File;
  const filename = formData.get("filename") as string;

  if (!file) {
    return NextResponse.json({ success: false });
  }

  const { error } = await supabase.storage
    .from(storageBucket)
    .upload(filename, file);

  if (error) {
    return NextResponse.json(
      { success: false },
      { status: 500, statusText: error.message },
    );
  }

  return NextResponse.json({ success: true });
}

// TODO: get all images
export async function GET() {
  return NextResponse.json({
    type: "get",
  });
}
