"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { imageData } from "../page";
import { GalleryItem } from "@/types";
import Image from "next/image";
import temp from "@/../public/template.png";

export default function GalleryItemPage() {
  const params = useParams();
  const router = useRouter();
  const [item, setItem] = useState<GalleryItem | null>(null);
  if (!params.id) {
    // redirect to 404
    return router.push("/404");
  }
  const id = params.id!;
  // fetch the gallery item using the id from db
  //....
  //temporarily setting src
  const cat = id.slice(0, 3);
  const nid = Number(id.slice(3));
  useEffect(() => {
    if (cat === "img") {
      setItem(imageData[nid]);
    } else if (cat === "vid") {
      setItem(imageData[nid]); // set from video data
    } else {
      // redirect to 404
      setItem(null);
      return router.push("/404");
    }
  }, [cat, nid]);
  return (
    <main className="w-full px-8 py-4">
      {!item ? (
        <div className="w-[90dvw] mx-auto space-y-1">
          <h1 className="w-[70dvw] sm:w-[40dvw] h-12 bg-zinc-900/50 dark:bg-zinc-400/50 animate-pulse rounded-md" />
          <div className="w-[90dvw] h-[51dvw] sm:w-[60dvw] sm:h-[33dvw] bg-zinc-900/50 dark:bg-zinc-400/50 animate-pulse rounded-md" />
          <p className="w-[90dvw] sm:w-[60dvw] h-18 bg-zinc-900/50 dark:bg-zinc-400/50 animate-pulse rounded-md" />
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
