import NavBar from '@/components/NavBar'
import Image from 'next/image'

export default function Home() {
	return (
		<main className='w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll'>
			<NavBar />
		</main>
	)
}
