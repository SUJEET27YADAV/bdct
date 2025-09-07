import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full">
      <div className="w-full flex flex-col items-center p-4 pb-0 sm:px-10 sm:pt-6 sm:pb-0 gap-2 sm:gap-3 bg-gradient-to-br from-indigo-300 form-[40%] via-yellow-200 via-[50%] to-green-400 dark:bg-gradient-to-br dark:from-indigo-800 dark:form-[40%] dark:via-yellow-600 dark:via-[50%] dark:to-green-700">
        <Image
          src="/logo.png"
          alt="logo"
          width={1200}
          height={900}
          className="w-30 sm:w-36 h-auto"
        />
        <div className="w-full flex flex-col sm:flex-row max-sm:pb-2">
          <div className="w-full flex flex-col sm:items-center py-1 sm:my-2 sm:border-r-3 sm:border-zinc-700/50 dark:sm:border-zinc-300/50">
            <h2 className="font-bold text-xl sm:text-3xl pb-2">Quick Links</h2>
            <ul className="list-disc max-sm:text-sm px-4 sm:px-0">
              <li className="">
                <Link href="/aboutus" className="">
                  About us
                </Link>
              </li>
              <li className="">
                <Link href="/contactus" className="">
                  Contact us
                </Link>
              </li>
              <li className="">
                <Link href="/gallery" className="">
                  Picture galarey
                </Link>
              </li>
              <li className="">
                <Link href="/coordinator" className="">
                  Coordinator login
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full flex flex-col sm:items-center py-1 sm:my-2 sm:border-r-3 sm:border-zinc-700/50 dark:sm:border-zinc-300/50">
            <h2 className="font-bold text-xl sm:text-3xl">Policies</h2>
            <ul className="list-disc max-sm:text-sm px-4 sm:px-0">
              <li className="">
                <Link href="/termsnconditions" className="">
                  Terms & Condition
                </Link>
              </li>
              <li>
                <Link href="/privacypolicy" className="">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full flex flex-col sm:items-center py-1 sm:py-5">
            <h2 className="font-bold text-xl sm:text-3xl">Contact us</h2>
            <ul className="list-disc max-sm:text-sm px-4 sm:px-0">
              <li className="">
                <Link href="mailto:support@bdcs.com" className="">
                  support@bdcs.com
                </Link>
              </li>
              <li className="">
                <Link href="tel:9999999999" className="">
                  +91-9999999999
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="w-full p-2 text-center text-xs sm:text-base">
        &copy; 2025 Bhawani Dutt Cricket Stadium. All rights reserved.
      </p>
    </div>
  );
}
