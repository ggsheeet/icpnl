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

const HeaderComp = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="w-full">
      <header className="bg-brand-bp-green min-w-full z-50 py-[2.5%] md:py-[1.5%] lg:py-[1%]">
        <div className="flex items-center justify-between">
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
                  stroke="#f5f5f5ff"
                  className="w-[2.4vh] md:w-[3vh] h-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
              </Link>
            </div>
            <Drawer
              placement="left"
              onClose={onClose}
              isOpen={isOpen}
              colorScheme={"blue"}
            >
              <DrawerOverlay />
              <DrawerContent bg="#062181" color="#f5f5f5ff">
                <DrawerHeader>
                  <Image
                    width={466}
                    height={136}
                    className="w-[20vh] h-auto mt-2"
                    objectfit="contain"
                    src="/cotemar-log.svg"
                    alt="cotemar-logo"
                  />
                </DrawerHeader>
                <DrawerBody>
                  <p>
                    A través de este boletín te brindaremos información
                    internacional sobre el sector Oil & Gas, a fin de que tengas
                    los datos y la información necesaria para entender lo que
                    ocurre en el sector a nivel global.
                  </p>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
            {/* Logo */}
            <div className="w-[16vh] md:w-[20vh] h-auto mx-[1%]">
              <Link href="/" rel="noopener noreferrer" passHref>
                <Image
                  width={466}
                  height={136}
                  className="cursor-pointer"
                  objectfit="contain"
                  src="/cotemar-log.svg"
                  alt="cotemar-logo"
                />
              </Link>
            </div>
          </div>
          <div className="justify-end pr-[2.5%]">
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeaderComp;
