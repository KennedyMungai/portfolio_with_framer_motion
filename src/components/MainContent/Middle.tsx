'use client'
type Props = {}

const Middle = (props: Props) => {
	return (
		<section
			id='Home'
			className='max-w-contentContainer mx-auto py-10 md:py-24 flex flex-col gap-4 lg:gap-8 xl:px-4'
		>
			<h3 className='text-textGreen text-lg tracking-wide'>
				Hi, my name is
			</h3>
			<h1 className=''>
				Kennedy Mungai.<span> I build things for the web</span>
			</h1>
		</section>
	)
}

export default Middle
