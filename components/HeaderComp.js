import Image from "next/image";
import Link from "next/link";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  CloseButton,
} from "@chakra-ui/react";
import { useQuery } from "@apollo/client";
import { GET_PPN, GET_PPI, GET_ECOM, GET_GLOB, GET_ENER } from "@/lib/queries";
import DOMPurify from "dompurify";

const HeaderComp = ({ isOpen, onOpen, onClose }) => {
  const {
    loading: loadingPPN,
    error: errorPPN,
    data: dataPPN,
  } = useQuery(GET_PPN);

  const mediaPPN = dataPPN?.mediaItem || [];

  const {
    loading: loadingPPI,
    error: errorPPI,
    data: dataPPI,
  } = useQuery(GET_PPI);

  const mediaPPI = dataPPI?.mediaItem || [];

  const {
    loading: loadingECOM,
    error: errorECOM,
    data: dataECOM,
  } = useQuery(GET_ECOM);

  const mediaECOM = dataECOM?.mediaItem || [];

  const {
    loading: loadingGLOB,
    error: errorGLOB,
    data: dataGLOB,
  } = useQuery(GET_GLOB);

  const mediaGLOB = dataGLOB?.mediaItem || [];

  const {
    loading: loadingENER,
    error: errorENER,
    data: dataENER,
  } = useQuery(GET_ENER);

  const mediaENER = dataENER?.mediaItem || [];

  const removePTags = (htmlString) => {
    if (htmlString) {
      return htmlString.replace(/<\/?p[^>]*>/g, "");
    }
    return "";
  };

  // Remove <p> tags from the description
  const ppnDescription = removePTags(mediaPPN.caption);
  const ppiDescription = removePTags(mediaPPI.caption);
  const ecomDescription = removePTags(mediaECOM.caption);
  const globDescription = removePTags(mediaGLOB.caption);
  const enerDescription = removePTags(mediaENER.caption);

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
            <p className="font-poppins text-center text-[3.6vw] md:text-[2.5vw] lg:text-[2.1vw] xl:text-[2vw] text-brand-white-smoke mt-[1%]">
              Boletín Informativo
            </p>
            <div className="not-selectable w-[7vw] md:w-[6vh] lg:w-[4vw] xl:w-[3vw] h-auto mx-[1%]">
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
            size={{ base: "sm", md: "sm", xxl: "md", xxxl: "lg" }}
          >
            <DrawerOverlay />
            <DrawerContent bg="#003C18" color="#f5f5f5ff">
              <DrawerHeader className="flex items-center">
                <div className="w-[50%] flex justify-start">
                  <Image
                    width={400}
                    height={536}
                    className="w-[20%]"
                    objectfit="contain"
                    src="/bplogo.svg"
                    alt="bp-logo"
                  />
                </div>
                <div className="w-[50%] flex justify-end">
                  <CloseButton size="md" onClick={onClose} />
                </div>
              </DrawerHeader>
              <DrawerBody>
                <p className="3xl:text-xl my-[3%]">
                  En este apartado podrás navegar a todos los sitios y
                  noticieros relevantes del sector Oil & Gas de México y el
                  mundo
                </p>
                <div className="flex w-full h-auto pt-[3%]">
                  <div className="flex flex-col items-start justify-between w-[40%] gap-y-[2vh]">
                    {mediaECOM && (
                      <a
                        href={ecomDescription}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="w-[81%]"
                      >
                        <Image
                          src={mediaECOM.sourceUrl}
                          alt={mediaECOM.altText}
                          width={mediaECOM.mediaDetails?.width}
                          height={mediaECOM.mediaDetails?.height}
                          objectfit="contain"
                        />
                      </a>
                    )}
                    {mediaGLOB && (
                      <a
                        href={globDescription}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="w-[81%]"
                      >
                        <Image
                          src={mediaGLOB.sourceUrl}
                          alt={mediaGLOB.altText}
                          width={mediaGLOB.mediaDetails?.width}
                          height={mediaGLOB.mediaDetails?.height}
                          objectfit="contain"
                        />
                      </a>
                    )}
                    {mediaENER && (
                      <a
                        href={enerDescription}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="w-[81%]"
                      >
                        <Image
                          src={mediaENER.sourceUrl}
                          alt={mediaENER.altText}
                          width={mediaENER.mediaDetails?.width}
                          height={mediaENER.mediaDetails?.height}
                          objectfit="contain"
                        />
                      </a>
                    )}
                  </div>
                  <div className="flex flex-col items-start justify-between w-[60%]">
                    {mediaPPN && (
                      <a
                        href={ppnDescription}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <Image
                          src={mediaPPN.sourceUrl}
                          alt={mediaPPN.altText}
                          width={mediaPPN.mediaDetails?.width}
                          height={mediaPPN.mediaDetails?.height}
                          className="w-[90%] h-auto"
                          objectFit="contain"
                        />
                      </a>
                    )}
                    {mediaPPI && (
                      <a
                        href={ppiDescription}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <Image
                          src={mediaPPI.sourceUrl}
                          alt={mediaPPI.altText}
                          width={mediaPPI.mediaDetails?.width}
                          height={mediaPPI.mediaDetails?.height}
                          className="w-[90%] h-auto"
                          objectFit="contain"
                        />
                      </a>
                    )}
                    <a
                      href="https://www.gob.mx/sener"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="w-[90%]"
                    >
                      <Image
                        width={288}
                        height={93}
                        className="w-[90%] h-auto"
                        objectfit="contain"
                        src="/sener.png"
                        alt="SENER"
                      />
                    </a>
                    <a
                      href="https://www.pemex.com/Paginas/default.aspx"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="w-[90%]"
                    >
                      <Image
                        width={288}
                        height={93}
                        className="h-auto"
                        objectfit="contain"
                        src="/pemex-logo.png"
                        alt="PEMEX"
                      />
                    </a>
                    <div className="flex items-center jusitfy-start">
                      <a
                        href="https://www.gob.mx/cnh"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="w-[45%]"
                      >
                        <Image
                          width={288}
                          height={176}
                          className="w-full h-auto"
                          objectfit="contain"
                          src="/cnh-mod.png"
                          alt="CNH"
                        />
                      </a>
                      <a
                        href="https://www.gob.mx/cre"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="w-[55%]"
                      >
                        <Image
                          width={424}
                          height={151}
                          className="w-full h-auto"
                          objectfit="contain"
                          src="/cre.png"
                          alt="CRE"
                        />
                      </a>
                    </div>
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
