import React from 'react'
import Image from 'next/image'
import { useQuery } from '@apollo/client'
import { GET_LOC, GET_ACC, GET_MAG, GET_DIN } from '@/lib/queries'

const BannersComp = () => {
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
		loading: loadingDIN,
		error: errorDIN,
		data: dataDIN
	} = useQuery(GET_DIN)

	const mediaDIN = dataDIN?.mediaItem || []

	const mediaItems = [mediaLOC, mediaACC]

	// Remove <p> tags from the description
	const removePTags = (htmlString) => {
		if (htmlString) {
			return htmlString.replace(/<\/?p[^>]*>/g, '')
		}
		return ''
	}

	const formattedItems = mediaItems
		.filter((media) => media)
		.map((media) => {
			const description = removePTags(media.caption)
			return (
				<a
					key={media.id}
					href={description}
					rel='noopener noreferrer'
					target='_blank'
					className='flex justify-center px-[2.5%] py-[3%]'
				>
					<Image
						src={media.sourceUrl}
						alt={media.altText}
						width={media.mediaDetails?.width}
						height={media.mediaDetails?.height}
						className='w-[85vw] md:w-auto h-auto md:h-[13vh] lg:h-[9.5vh] xl:h-[11.7vh] 2xl:h-[14vh]'
						priority
					/>
				</a>
			)
		})

	return (
		<div className='flex items-center justify-center w-full py-[0.9vh] md:py-[2vh] lg:py-[4.9vh]'>
			<ul className='flex flex-wrap items-center justify-evenly w-full lg:w-[83vw]'>
				{formattedItems.map((banner, index) => (
					<li key={index}>{banner}</li>
				))}
			</ul>
		</div>
	)
}

export default BannersComp
