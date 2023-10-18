import Image from 'next/image'
import { MainContent, SideBar } from '../../components'



export default function Home() {
  return (
    <main className='page-wrapper'>
     <SideBar />
     <MainContent />
    </main>
   
  )
}
