import React from 'react'
import Image from 'next/image'
import { useQuery } from '@apollo/client'
import { GET_C_FIR, GET_C_SEC, GET_C_THI } from '@/lib/queries'

const CoursesComp = () => {
	const {
		loading: loadingFIR,
		error: errorFIR,
		data: dataFIR
	} = useQuery(GET_C_FIR)

	const mediaFIR = dataFIR?.mediaItem || []

	const {
		loading: loadingSEC,
		error: errorSEC,
		data: dataSEC
	} = useQuery(GET_C_SEC)

	const mediaSEC = dataSEC?.mediaItem || []

	const {
		loading: loadingTHI,
		error: errorTHI,
		data: dataTHI
	} = useQuery(GET_C_THI)

	const mediaTHI = dataTHI?.mediaItem || []

	const removePTags = (htmlString) => {
		if (htmlString) {
			return htmlString.replace(/<\/?p[^>]*>/g, '')
		}
		return ''
	}

	// Remove <p> tags from the description
	const firDescription = removePTags(mediaFIR.caption)
	const secDescription = removePTags(mediaSEC.caption)
	const thiDescription = removePTags(mediaTHI.caption)

	return (
		<div className='flex items-center justify-center'>
		<div className='flex flex-wrap items-center justify-center bg-brand-white-smoke w-[90vw] gap-[3vh] md:gap-[2vw] pt-[5%] md:pt-[2%] pb-[1.5%]'>
			{mediaFIR && mediaFIR.altText && (
				<a
					href={firDescription}
					rel='noopMAG noreferrer'
					target='_blank'
				>
					<Image
						src={mediaFIR.sourceUrl}
						alt={mediaFIR.altText}
						width={mediaFIR.mediaDetails?.width}
						height={mediaFIR.mediaDetails?.height}
                        className='object-contain rounded-lg w-[88vw] md:w-[40vw] lg:w-[30vw] max-w-[160px] md:max-w-[250px] lg:max-w-[360px]'
						priority
					/>
				</a>
			)}
			{mediaSEC && mediaSEC.altText && (
				<a href={secDescription} rel='noopener noreferrer' target='_blank'>
					<Image
						src={mediaSEC.sourceUrl}
						alt={mediaSEC.altText}
						width={mediaSEC.mediaDetails?.width}
						height={mediaSEC.mediaDetails?.height}
                        className='object-contain rounded-lg w-[88vw] md:w-[40vw] lg:w-[30vw] max-w-[160px] md:max-w-[250px] lg:max-w-[360px]'
						priority
					/>
				</a>
			)}
			{mediaTHI && mediaTHI.altText && (
				<a href={thiDescription} rel='noopener noreferrer' target='_blank'>
					<Image
						src={mediaTHI.sourceUrl}
						alt={mediaTHI.altText}
						width={mediaTHI.mediaDetails?.width}
						height={mediaTHI.mediaDetails?.height}
                        className='object-contain rounded-lg w-[88vw] md:w-[40vw] lg:w-[30vw] max-w-[160px] md:max-w-[250px] lg:max-w-[360px]'
						priority
					/>
				</a>
			)}
		</div>
		</div>
	)
}

export default CoursesComp