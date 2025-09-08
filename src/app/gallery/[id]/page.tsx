"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { imageData } from "../page";
import { GalleryItem } from "@/types";
import Image from "next/image";

export default function GalleryItemPage() {
  const params = useParams();
  const router = useRouter();
  const [item, setItem] = useState<GalleryItem | null>(null);
  const [cat, setCat] = useState<string | null>(null);

  useEffect(() => {
    if (
      !params.id ||
      params.id.length < 4 ||
      (params.id.slice(0, 3) !== "img" && params.id.slice(0, 3) !== "vid")
    ) {
      router.push("/404");
    } else {
      const id = params.id;
      // fetch the gallery item using the id from db
      //....
      //temporarily setting src
      setCat(id.slice(0, 3) as string);
      const nid = Number(id.slice(3));
      if (cat === "img") {
        setItem(imageData[nid]);
      } else if (cat === "vid") {
        setItem(imageData[nid]); // set from video data
      }
    }
  }, [params.id, router, cat]);
  return (
    <main className="w-full p-4 sm:px-8">
      {!item ? (
        <div className="w-[90dvw] mx-auto space-y-1">
          <h1 className="w-[70dvw] sm:w-[40dvw] h-12 bg-zinc-400/80 dark:bg-zinc-400/50 animate-pulse rounded-md" />
          <div className="w-[90dvw] h-[51dvw] sm:w-[54dvw] sm:h-[30dvw] bg-zinc-400/90 dark:bg-zinc-400/50 animate-pulse rounded-md" />
          <p className="w-[90dvw] sm:w-[60dvw] h-18 bg-zinc-400/80 dark:bg-zinc-400/50 animate-pulse rounded-md" />
        </div>
      ) : (
        <div className="max-w-[90dvw] mx-auto flex flex-col justify-center gap-1">
          <h1 className="h-12 text-3xl 2xl:text-4xl font-extrabold p-1">
            {item.title}
          </h1>
          <div className="w-[90dvw] h-auto sm:w-[54dvw] sm:h-[30dvw]">
            {cat === "img" ? (
              <Image
                src={item.src}
                alt={item.title}
                width={1500}
                height={1500}
                className="h-full object-contain object-left"
              />
            ) : (
              <video src={item.src} autoPlay={false} controls />
            )}
          </div>
          <p className="h-18 2xl:text-lg">{item?.description}</p>
        </div>
      )}
    </main>
  );
}
