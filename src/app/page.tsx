import NavBar from '@/components/NavBar'
import Image from 'next/image'

export default function Home() {
	return (
		<main className='w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll'>
			<NavBar />
			<div className='w-full h-[88vh] xl:flex items-center gap-20 justify-between'>
				<div className=''></div>
				<div className=''></div>
				<div className=''></div>
			</div>
		</main>
	)
}
