import SectionTitle from './SectionTitle'

type Props = {}

const About = (props: Props) => {
	return (
		<section
			id='about'
			className='max-w-containerSmall mx-auto py-10 lg:py-32 flex flex-col gap-8'
		>
			<SectionTitle title={'About'} title_number={1} />
			<div className=''>
				<div className=''></div>
				<div className=''></div>
			</div>
		</section>
	)
}

export default About
