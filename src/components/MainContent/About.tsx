import SectionTitle from './SectionTitle'

type Props = {}

const About = (props: Props) => {
	return (
		<section
			id='about'
			className='max-w-containerSmall mx-auto py-10 lg:py-32 flex flex-col gap-8'
		>
			<SectionTitle />
		</section>
	)
}

export default About
