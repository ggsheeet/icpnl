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
					<div className='w-[30vw] lg:w-[22vw] xl:w-[15vw] my-[2%]'>
						<button
							className='flex items-center justify-center focus:outline-none bg-brand-icpnl-red hover:bg-brand-pepper text-brand-white-smoke text-[1.7vw] md:text-[13px] lg:text-sm xl:text-[13px] 2xl:text-[0.9vw] rounded-md md:rounded-lg px-[6%] py-[6%] md:px-[6%] md:py-[6%] ñg:px-[7%] lg:py-[7%] xl:px-[10%] xl:py-[10%]'
							onClick={onOpen}
							aria-label='Toggle Menu'
						>
								Revistas Editoriales
						</button>
					</div>
					{/* Logo */}
					<div className='flex items-center justify-center w-full gap-x-3'>
						<p className='hidden md:block font-poppins text-center text-[3.6vw] md:text-[2.5vw] lg:text-[2.1vw] xl:text-[2vw] text-brand-pepper'>
							Boletín Informativo
						</p>
						<div className='not-selectable w-[27vw] md:w-[9vh] lg:w-[9vw] xl:w-[10vw] h-auto mr-[10%] md:mr-[1%] md:ml-[1%]'>
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
					<div className='not-selectable w-[30vw] lg:w-[22vw] xl:w-[15vw] h-auto'>
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
					<Drawer
						placement='left'
						onClose={onClose}
						isOpen={isOpen}
						colorScheme={'blue'}
						size={{ base: 'sm', md: 'sm', xxl: 'md', xxxl: 'lg' }}
					>
						<DrawerOverlay />
						<DrawerContent bg='#f5f5f5ff' color='#222'>
							<DrawerHeader className='flex items-center'>
								<div className='w-[50%] flex justify-start'>
									<Image
										width={400}
										height={536}
										className='object-contain w-[50%]'
										src='/icpnl-log.webp'
										alt='icpnl-logo'
									/>
								</div>
								<div className='w-[50%] flex justify-end'>
									<CloseButton size='md' onClick={onClose} />
								</div>
							</DrawerHeader>
							<DrawerBody>
								<p className='3xl:text-xl my-[3%]'>
									En este apartado podrás navegar a todos los sitios, noticieros
									y revistas relevantes para el ICPNL
								</p>
								<div className='flex flex-col items-center justify-center w-full h-auto pt-[3%]'>
									<div className='flex flex-col items-start justify-between w-full gap-y-[2vh]'>
										{mediaDIN && (
											<a
												href={dinDescription}
												rel='noopMAG noreferrer'
												target='_blank'
												className=''
											>
												<Image
													src={mediaDIN.sourceUrl}
													alt={mediaDIN.altText}
													width={mediaDIN.mediaDetails?.width}
													height={mediaDIN.mediaDetails?.height}
													className='object-contain'
												/>
											</a>
										)}
										{mediaLOC && (
											<a
												href={locDescription}
												rel='noopener noreferrer'
												target='_blank'
											>
												<Image
													src={mediaLOC.sourceUrl}
													alt={mediaLOC.altText}
													width={mediaLOC.mediaDetails?.width}
													height={mediaLOC.mediaDetails?.height}
													className='object-contain'
												/>
											</a>
										)}
										{mediaACC && (
											<a
												href={accDescription}
												rel='noopener noreferrer'
												target='_blank'
											>
												<Image
													src={mediaACC.sourceUrl}
													alt={mediaACC.altText}
													width={mediaACC.mediaDetails?.width}
													height={mediaACC.mediaDetails?.height}
													className='object-contain'
												/>
											</a>
										)}
										{mediaMAG && (
											<a
												href={magDescription}
												rel='noopMAG noreferrer'
												target='_blank'
												className='self-center'
											>
												<Image
													src={mediaMAG.sourceUrl}
													alt={mediaMAG.altText}
													width={mediaMAG.mediaDetails?.width}
													height={mediaMAG.mediaDetails?.height}
													className='object-contain '
												/>
											</a>
										)}
									</div>
								</div>
							</DrawerBody>
						</DrawerContent>
					</Drawer>
				</div>
			</header>
		</div>
	)
}

export default HeaderComp
