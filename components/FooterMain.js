import Image from 'next/image'
import Link from 'next/link'
import { Center, Divider } from '@chakra-ui/react'

const FooterMain = () => {
	return (
		<footer className='flex relative flex-col items-center justify-center text-center p-[4%] md:p-[3%] bg-brand-white-smoke font-bold font-figtree'>
			{/* <Image
        src="/comydes.png"
        width={738}
        height={136}
        alt="comcorp"
        className="w-1/2 md:w-1/4 h-auto object-cover mb-[2%] md:mb-[0.5%]"
      />
      <Center
        width={{ base: "16.6%", md: "8%", lg: "6%" }}
        bgColor="#062181"
        rounded="full"
      >
        <Divider
          borderColor="brand.50"
          borderWidth="0.07vw"
          orientation="horizontal"
        />
      </Center>
      <p className="text-gray-500 text-[1.3vh] md:text-[2.1vh] pt-[2%] md:pt-[1%] pb-[1.2%] md:pb-[0.2%]">
        Adolfo López Mateos No. 4, Col. Puerto Pesquero
      </p>
      <p className="text-gray-500 text-[1.3vh] md:text-[2.1vh] pb-[2%] md:pb-[0.5%]">
        Carmen, Campeche, C.P. 24129
      </p>
      <Link
        href="https://cotemar.com.mx/"
        rel="noopener noreferrer"
        target="_blank"
        className="text-gray-500 text-[1.3vh] md:text-[2.1vh] mb-[2%] md:mb-[0.5%] hover:border-b-[0.1vw] hover:border-b-gray-500"
      >
        cotemar.com.mx
      </Link>
      <a
        href="tel: +529383811400"
        className="text-gray-500 text-[1.3vh] md:text-[2.1vh] mb-[3%] md:mb-[1%] hover:border-b-[0.1vw] hover:border-b-gray-500"
      >
        +52 938 381 1400
      </a> */}
			<p className='text-center text-[0.9vh] md:text-[1.2vh] text-[#777]'>
				<a
					href='https://icpnl.org.mx/'
					rel='noopener noreferrer'
					target='_blank'
					className='text-[#333] mt-[2vh] underline underline-offset-2'
				>
					Instituto de Contadores Públicos de Nuevo León
				</a>{' '}
				| (81) 8347-0025
			</p>
			<p className='text-center text-[0.9vh] md:text-[1.2vh] text-[#777] pb-[2.5vh]'>
				Calle Justo Sierra 322, Col. San Jemo, Monterrey, N.L. C.P. 64630
			</p>
			<p className='font-medium text-gray-700 text-[0.9vh] md:text-[1.2vh] pb-[0.5%]'>
				Elaborado por:
			</p>
			<p className='font-medium text-gray-700 text-[0.9vh] md:text-[1.2vh] pb-[0.5%]'>
				<a
					href='https://nbnews.com.mx/'
					rel='noopener norefferer'
					target='_blank'
					className='text-blue-700 underline'
				>
					Networking & Business News
				</a>{' '}
				|{' '}
				<a href='tel: +528183496072' className='text-blue-700 underline'>
					(81) 8349-6072
				</a>{' '}
				|{' '}
				<a
					href='mailto: contacto@nbnews.com.mx'
					className='text-blue-700 underline'
				>
					contacto@nbnews.com.mx
				</a>
			</p>
			<p className='font-medium text-gray-700 text-[0.9vh] md:text-[1.2vh] pb-[4%] md:pb-[1%]'>
				Ave La Luz 7064| Col. Pedregal La Silla | Monterrey, NL, México
			</p>
		</footer>
	)
}

export default FooterMain
