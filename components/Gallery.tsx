import type { FileObject } from "@supabase/storage-js";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";

import { Card } from "@/components/ui/card";

type Response = {
  success: boolean;
  photos: FileObject[];
};

export const Gallery = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["photos"],
    queryFn: () => axios.get<Response>("/api/photos"),
  });

  if (isLoading) return <h1>Loading...</h1>;

  if (isError) return <h1>Error: {(error as Error).message}</h1>;

  if (!data.data.photos) return <h1>No photos found</h1>;

  return (
    <>
      {data.data.photos.map((photo) => (
        <Card key={photo.id}>
          <Image src={photo.name} className="object-cover" fill alt="" />
        </Card>
      ))}
    </>
  );
};
