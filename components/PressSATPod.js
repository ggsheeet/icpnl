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
		<div className='flex items-center justify-center'>
			<div className='flex flex-col md:flex-row items-center justify-center w-[83vw] md:w-[88vw] bg-brand-white-smoke gap-y-[4vh] md:gap-y-0 md:gap-[2vw] pt-[10%] md:pt-[2%] pb-[1.5%]'>
					{mediaPRESS && mediaPRESS.altText && (
						<a href={pressDescription} rel='noopener noreferrer' target='_blank' className='w-full md:w-[30%]' >
							<Image
								src={mediaPRESS.sourceUrl}
								alt={mediaPRESS.altText}
								width={mediaPRESS.mediaDetails?.width}
								height={mediaPRESS.mediaDetails?.height}
								className='object-contain rounded-lg w-full h-auto'
							/>
						</a>
					)}
					{mediaSAT && mediaSAT.altText && (
						<a href={satDescription} rel='noopener noreferrer' target='_blank' className='w-full md:w-[30%]' >
							<Image
								src={mediaSAT.sourceUrl}
								alt={mediaSAT.altText}
								width={mediaSAT.mediaDetails?.width}
								height={mediaSAT.mediaDetails?.height}
								className='object-contain rounded-lg w-full h-auto'
							/>
						</a>
					)}
					{mediaPOD && mediaPOD.altText && (
						<div className='relative w-full md:w-[30%]'>
							<Image
								src={mediaPOD.sourceUrl}
								alt={mediaPOD.altText}
								width={mediaPOD.mediaDetails?.width}
								height={mediaPOD.mediaDetails?.height}
								className='object-contain rounded-lg w-full h-auto z-10'
							/>
							<a
								href='https://tinyurl.com/icpnl-spotify'
								rel='noopener noreferrer'
								target='_blank'
								alt='spotify'
								className='absolute top-[78.7%] left-[11.2%] w-[18%] h-[18%] bg-transparent z-30 rounded-full'
							></a>
							<a
								href='https://tinyurl.com/icpnl-youtube'
								rel='noopener noreferrer'
								target='_blank'
								alt='youtube'
								className='absolute top-[79.7%] left-[38%] w-[21.9%] h-[15.3%] bg-transparent z-30 rounded-lg'
							></a>
							<a
								href='https://tinyurl.com/icpnl-apple'
								rel='noopener noreferrer'
								target='_blank'
								alt='apple'
								className='absolute top-[78.8%] left-[71.1%] w-[17.1%] h-[17%] bg-transparent z-30 rounded-xl'
							></a>
						</div>
					)}
			</div>
		</div>
	)
}

export default PressSATPod
