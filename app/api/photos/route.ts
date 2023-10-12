import { createClient } from "@supabase/supabase-js";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

const supabase = createClient(
  process.env.SUPABASE_URL ?? "",
  process.env.SUPABASE_KEY ?? "",
);

const storageBucket = "uploadphotosdemo";

export async function PUT(request: Request) {
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

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  const { data, error } = await supabase
    .schema("storage")
    .from("objects")
    .select("name, created_at")
    .order("created_at", { ascending: false })
    .ilike(
      "name",
      searchParams.get("search") ? `%${searchParams.get("search")}%` : "%%",
    );

  if (error) {
    return NextResponse.json(
      { success: false },
      { status: 500, statusText: error.message },
    );
  }

  return NextResponse.json({
    success: true,
    photos: data,
  });
}

export async function DELETE(request: Request) {
  const res = await request.json();

  const { data, error } = await supabase.storage
    .from(storageBucket)
    .remove([res.name]);

  if (error) {
    return NextResponse.json(
      { success: false },
      { status: 500, statusText: error.message },
    );
  }

  return NextResponse.json({ success: true, data });
}

export async function POST(request: Request) {
  const res = await request.json();

  const { data, error } = await supabase.storage.from(storageBucket).list("", {
    // TODO: Paginate
    // limit: 100,
    // offset: 0,
    sortBy: { column: "created_at", order: "desc" },
    search: res.search,
  });

  if (error) {
    return NextResponse.json(
      { success: false },
      { status: 500, statusText: error.message },
    );
  }

  return NextResponse.json({ success: true, data });
}
