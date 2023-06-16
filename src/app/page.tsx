import LeftSide from '@/components/MainContent/LeftSide'
import RightSide from '@/components/MainContent/RightSide'
import NavBar from '@/components/NavBar'

export default function Home() {
	return (
		<main className='w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll'>
			<NavBar />
			<div className='w-full h-[88vh] xl:flex items-center gap-20 justify-between'>
				<div className='hidden xl:flex w-32 h-full fixed left-0 bottom-0'>
					<LeftSide />
				</div>
				<div className=''></div>
				<div className=''>
					<RightSide />
				</div>
			</div>
		</main>
	)
}
