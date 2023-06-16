'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
	SlSocialFacebook,
	SlSocialInstagram,
	SlSocialLinkedin,
	SlSocialYoutube
} from 'react-icons/sl'
import { TbBrandGithub } from 'react-icons/tb'

type Props = {}

const LeftSide = (props: Props) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: -50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1.5, delay: 1 }}
			className='w-full h-full flex flex-col items-center justify-end gap-4 text-textLight'
		>
			<div className='flex flex-col items-center justify-center gap-4 text-textLight'>
				<Link
					href='https://www.github.com/KennedyMungai'
					target='_blank'
				>
					<span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
						<TbBrandGithub size={30} />
					</span>
				</Link>
				<Link
					href='https://https.www.youtube.com/channel/KennedyMungai'
					target='_blank'
				>
					<span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
						<SlSocialYoutube size={30} />
					</span>
				</Link>
				<Link
					href='https://www.facebook.com/kennedy.mungai.9'
					target='_blank'
				>
					<span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
						<SlSocialFacebook size={30} />
					</span>
				</Link>
				<Link
					href='https://www.linkedin.com/in/kennedy-mungai-a8b5b917b'
					target='_blank'
				>
					<span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
						<SlSocialLinkedin size={30} />
					</span>
				</Link>
				<Link
					href='https://www.instagram.com/kennedy_mungai'
					target='_blank'
				>
					<span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
						<SlSocialInstagram size={30} />
					</span>
				</Link>
			</div>
			<div className='w-[2px] h-32 bg-textDark'></div>
		</motion.div>
	)
}

export default LeftSide
