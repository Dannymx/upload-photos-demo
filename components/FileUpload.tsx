"use client";

import type { ChangeEvent } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

import { useFileUpload } from "@/hooks/useFileUpload";

export const FileUpload = () => {
  const { mutate } = useFileUpload();
  const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;

    if (input.files) {
      mutate({ url: "/api/photos", files: input.files });
    }
  };

  return (
    <div className="flex items-center justify-end">
      <form className="h-full" action="/api/photos" method="post">
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
            onChange={(e) => handleUpload(e)}
            accept="image/png, image/jpeg, image/jpg"
          />
        </Label>
      </form>
    </div>
  );
};
