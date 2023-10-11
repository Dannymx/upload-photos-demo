"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { FileUpload } from "@/components/FileUpload";
import { Gallery } from "@/components/Gallery";
import { Input } from "@/components/ui/input";

export default function Home() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <main className="container flex min-h-screen max-w-screen-md flex-col gap-8 p-8">
        <div className="flex flex-row gap-4">
          <div className="w-1/2 grow">
            <Input className="p-6" type="text" placeholder="Search Images..." />
          </div>
          <div className="flex items-center justify-end">
            <FileUpload />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            4 Images
          </h1>

          <div className="grid grid-cols-2 gap-4">
            <Gallery />
          </div>
        </div>
      </main>
    </QueryClientProvider>
  );
}
