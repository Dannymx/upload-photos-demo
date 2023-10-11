"use client";

import type { FormEvent } from "react";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
  const handleUpload = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <main className="container flex min-h-screen max-w-screen-md flex-col gap-8 p-8">
      <div className="flex flex-row gap-4">
        <div className="w-1/2 grow">
          <Input className="p-6" type="text" placeholder="Search Images..." />
        </div>
        <div className="flex items-center justify-end">
          <form
            className="h-full"
            action="/api/photos"
            method="post"
            onSubmit={(e) => handleUpload(e)}
          >
            <Label
              className="h-full px-10 text-xl"
              htmlFor="fileUpload"
              variant="asButton"
            >
              Upload
              <Input
                className="hidden"
                type="file"
                name="photos"
                id="fileUpload"
              />
            </Label>
          </form>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          4 Images
        </h1>

        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </main>
  );
}
