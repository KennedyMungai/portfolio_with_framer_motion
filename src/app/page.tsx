import LeftSide from '@/components/MainContent/LeftSide'
import NavBar from '@/components/NavBar'
import Image from 'next/image'

export default function Home() {
	return (
		<main className='w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll'>
			<NavBar />
			<div className='w-full h-[88vh] xl:flex items-center gap-20 justify-between'>
				<div className='hidden xl:flex w-32 h-full fixed left-0 bottom-0'>
					<LeftSide />
				</div>
				<div className=''></div>
				<div className=''></div>
			</div>
		</main>
	)
}
