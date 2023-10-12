import type { FileObject } from "@supabase/storage-js";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

import { Card } from "@/components/ui/card";

type Response = {
  success: boolean;
  photos: FileObject[];
};

export const Gallery = () => {
  const queryClient = useQueryClient();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["photos"],
    queryFn: () => axios.get<Response>("/api/photos"),
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
    </>
  );
};
