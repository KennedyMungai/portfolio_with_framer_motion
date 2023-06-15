'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

const NavBar = (props: Props) => {
	return (
		<nav className='w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-10 bg-bodyColor px-4'>
			<div className='max-w-container h-full mx-auto py-1 flex items-center justify-between'>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
				>
					<Image
						src={'/images/logo.png'}
						width={80}
						height={80}
						alt={'Logo'}
						className='rounded-full'
					/>
				</motion.div>
				<div className=''>
					<ul className='flex gap-7 text-[13px]'>
						<Link
							href={'#home'}
							className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link ease-out'
						>
							<motion.li
								initial={{ y: -10, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.1 }}
							>
								Home
							</motion.li>
						</Link>
						<Link
							href={'#about'}
							className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link ease-out'
						>
							<motion.li
								initial={{ y: -10, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.2 }}
							>
								<span className='text-textGreen'>01. </span>
								About
							</motion.li>
						</Link>
						<Link
							href={'#experience'}
							className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link ease-out'
						>
							<motion.li
								initial={{ y: -10, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.3 }}
							>
								<span className='text-textGreen'>02. </span>
								Experience
							</motion.li>
						</Link>
						<Link
							href={'#project'}
							className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link ease-out'
						>
							<motion.li
								initial={{ y: -10, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.4 }}
							>
								<span className='text-textGreen'>03. </span>
								Project
							</motion.li>
						</Link>
						<Link
							href={'#contact'}
							className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link ease-out'
						>
							<motion.li
								initial={{ y: -10, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.5 }}
							>
								<span className='text-textGreen'>04. </span>
								Contact
							</motion.li>
						</Link>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default NavBar
