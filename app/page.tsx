"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { FileUpload } from "@/components/FileUpload";
import { Gallery } from "@/components/Gallery";
import { SearchBox } from "@/components/SearchBox";
import { AppContextProvider } from "@/context";

export default function Home() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <main className="container flex min-h-screen max-w-screen-md flex-col gap-8 p-8">
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="w-full grow sm:w-1/2">
              <SearchBox />
            </div>
            <div className="flex h-12 items-center justify-center sm:h-auto sm:justify-end">
              <FileUpload />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Gallery />
          </div>
        </main>
      </AppContextProvider>
    </QueryClientProvider>
  );
}
