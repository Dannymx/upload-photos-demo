import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

const supabase = createClient(
  process.env.SUPABASE_URL ?? "",
  process.env.SUPABASE_KEY ?? "",
);

const storageBucket = "uploadphotosdemo";

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get("file") as File;
  const filename = `${uuidv4()}_${formData.get("filename")}`;

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

export async function GET() {
  const { data, error } = await supabase.storage.from(storageBucket).list("", {
    limit: 100,
    offset: 0,
    sortBy: { column: "name", order: "desc" },
  });

  if (error) {
    return NextResponse.json(
      { success: false },
      { status: 500, statusText: error.message },
    );
  }

  return NextResponse.json({ success: true, photos: data });
}
