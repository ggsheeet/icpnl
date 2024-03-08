import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import { useQuery } from '@apollo/client'
import { GET_PRESS, GET_SAT, GET_POD } from '@/lib/queries'

const PressSATPod = () => {
	const {
		loading: loadingPRESS,
		error: errorPRESS,
		data: dataPRESS
	} = useQuery(GET_PRESS)

	const mediaPRESS = dataPRESS?.mediaItem || []

	const {
		loading: loadingSAT,
		error: errorSAT,
		data: dataSAT
	} = useQuery(GET_SAT)

	const mediaSAT = dataSAT?.mediaItem || []

	const {
		loading: loadingPOD,
		error: errorPOD,
		data: dataPOD
	} = useQuery(GET_POD)

	const mediaPOD = dataPOD?.mediaItem || []

	const removePTags = (htmlString) => {
		if (htmlString) {
			return htmlString.replace(/<\/?p[^>]*>/g, '')
		}
		return ''
	}

	const pressDescription = removePTags(mediaPRESS.caption)
	const satDescription = removePTags(mediaSAT.caption)

	return (
		<div className='flex flex-col items-center justify-center w-full bg-brand-white-smoke gap-[3vh] md:gap-[2vw] pt-[5%] md:pt-[2%] pb-[1.5%]'>
			<div className='flex gap-[3vh] md:gap-[2vw] '>
				{mediaPRESS && mediaPRESS.altText && (
					<a href={pressDescription} rel='noopMAG noreferrer' target='_blank'>
						<Image
							src={mediaPRESS.sourceUrl}
							alt={mediaPRESS.altText}
							width={mediaPRESS.mediaDetails?.width}
							height={mediaPRESS.mediaDetails?.height}
							className='object-contain rounded-lg w-[41vw] md:w-[40vw] lg:w-[30vw] max-w-[630px]'
						/>
					</a>
				)}
				{mediaSAT && mediaSAT.altText && (
					<a href={satDescription} rel='noopener noreferrer' target='_blank'>
						<Image
							src={mediaSAT.sourceUrl}
							alt={mediaSAT.altText}
							width={mediaSAT.mediaDetails?.width}
							height={mediaSAT.mediaDetails?.height}
							className='object-contain rounded-lg w-[41vw] md:w-[40vw] lg:w-[30vw] max-w-[630px]'
						/>
					</a>
				)}
			</div>
			<div>
				{mediaPOD && mediaPOD.altText && (
					<div className='relative'>
						<Image
							src={mediaPOD.sourceUrl}
							alt={mediaPOD.altText}
							width={mediaPOD.mediaDetails?.width}
							height={mediaPOD.mediaDetails?.height}
							className='object-contain rounded-lg w-[88vw] md:w-[82vw] lg:w-[62vw] max-w-[1280px] z-10'
						/>
						<a
							href='http://tinyurl.com/2fwxu6nt'
							rel='noopener noreferrer'
							target='_blank'
							alt='spotify'
							className='absolute top-[79.2%] left-[3.85%] w-[28.5%] h-[11.1%] bg-transparent z-30'
						></a>
						<a
							href='http://tinyurl.com/4wd5rd7s'
							rel='noopener noreferrer'
							target='_blank'
							alt='youtube'
							className='absolute top-[79.2%] left-[35.8%] w-[28.5%] h-[11.1%] bg-transparent z-30'
						></a>
						<a
							href='http://tinyurl.com/bdd92upn'
							rel='noopener noreferrer'
							target='_blank'
							alt='apple'
							className='absolute top-[79.2%] left-[67.6%] w-[28.5%] h-[11.1%] bg-transparent z-30'
						></a>
					</div>
				)}
			</div>
		</div>
	)
}

export default PressSATPod
