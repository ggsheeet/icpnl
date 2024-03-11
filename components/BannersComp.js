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

	const mediaItems = [mediaDIN, mediaLOC, mediaACC]

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
						className="w-auto h-[9vh]"
						priority
					/>
				</a>
			)
		})

	return (
		<div className='w-full inline-flex flex-nowrap overflow-hidden py-[4.9vh]'>
			{[...Array(5)].map((_, index) => (
				<ul
					key={index}
					className='flex items-center justify-start [&_li]:mx-4 2xl:[&_li]:mx-[2vw] [&_img]:max-w-none animate-infinite-scroll'
				>
					{formattedItems.map((banner, index) => (
						<li key={index}>
							{banner}
						</li>
					))}
				</ul>
			))}
		</div>
	)
}

export default BannersComp
