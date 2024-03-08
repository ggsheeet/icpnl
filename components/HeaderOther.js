import Image from "next/image";
import Link from "next/link";

const HeaderComp = () => {

  return (
    <div className="w-full">
      <header className="bg-brand-white-smoke min-w-full z-50 py-[2.5%] md:py-[1.5%] lg:py-[2%] border-b-[0.4vw] border-b-brand-icpnl-red">
        {/* Side Tab */}
        <div className="flex items-center mx-[1.5%]">
          <div className="ml-[1%] mr-[5%]">
            <Link
              href="/"
              className="focus:outline-none"
              aria-label="Back Home"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="#222"
                className="w-[2.4vh] md:w-[2.3vh] xl:w-[3vh] h-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </Link>
          </div>
          {/* Logo */}
          <div className="flex items-center justify-center w-full gap-x-4">
            <p className="hidden md:block font-poppins text-center text-[3.6vw] md:text-[2.5vw] lg:text-[2.1vw] xl:text-[1.85vw] text-brand-pepper mt-[1%]">
              Boletín Informativo
            </p>
            <div className="not-selectable w-[20vw] md:w-[7.5vh] lg:w-[9vw] xl:w-[10vw] h-auto mr-[11%] md:mr-[1%] md:ml-[1%] md:mt-[1%]">
              <Link href="/" rel="noopener noreferrer" passHref>
                <Image
                  width={400}
                  height={536}
                  className="object-contain cursor-pointer"
                  src="/icpnl-log.webp"
                  alt="icpnl-logo"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="justify-end pr-[2.5%]"></div>
      </header>
    </div>
  );
};

export default HeaderComp;
