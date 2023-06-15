import Image from 'next/image'
import Link from 'next/link'

type Props = {}

const NavBar = (props: Props) => {
	return (
		<nav className='w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-10 bg-bodyColor px-4'>
			<div className='max-w-container h-full mx-auto py-1 flex items-center justify-between'>
				<div className=''>
					<Image
						src={'/images/logo.png'}
						width={80}
						height={80}
						alt={'Logo'}
						className='rounded-full'
					/>
				</div>
				<div className=''>
					<ul className='flex gap-7 text-[13px]'>
						<Link
							href={'#home'}
							className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link ease-out'
						>
							<li>Home</li>
						</Link>
						<Link
							href={'#about'}
							className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link ease-out'
						>
							<li>
								<span>01. </span>About
							</li>
						</Link>
						<Link
							href={'#experience'}
							className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link ease-out'
						>
							<li>
								<span>02. </span>Experience
							</li>
						</Link>
						<Link
							href={'#project'}
							className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link ease-out'
						>
							<li>
								<span>03. </span>Project
							</li>
						</Link>
						<Link
							href={'#contact'}
							className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link ease-out'
						>
							<li>
								<span>04. </span>Contact
							</li>
						</Link>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default NavBar
