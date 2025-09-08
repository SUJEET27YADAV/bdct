import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <div className="relative flex flex-col sm:flex-row items-center justify-between p-3 sm:px-10 sm:py-30 overflow-hidden">
      <Image
        src="/ball.png"
        alt="image"
        width={1536}
        height={1024}
        className="absolute left-0 max-sm:top-0 -z-10 object-cover opacity-90 dark:opacity-100"
      />
      <div className="w-full sm:w-[45%] flex flex-wrap max-sm:justify-center max-sm:gap-1 items-center sm:flex-col text-[22px] leading-[24px] sm:leading-unset sm:text-5xl text-lime-500 font-bold sm:uppercase">
        <p className="w-fit">
          Where <span className="sm:text-8xl">every</span>
        </p>
        <p className="max-sm:flex max-sm:gap-1">
          <span className="sm:text-9xl">Ball</span>
          <span>tells a</span>
        </p>
        <span className="sm:text-9xl">Story!</span>
      </div>
      <div className="w-full sm:w-[50%] flex flex-col items-end justify-center gap-0.5 sm:gap-5">
        <p className="w-full text-center text-white sm:text-red-300 max-sm:text-[10.5px]">
          The Bhawani Dutt Cricket Tournament is more than just a competition.
          Here we celebrate cricket&apos;s spirit, teamwork, and passion. This
          platform is the place to showcase your skills, connect with fellow
          enthusiasts, and create unforgettable memories on and off the field.
          Join us to experience the thrill, camaraderie, and excitement that
          make every ball count. Register now to be part of a community where
          every moment matters!
        </p>
        <Link
          href="\aboutus"
          className="flex items-center justify-center px-2 sm:p-2 rounded-lg bg-gray-200 dark:bg-gray-900 max-sm:text-[10px]"
        >
          <span className="hover:underline">More Info</span>
          <span className="material-icons-outlined text-[8px]">
            chevron_right
          </span>
        </Link>
      </div>
    </div>
  );
}
