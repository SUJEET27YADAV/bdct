import HeroSection from "./components/herosection";
import AboutSection from "./components/aboutsection";
import Link from "next/link";
import Image from "next/image";

const Home: React.FC = () => {
  return (
    <div className="relative w-full flex flex-col items-center gap-2">
      <HeroSection />
      <AboutSection />
      <Link
        href="https://wa.me/+919205929291"
        className="w-12 fixed bottom-10 right-2 z-50 rounded-full overflow-hidden"
      >
        <Image
          src="/WhatsappIcon.png"
          alt="whatsapp"
          width={240}
          height={240}
          className="w-12 h-12"
        />
      </Link>
    </div>
  );
};

export default Home;
