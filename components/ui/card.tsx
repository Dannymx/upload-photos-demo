"use client";

import type { ReactNode } from "react";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

type Props = {
  children: ReactNode;
};

const Card = ({ children }: Props) => (
  <AspectRatio ratio={1 / 1}>
    <div className="group absolute h-full w-full overflow-hidden rounded-xl shadow-md shadow-slate-500">
      {children}
    </div>
  </AspectRatio>
);

export { Card };
