const projectId = "wkirgobdnyvlsgchhffw";
const bucketId = "uploadphotosdemo";

type Props = {
  src: string;
  width: number;
  quality: number;
};

export default function supabaseLoader({ src, width, quality }: Props) {
  return `https://${projectId}.supabase.co/storage/v1/object/public/${bucketId}/${src}?width=${width}&quality=${
    quality || 100
  }`;
}
