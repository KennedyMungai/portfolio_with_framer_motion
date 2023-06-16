type Props = {}

const SectionTitle = (props: Props) => {
	return (
		<h2 className='text-2xl font-semibold flex flex-row items-center'>
			<span className='text-base md:text-lg text-textGreen mr-2'>
				01.{' '}
			</span>
			About Me
			<span className='hidden md:inline-flex flex md:w-60 lg:w-72 h-[.5px] bg-gray-700 ml-6'></span>
		</h2>
	)
}

export default SectionTitle
