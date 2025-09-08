import { GalleryItem } from "@/types";
import Image from "next/image";
import Link from "next/link";

export const imageData: GalleryItem[] = [
  {
    id: "img1",
    title: "Title",
    description: "Description",
    src: "/1.jpg",
  },
  {
    id: "img2",
    title: "Title",
    description: "Description",
    src: "/2.jpg",
  },
  {
    id: "img3",
    title: "Title",
    description: "Description",
    src: "/3.jpg",
  },
  {
    id: "img4",
    title: "Title",
    description: "Description",
    src: "/4.jpg",
  },
  {
    id: "img5",
    title: "Title",
    description: "Description",
    src: "/5.jpg",
  },
  {
    id: "img6",
    title: "Title",
    description: "Description",
    src: "/6.jpg",
  },
  {
    id: "img7",
    title: "Title",
    description: "Description",
    src: "/7.jpg",
  },
  {
    id: "img8",
    title: "Title",
    description: "Description",
    src: "/8.jpg",
  },
  {
    id: "img9",
    title: "Title",
    description: "Description",
    src: "/9.jpg",
  },
  {
    id: "img10",
    title: "Title",
    description: "Description",
    src: "/10.jpg",
  },
  {
    id: "img11",
    title: "Title",
    description: "Description",
    src: "/11.jpg",
  },
  {
    id: "img12",
    title: "Title",
    description: "Description",
    src: "/12.jpg",
  },
  {
    id: "img13",
    title: "Title",
    description: "Description",
    src: "/13.jpg",
  },
  {
    id: "img14",
    title: "Title",
    description: "Description",
    src: "/14.jpg",
  },
  {
    id: "img15",
    title: "Title",
    description: "Description",
    src: "/15.jpg",
  },
  {
    id: "img16",
    title: "Title",
    description: "Description",
    src: "/16.jpg",
  },
  {
    id: "img17",
    title: "Title",
    description: "Description",
    src: "/17.jpg",
  },
  {
    id: "img18",
    title: "Title",
    description: "Description",
    src: "/18.jpg",
  },
  {
    id: "img19",
    title: "Title",
    description: "Description",
    src: "/19.jpg",
  },
  {
    id: "img20",
    title: "Title",
    description: "Description",
    src: "/20.jpg",
  },
  {
    id: "img21",
    title: "Title",
    description: "Description",
    src: "/21.jpg",
  },
  {
    id: "img22",
    title: "Title",
    description: "Description",
    src: "/22.jpg",
  },
  {
    id: "img23",
    title: "Title",
    description: "Description",
    src: "/23.jpg",
  },
];

export default function Gallery() {
  const videoData: GalleryItem[] = [];
  return (
    <main className="w-full p-4 lg:p-10 2xl:px-26 3xl:px-30 flex flex-col items-center justify-center">
      <h1 className="text-3xl xl:text-4xl 3xl:text-6xl font-bold py-2">
        Gallery
      </h1>
      <h2 className="w-full text-xl lg:text-2xl xl:text-3xl 3xl:text-4xl font-bold py-2 lg:py-3 xl:py-4 3xl:py-6">
        Videos :
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 3xl:grid-cols-6 gap-4 2xl:gap-8 3xl:gap-10 px-2 pb-6">
        {videoData.length > 0 ? (
          videoData.map((item, i) => (
            <Link
              key={i}
              href={`/gallery/${item.id}`}
              className="relative w-36 sm:w-48 md:w-56 aspect-square rounded-lg overflow-hidden"
            >
              <Image
                src={item.src}
                alt={item.title}
                width={200}
                height={200}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
              />
              <div className="absolute bottom-0 h-17 w-full px-2 py-1 bg-gray-100/40 dark:bg-gray-900/40 hover:bg-gray-100 dark:hover:bg-gray-900">
                <h3 className="w-full h-6 text-lg font-bold whitespace-nowrap text-ellipsis overflow-hidden">
                  {item.title}
                </h3>
                <p className="w-full h-9 text-xs line-clamp-2 overflow-hidden">
                  {item.description}
                </p>
              </div>
            </Link>
          ))
        ) : (
          <div className="w-full text-center text-lg font-semibold p-4 col-span-full bg-gray-200/50 dark:bg-gray-800/50 rounded-lg">
            Videos will be available soon...
          </div>
        )}
      </div>
      <h2 className="w-full text-xl lg:text-2xl xl:text-3xl 3xl:text-4xl font-bold py-2 lg:py-3 xl:py-4 3xl:py-6">
        Pictures :
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 3xl:grid-cols-6 gap-4 2xl:gap-8 3xl:gap-10 px-2 pb-6">
        {imageData.length > 0 ? (
          imageData.map((item, i) => (
            <Link
              key={i}
              href={`/gallery/img${i}`}
              className="relative w-36 sm:w-48 md:w-56 aspect-square rounded-lg overflow-hidden"
            >
              <Image
                src={item.src}
                alt={item.title}
                width={200}
                height={200}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
              />
              <div className="absolute bottom-0 h-17 w-full px-2 py-1 bg-gray-100/40 dark:bg-gray-900/40 hover:bg-gray-100 dark:hover:bg-gray-900">
                <h3 className="w-full h-6 text-lg font-bold whitespace-nowrap text-ellipsis overflow-hidden">
                  {item.title}
                </h3>
                <p className="w-full h-9 text-xs line-clamp-2 overflow-hidden">
                  {item.description}
                </p>
              </div>
            </Link>
          ))
        ) : (
          <div className="w-full text-center text-lg font-semibold p-4 col-span-full bg-gray-200/50 dark:bg-gray-800/50 rounded-lg">
            Images will be available soon...
          </div>
        )}
      </div>
    </main>
  );
}
