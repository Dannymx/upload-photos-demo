"use client";

import { AspectRatio } from "@radix-ui/react-aspect-ratio";

const Card = () => (
  <AspectRatio ratio={1 / 1}>
    <div className="h-full w-full rounded-md bg-gradient-to-r from-cyan-500 to-blue-500" />
  </AspectRatio>
);

export { Card };
