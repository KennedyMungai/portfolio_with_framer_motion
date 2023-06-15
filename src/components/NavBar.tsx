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
					<ul>
						<Link
							href={'#home'}
							className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link ease-out'
						>
							<li>Home</li>
						</Link>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default NavBar
