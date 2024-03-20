import React from 'react'
import Link from 'next/link'
import { useQuery } from '@apollo/client'
import { GET_POSTS_FIR } from '@/lib/queries'
import { Skeleton, SkeletonText } from '@chakra-ui/react'

const HeroComp = () => {
	const {
		loading: loadingFIR,
		error: errorFIR,
		data: dataFIR
	} = useQuery(GET_POSTS_FIR)
	const article = dataFIR?.posts?.nodes[0]
	
	return (
		<>
			{loadingFIR ? (
				Array.from({ length: 1 }).map((_, index) => (
					<div
						key={index}
						className='flex flex-col items-center justify-center p-4'
					>
						<Skeleton
							width={{ base: '90vw' }}
							height={{ base: '60vw', md: '34vw', lg: '27vw', xl: '24vw' }}
							mb='4'
							rounded='md'
						/>
						<SkeletonText width={{ base: '90vw' }} mt='2' spacing='2' />
					</div>
				))
			) : (
				<div className='w-full flex items-center justify-center'>
					<div className='flex flex-col md:flex-row items-center justify-center w-[88vw] md:w-[96vw] gap-x-[2vw]'>
						<Link
							href={`/nota/${article?.slug}`}
							className='relative flex flex-col items-center justify-center w-full md:w-[40%] lg:w-[47.1%] xl:w-[52.7%] 2xl:w-[52.7%] h-[64vw] md:h-[38vw] lg:h-[31vw] xl:h-[28vw]'
						>
							<img
								src={article?.featuredImage.node.sourceUrl}
								className='absolute not-selectable top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] inset-0 w-full h-[60vw] md:h-[31.7vw] lg:h-[28vw] xl:h-[25vw] object-cover mb-4 rounded-md z-20'
								alt={article?.title}
							/>
							<div className='absolute bg-black opacity-50 not-selectable top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] inset-0 w-full h-[60vw] md:h-[31.7vw] lg:h-[28vw] xl:h-[25vw] object-cover mb-4 rounded-md z-20' />
							<p className='absolute w-[80%] font-medium text-center text-brand-white-smoke text-[5vw] md:text-[3vw] lg:text-[3vw] xl:text-[2.3vw] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-30'>
								{article?.title}
							</p>
						</Link>
						<div className='relative w-full md:w-[60%] lg:w-[52.9%] xl:w-[47.3%] 2xl:w-[47.3%] h-[49.5vw] md:h-[31.7vw] lg:h-[28vw] xl:h-[25vw]'>
							<iframe
								width='100%'
								height='100%'
								src='https://www.youtube.com/embed/zkDGaaVYNYs?autoplay=1&mute=1'
								frameborder='0'
								allowfullscreen
								loop
								className='rounded-md'
							></iframe>
							<a
								href='https://tinyurl.com/icpnl-youtube'
								rel='noopener noreferrer'
								target='_blank'
								alt='youtube'
								className='absolute inline-flex items-center justify-center text-center text-[#323232] top-[3%] md:top-[6%] lg:top-[3%] right-[1%] translate-x-[-10%] w-[27%] lg:w-[20%] h-auto bg-[#FFF] bg-opacity-[0.8] rounded-lg z-50 py-[0.5%] px-[2%] lg:px-[1%]'
							>
								<p className='font-semibold text-[12px] lg:text-[13px]'>
									Ir a canal de youtube
								</p>
							</a>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default HeroComp
