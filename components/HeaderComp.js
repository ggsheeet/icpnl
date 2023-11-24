import Image from "next/image";
import Link from "next/link";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect } from "react";

const HeaderComp = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (typeof window !== "undefined" && window.FB) {
      window.FB.XFBML.parse();
    }
  }, []);
   
  return (
    <div className="w-full">
      <header className="bg-brand-bp-green min-w-full z-50 py-[2.5%] md:py-[1.5%] lg:py-[1%]">
        {/* Side Tab */}
        <div className="flex items-center mx-[1.5%]">
          <div className="my-[2%] mr-[2%]">
            <button
              className="focus:outline-none"
              onClick={onOpen}
              aria-label="Toggle Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#f5f5f5ff"
                className="w-[4vh] h-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          {/* Logo */}
          <div className="flex items-center justify-center w-full gap-x-4">
            <p className="font-poppins text-center text-[2vw] text-brand-white-smoke mt-[1%]">
              Boletín Informativo
            </p>
            <div className="w-[16vh] md:w-[6.3vh] h-auto mx-[1%]">
              <Link href="/" rel="noopener noreferrer" passHref>
                <Image
                  width={400}
                  height={536}
                  className="cursor-pointer"
                  objectfit="contain"
                  src="/bplogo.svg"
                  alt="bp-logo"
                />
              </Link>
            </div>
          </div>
          <Drawer
            placement="left"
            onClose={onClose}
            isOpen={isOpen}
            colorScheme={"blue"}
            size={{ base: "xs", md: "sm", xxl: "md" }}
          >
            <DrawerOverlay />
            <DrawerContent bg="#003C18" color="#f5f5f5ff">
              <DrawerHeader>
                <Image
                  width={400}
                  height={536}
                  className="w-[10vh]"
                  objectfit="contain"
                  src="/bplogo.svg"
                  alt="bp-logo"
                />
              </DrawerHeader>
              <DrawerBody>
                <p className="xl:text-lg">
                  A través de este boletín te brindaremos información
                  internacional sobre el sector Oil & Gas, a fin de que tengas
                  los datos y la información necesaria para entender lo que
                  ocurre en el sector a nivel global.
                </p>
                <div className="flex w-full h-[50vh]">
                <div 
                  className="fb-page w-[50%] h-[100vh]"
                  data-href="https://www.facebook.com/BPMexico"
                  data-tabs="timeline,events"
                  data-width="500"
                  data-height="500"
                  data-small-header="false"
                  data-adapt-container-width="true"
                  data-hide-cover="false"
                  data-show-facepile="true"
                >
                  <blockquote
                    cite="https://www.facebook.com/BPMexico"
                    className="fb-xfbml-parse-ignore"
                  ></blockquote>
                </div>
                <div className="w-[50%]">
                <Image
                  width={288}
                  height={356}
                  className="w-[16vh]"
                  objectfit="contain"
                  src="/ecom.png"
                  alt="ecom editorial"
                />
                <Image
                  width={288}
                  height={356}
                  className="w-[16vh]"
                  objectfit="contain"
                  src="/globe.png"
                  alt="globe editorial"
                />
                <Image
                  width={288}
                  height={356}
                  className="w-[16vh]"
                  objectfit="contain"
                  src="/en21.png"
                  alt="en21 editorial"
                />
                </div>
                </div>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </div>
      </header>
    </div>
  );
};

export default HeaderComp;
