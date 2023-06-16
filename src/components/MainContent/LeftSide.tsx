import { TbBrandGithub } from 'react-icons/tb'
import {
	SlSocialYoutube,
	SlSocialFacebook,
	SlSocialLinkedin,
	SlSocialInstagram
} from 'react-icons/sl'
import Link from 'next/link'

type Props = {}

const LeftSide = (props: Props) => {
	return (
		<div className='w-full h-full flex flex-col items-center justify-end gap-4 text-textLight'>
			<div className='flex flex-col items-center gap-4'>
				<Link
					href='https://www.github.com/KennedyMungai'
					target='_blank'
				>
					<span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
						<TbBrandGithub size={30} />
					</span>
				</Link>
			</div>
		</div>
	)
}

export default LeftSide
