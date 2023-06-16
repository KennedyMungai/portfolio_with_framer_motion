'use client'
import {motion} from 'framer-motion'
import Link from 'next/link'
import { Typewriter } from 'react-simple-typewriter'

type Props = {}

const Middle = (props: Props) => {
	return (
		<section
			id='Home'
			className='max-w-contentContainer mx-auto py-10 md:py-24 flex flex-col gap-4 lg:gap-8 xl:px-4'
		>
			<motion.h3
				initial={{ y: 10, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.6 }}
				className='text-textGreen text-lg tracking-wide'
			>
				Hi, my name is
			</motion.h3>
			<motion.h1
				initial={{ y: 10, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.8 }}
				className='text-4xl lg:text-6xl font-semibold flex flex-col uppercase'
			>
				<span>
					<Typewriter
						words={['Kennedy', 'Mungai', 'Kennedy Mungai']}
						loop={3}
						cursor
						cursorStyle='_'
						cursorColor='#fff'
						typeSpeed={70}
						deleteSpeed={50}
						delaySpeed={1000}
					/>
				</span>
				<span className='text-textDark text-3xl lowercase'>
					I build things for the web
				</span>
			</motion.h1>
			<motion.p
				initial={{ y: 10, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5, delay: 1 }}
				className='text-textDark text-lg tracking-wide'
			>
				I am a web developer with over 5 years experience using React as
				my go to frontend framework. I have a strong foundation in
				front-end and back-end development. I specialize in creating
				user friendly experiences for my users. I also have a lot of
				experience creating machine learning models which serve as
				recommendation systems for the backend of my apps.
				<span className='text-textGreen cursor-pointer flex mt-5'>
					<Link href='#Contact' className='hover:underline'>
						Learn More
					</Link>
				</span>
			</motion.p>
			<button className='px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300 max-w-[20rem]'>
				Check Out My Projects
			</button>
		</section>
	)
}

export default Middle
