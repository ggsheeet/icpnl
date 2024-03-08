import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import HeaderComp from '@/components/HeaderComp'
import NewsSlider from '@/components/NewsSlider'
import CategorySelect from '@/components/CategorySelect'
import CoursesComp from '@/components/CoursesComp'
import PresSSATPod from '@/components/PressSATPod'
import FooterMain from '@/components/FooterMain'
import { useQuery } from '@apollo/client'
import {
	GET_POSTS_FIS,
	GET_POSTS_LAB,
	GET_POSTS_CE,
	GET_POSTS_NA,
	GET_POSTS_EM,
	GET_POSTS_FIN,
	GET_POSTS_RSE
} from '@/lib/queries'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { Center, Divider, Button, useDisclosure } from '@chakra-ui/react'
import FoliosComp from '@/components/FoliosComp'

export default function Home() {
	const { isOpen, onOpen, onClose } = useDisclosure()

	const [currentDate, setCurrentDate] = useState(null)

	useEffect(() => {
		const updateCurrentDate = () => {
			const now = new Date()
			const options = { day: 'numeric', month: 'long', year: 'numeric' }

			// Use Intl.DateTimeFormat to format the date in Spanish
			const formattedDate = new Intl.DateTimeFormat('es-ES', options).format(
				now
			)

			setCurrentDate(formattedDate)
		}

		// Calculate the time until midnight
		const now = new Date()
		const midnight = new Date(now)
		midnight.setHours(24, 0, 0, 0)
		const timeUntilMidnight = midnight - now

		// Update the current date immediately and then set up an interval to update it daily at midnight
		updateCurrentDate()

		const intervalId = setInterval(updateCurrentDate, 24 * 60 * 60 * 1000) // Update every 24 hours

		// Clear the interval when the component is unmounted
		return () => clearInterval(intervalId)
	}, [])

	const {
		loading: loadingFIS,
		error: errorFIS,
		data: dataFIS
	} = useQuery(GET_POSTS_FIS)
	const postsFIS = dataFIS?.posts?.nodes || []

	const {
		loading: loadingLAB,
		error: errorLAB,
		data: dataLAB
	} = useQuery(GET_POSTS_LAB)
	const postsLAB = dataLAB?.posts?.nodes || []

	const {
		loading: loadingCE,
		error: errorCE,
		data: dataCE
	} = useQuery(GET_POSTS_CE)
	const postsCE = dataCE?.posts?.nodes || []

	const {
		loading: loadingNA,
		error: errorNA,
		data: dataNA
	} = useQuery(GET_POSTS_NA)
	const postsNA = dataNA?.posts?.nodes || []

	const {
		loading: loadingEM,
		error: errorEM,
		data: dataEM
	} = useQuery(GET_POSTS_EM)
	const postsEM = dataEM?.posts?.nodes || []

	const {
		loading: loadingFIN,
		error: errorFIN,
		data: dataFIN
	} = useQuery(GET_POSTS_FIN)
	const postsFIN = dataFIN?.posts?.nodes || []

	const {
		loading: loadingRSE,
		error: errorRSE,
		data: dataRSE
	} = useQuery(GET_POSTS_RSE)
	const postsRSE = dataRSE?.posts?.nodes || []

	const combinedPosts = [
		...postsFIS,
		...postsLAB,
		...postsCE,
		...postsNA,
		...postsEM,
		...postsFIN,
		...postsRSE
	]

	const categories = {
		'Fiscal': postsFIS,
		'Laboral': postsLAB,
		'Comercio Exterior': postsCE,
		'Nacional': postsNA,
		'Empresas': postsEM,
		'Finanzas': postsFIN,
		'RSE': postsRSE
	}

	const categoriesArray = [
		{ name: 'Fiscal', slug: 'fiscal' },
		{ name: 'Laboral', slug: 'laboral' },
		{ name: 'Comercio Exterior', slug: 'comercio-exterior' },
		{ name: 'Nacional', slug: 'nacional' },
		{ name: 'Empresas', slug: 'empresas' },
		{ name: 'Finanzas', slug: 'finanzas' },
		{ name: 'RSE', slug: 'rse' }
	]

	const newsArticles = Object.entries(categories).map(
		([category, articles]) => ({
			category,
			articles: articles
				.map((post) => ({
					id: post.id,
					title: post.title,
					description: post.content,
					featuredImage: post.featuredImage,
					date: post.date,
					tags: post.tags,
					slug: post.slug
				}))
				.sort((a, b) => new Date(a.date) - new Date(b.date))
		})
	)

	return (
		<>
			<Head>
				<title>ICPNL Boletín</title>
				<meta name='description' content='Boletín diario para ICPNL México' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/icpnl-ico.svg' />
			</Head>
			<div className='bg-brand-white-smoke'>
				<HeaderComp onOpen={onOpen} isOpen={isOpen} onClose={onClose} />
				<NewsSlider articles={newsArticles} />
				<div className='flex bg-brand-white-smoke justify-center px-[10%] md:px-[3%] lg:px-[2%] py-[1%]'>
					<p className='font-extrabold font-figtree text-brand-icpnl-red text-center text-[2.5vh] md:text-[2.5vw] lg:text-[1.4vw] border-b-[0.36vh] border-b-brand-pepper pb-[3%] md:pb-[0.5%]'>
						Boletín de Noticias Diario ({currentDate})
					</p>
				</div>

				<CoursesComp />

				<div className='flex items-center justify-center md:hidden pt-[4%] mx-[3.6%] text-[1.7vh] text-center text-brand-bp-green font-medium'>
					<ChevronLeftIcon width='6vw' height='6vw' />
					<p className='px-[1%]'>
						Desliza para navegar entre las diferentes categorías
					</p>
					<ChevronRightIcon width='6vw' height='6vw' />
				</div>
				<div className='flex justify-start md:justify-center space-x-[2vw] px-[4%] md:px-[1%] pt-[4%] pb-[4%] md:pt-[2%] md:pb-[3%] lg:pt-[1%] lg:pb-[2%] bg-brand-white-smoke font-figtree font-medium overflow-x-auto'>
					{categoriesArray.map((category) => (
						<Link href={`/noticias/${category.name}`} key={category.slug}>
							<button className='w-[30vw] h-[16vw] md:w-[12vw] md:h-[8vw] lg:w-[11vw] lg:h-[7vw] xl:w-[9.3vw] xl:h-[6.3vw] mx-[1.5%] px-[5%] md:px-[5%] lg:px-[1%] py-[0.5%] bg-brand-icpnl-red rounded-[3vw] md:rounded-[1.2vw] xl:rounded-[1vw] text-white text-[1.6vh] md:text-[1.4vw] lg:text-[1.2vw] xl:text-[1vw] border-[0.5vw] md:border-[0.25vw] border-gray-300'>
								{category.name}
							</button>
						</Link>
					))}
				</div>

				<CategorySelect articles={newsArticles} />

				<PresSSATPod />

        <FoliosComp />

				<div className='flex items-center justify-center'>
					<Button
						onClick={onOpen}
						bgColor='brand.1400'
						color='#FFFFFF'
						_hover={{ bg: 'brand.1200' }}
						variant='solid'
						size={{ base: 'md', md: 'lg' }}
						h={{ base: '7vh', lg: '6vh', xl: '7vh' }}
						fontSize={{ base: 'xs', md: 'md', xl: 'lg' }}
						mt='5%'
						borderRadius={{ base: '2vw', lg: '1vw' }}
					>
						Revistas Editoriales & Sitios Relevantes
					</Button>
				</div>
				<FooterMain />
			</div>
		</>
	)
}
