"use client";
import { CardStack } from "./ui/card-stack";
import { cn } from "@/lib/utils";
export function Projects() {
  return (
    <div className="h-full w-full">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
 { id: 0, img: "/d1.png" },
  { id: 1, img: "/d2.png" },
  { id: 2, img: "/d3.png" },
  { id: 3, img: "/d4.png" },
  { id: 4, img: "/d5.png" },
  { id: 5, img: "/d6.png" },
  { id: 6, img: "/d7.png" },
  { id: 7, img: "/d8.png" },
  { id: 8, img: "/d9.png" },
  { id: 9, img: "/d10.png" },
  { id: 10, img: "/d11.png" },
  { id: 11, img: "/d12.png" },
  { id: 12, img: "/d13.png" },
  { id: 13, img: "/d14.png" },
  { id: 14, img: "/d15.png" },
  { id: 15, img: "/d16.png" },
  { id: 16, img: "/d17.png" },
  { id: 17, img: "/d18.png" },
  { id: 18, img: "/d19.png" },
  { id: 19, img: "/zaypPic.png" },
  { id: 20, img: "/cryPic.png" },
  { id: 21, img: "/adminPic.png" },
  { id: 22, img: "/promptPic.png" },
  { id: 23, img: "/d21.png" },
  { id: 24, img: "/d22.png" },
  { id: 25, img: "/cryPic.png" },
  { id: 26, img: "/d24.png" },
  { id: 27, img: "/d25.png" },
  { id: 28, img: "/d26.png" },
  { id: 29, img: "/d27.png" }
];
