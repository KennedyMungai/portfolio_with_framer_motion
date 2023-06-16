'use client'
import {motion} from 'framer-motion'

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
				className=''
			>
				Kennedy Mungai.<span> I build things for the web</span>
			</motion.h1>
		</section>
	)
}

export default Middle
