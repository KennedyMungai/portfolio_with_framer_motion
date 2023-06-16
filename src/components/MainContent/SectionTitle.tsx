type Props = {
	title_number: number
	title: string
}

const SectionTitle = ({title_number, title}: Props) => {
	return (
		<h2 className='text-2xl font-semibold flex flex-row items-center'>
			<span className='text-base md:text-lg text-textGreen mr-2'>
				{title_number + '. '}
			</span>
			{title}
			<span className='hidden md:inline-flex md:w-60 lg:w-72 h-[.5px] bg-gray-700 ml-6'></span>
		</h2>
	)
}

export default SectionTitle
