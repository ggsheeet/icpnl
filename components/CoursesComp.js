import React from 'react'
import Image from 'next/image'
import { useQuery } from '@apollo/client'
import { GET_C_FIR, GET_C_SEC, GET_C_THI } from '@/lib/queries'
import CourseSlider from './CourseSlider'
import { Skeleton, SkeletonText } from '@chakra-ui/react'

const CoursesComp = () => {
	const {
		loading: loadingFIR,
		error: errorFIR,
		data: dataFIR
	} = useQuery(GET_C_FIR)

	const {
		loading: loadingSEC,
		error: errorSEC,
		data: dataSEC
	} = useQuery(GET_C_SEC)

	const {
		loading: loadingTHI,
		error: errorTHI,
		data: dataTHI
	} = useQuery(GET_C_THI)

	const mediaFIR = dataFIR?.mediaItem || []
	const mediaSEC = dataSEC?.mediaItem || []
	const mediaTHI = dataTHI?.mediaItem || []

	// Combine all media items into a single array
	const mediaItems = [mediaFIR, mediaSEC, mediaTHI]

	// Remove <p> tags from the description
	const removePTags = (htmlString) => {
		if (htmlString) {
			return htmlString.replace(/<\/?p[^>]*>/g, '')
		}
		return ''
	}

	// Format media items for CourseSlider
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
						className='object-contain rounded-lg w-full h-auto'
						priority
					/>
				</a>
			)
		})
	return (
		<>
			{loadingFIR | loadingSEC | loadingTHI ? (
				Array.from({ length: 1 }).map((_, index) => (
					<div key={index} className='p-4'>
						<Skeleton
							height={{ base: '50vw', md: '40vw', lg: '30vw' }}
							mb='4'
							rounded='md'
						/>
						<SkeletonText mt='2' spacing='2' />
					</div>
				))
			) : (
				<CourseSlider items={formattedItems} />
			)}
		</>
	)
}

export default CoursesComp
