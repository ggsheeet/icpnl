import Image from 'next/image'
import Link from 'next/link'
import {
	Drawer,
	DrawerBody,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	CloseButton
} from '@chakra-ui/react'
import { useQuery } from '@apollo/client'
import { GET_LOC, GET_ACC, GET_MAG, GET_DIN } from '@/lib/queries'
import DOMPurify from 'dompurify'

const HeaderComp = ({ isOpen, onOpen, onClose }) => {
	const {
		loading: loadingLOC,
		error: errorLOC,
		data: dataLOC
	} = useQuery(GET_LOC)

	const mediaLOC = dataLOC?.mediaItem || []

	const {
		loading: loadingACC,
		error: errorACC,
		data: dataACC
	} = useQuery(GET_ACC)

	const mediaACC = dataACC?.mediaItem || []

	const {
		loading: loadingMAG,
		error: errorMAG,
		data: dataMAG
	} = useQuery(GET_MAG)

	const mediaMAG = dataMAG?.mediaItem || []

	const {
		loading: loadingDIN,
		error: errorDIN,
		data: dataDIN
	} = useQuery(GET_DIN)

	const mediaDIN = dataDIN?.mediaItem || []

	const removePTags = (htmlString) => {
		if (htmlString) {
			return htmlString.replace(/<\/?p[^>]*>/g, '')
		}
		return ''
	}

	// Remove <p> tags from the description
	const locDescription = removePTags(mediaLOC.caption)
	const accDescription = removePTags(mediaACC.caption)
	const magDescription = removePTags(mediaMAG.caption)
	const dinDescription = removePTags(mediaDIN.caption)

	return (
		<div className='w-full'>
			<header className='bg-brand-white-smoke min-w-full z-50 py-[2.5%] md:py-[1.5%] lg:py-[1%] mb-5 border-b-[3px] border-b-gray-300'>
				{/* Side Tab */}
				<div className='flex items-center mx-[1.5%]'>
					<div className='hidden md:block md:w-[30vw] lg:w-[22vw] xl:w-[15vw] my-[2%]'>
					</div>
					{/* Logo */}
					<div className='flex items-center justify-center w-full gap-x-3'>
						<p className='hidden md:block font-poppins text-center text-[3.6vw] md:text-[2.5vw] lg:text-[2.1vw] xl:text-[2vw] text-brand-pepper'>
							Boletín Informativo
						</p>
						<div className='not-selectable w-[36vw] md:w-[13vh] lg:w-[9vw] xl:w-[10vw] h-auto mr-[10%] md:mr-[1%] md:ml-[1%]'>
							<Link href='/' rel='noopener noreferrer' passHref>
								<Image
									width={909}
									height={274}
									className='object-contain cursor-pointer'
									src='/icpnl-log.webp'
									alt='icpnl-logo'
								/>
							</Link>
						</div>
					</div>
					<div className='not-selectable w-[60vw] md:w-[30vw] lg:w-[22vw] xl:w-[15vw] h-auto'>
						<Link
							href='https://icpnl.org.mx/afiliacion/'
							rel='noopener noreferrer'
							target='_blank'
							passHref
						>
							<Image
								width={400}
								height={94}
								className='object-contain cursor-pointer'
								src='/afiliate-button.webp'
								alt='afiliate'
							/>
						</Link>
					</div>
				</div>
			</header>
		</div>
	)
}

export default HeaderComp
