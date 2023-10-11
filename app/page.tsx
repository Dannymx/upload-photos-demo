import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main className="container flex min-h-screen flex-col gap-8 p-24">
      <div className="flex flex-row gap-4">
        <div className="w-1/2 grow">
          <Input className="p-6" type="text" placeholder="Search Images..." />
        </div>
        <div className="flex items-center justify-end">
          <Button className="h-full px-10 text-xl">Upload</Button>
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
