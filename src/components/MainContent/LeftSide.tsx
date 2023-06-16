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
			<div className=''>
				<Link
					href='https://www.github.com/KennedyMungai'
					target='_blank'
				>
					<span>
						<TbBrandGithub size={30} />
					</span>
				</Link>
			</div>
		</div>
	)
}

export default LeftSide
