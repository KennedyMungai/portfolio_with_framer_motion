import SectionTitle from './SectionTitle'
import { AiFillThunderbolt } from 'react-icons/ai'
import Image from 'next/image'

type Props = {}

const About = (props: Props) => {
	return (
		<section
			id='about'
			className='max-w-containerSmall mx-auto py-10 lg:py-32 flex flex-col gap-8'
		>
			<SectionTitle title={'About'} title_number={1} />
			<div className='flex flex-col lg:flex-row gap-16'>
				<div className='w-full lg:w-2/3 text-base text-textDark font-medium flex flex-col gap-4'>
					<p>
						Hi, my name is Kennedy Mungai, I am a passionate self
						taught fullstack web developer and a life long lover of
						knowledge and art. I use react with typescript as my
						main framework and fastapi for my REST api backend,
						MySQL as my database. I can also use firebase, MongoDB
						and redis for projects with specialized requirements. I
						like react because of its ease of use and huge network
						of users, although these days I use NextJS instead of
						Create React App or React generated by Vite on smaller
						projects. FastAPI makes it very easy to create, test,
						deploy and maintain both small scale and large scale
						projects. The fact that it is a python framework makes
						it easy to write custom analytics functionality using
						data science libraries. The ease of use also extends to
						AI and Machine Learning logic for functionality like
						recommendation systems and Computer vision.
					</p>
					<p>
						This is a list of all the technologies I am proficient
						at🏄
					</p>
					<ul>
						<li>
							<span className='flex items-center gap-3'>
								<AiFillThunderbolt className='text-yellow-500' />{' '}
								Javascript
							</span>
						</li>
						<li>
							<span className='flex items-center gap-3'>
								<AiFillThunderbolt className='text-yellow-500' />{' '}
								Typescript
							</span>
						</li>
						<li>
							<span className='flex items-center gap-3'>
								<AiFillThunderbolt className='text-yellow-500' />{' '}
								HTML and CSS
							</span>
						</li>
						<li>
							<span className='flex items-center gap-3'>
								<AiFillThunderbolt className='text-yellow-500' />{' '}
								Docker and Docker Compose
							</span>
						</li>
						<li>
							<span className='flex items-center gap-3'>
								<AiFillThunderbolt className='text-yellow-500' />{' '}
								MySQL
							</span>
						</li>
						<li>
							<span className='flex items-center gap-3'>
								<AiFillThunderbolt className='text-yellow-500' />{' '}
								MongoDB
							</span>
						</li>
						<li>
							<span className='flex items-center gap-3'>
								<AiFillThunderbolt className='text-yellow-500' />{' '}
								Redis
							</span>
						</li>
						<li>
							<span className='flex items-center gap-3'>
								<AiFillThunderbolt className='text-yellow-500' />{' '}
								FastAPI
							</span>
						</li>
						<li>
							<span className='flex items-center gap-3'>
								<AiFillThunderbolt className='text-yellow-500' />{' '}
								TensorFlow
							</span>
						</li>
						<li>
							<span className='flex items-center gap-3'>
								<AiFillThunderbolt className='text-yellow-500' />{' '}
								Data Science with Numpy, Pandas, SciKit Learn
								and MatplotLib
							</span>
						</li>
					</ul>
				</div>
				<div className=''>
					<Image
						src='/images/Profile.jpg'
						width={300}
						height={300}
						alt={'Avatar'}
						className='rounded-full'
					/>
				</div>
			</div>
		</section>
	)
}

export default About
