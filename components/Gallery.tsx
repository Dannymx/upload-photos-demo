import { useContext } from "react";
import type { FileObject } from "@supabase/storage-js";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

import { Card } from "@/components/ui/card";
import { AppContext } from "@/context";

type Response = {
  success: boolean;
  photos: FileObject[];
};

export const Gallery = () => {
  const queryClient = useQueryClient();

  const { debouncedValue } = useContext(AppContext);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["photos", debouncedValue],
    queryFn: () =>
      axios.get<Response>(
        `/api/photos${
          debouncedValue.length ? `?search=${debouncedValue}` : ""
        }`,
      ),
  });

  const { mutate } = useMutation({
    mutationFn: (name: string) =>
      axios.delete("/api/photos", { data: { name } }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["photos"] });
    },
  });

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error: {(error as Error).message}</h1>;
  if (!data.data.photos) return <h1>No photos found</h1>;

  return (
    <>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        {data.data.photos.length}{" "}
        {data.data.photos.length === 1 ? "Image" : "Images"}
      </h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {data.data.photos.map((photo) => (
          <Card key={photo.id}>
            <Image src={photo.name} className="object-cover" fill alt="" />
            <Button
              className="absolute bottom-4 right-4 hidden group-hover:inline-flex"
              size="icon"
              onClick={() => mutate(photo.name)}
            >
              <Trash2 className="h-6 w-6" />
            </Button>
          </Card>
        ))}
      </div>
    </>
  );
};
