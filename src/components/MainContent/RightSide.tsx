'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'


type Props = {}

const RightSide = (props: Props) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 70 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1.5, delay: 1 }}
			className='w-full h-full flex flex-col items-center justify-end gap-6 text-textLight'
		>
			<Link href='mailto:kennedymungaifmab@gmail.com'>
				<p className='text-sm rotate-90 w-72 tracking-wide text-textGreen'>
					My Email Address
				</p>
			</Link>
			<span className='w-[2px] h-32 bg-textGreen inline-flex'></span>
		</motion.div>
	)
}

export default RightSide
