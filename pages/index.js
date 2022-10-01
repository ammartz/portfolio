import Link from 'next/link'
import NavBar from '../components/nav-bar'
import Social from '../components/social'
import { getContentData } from '../lib/content';

export async function getStaticProps() {
  const contentData = getContentData();
  return {
    props: {
      contentData,
    },
  };
}



function Index({contentData}) {
  

  return (
  <div>
    
    <NavBar />
    
    
    <div className='page bg-[#202020] sm:grid grid-cols-5 h-[100vh]'>
      <div className='bg-gradient-to-r from-black to-[#202020] flex'>
      </div>
      <div className='grid grid-rows-2 h-full col-span-3'>
        <div className='flex flex-col items-center gap-5 justify-end'>
          
          <h1 className='text-primary text-4xl sm:text-5xl'>{contentData[0].name}</h1>
          
          <h2 className='text-secondary text-shadow font-thin text-md sm:text-xl '>{contentData[0].description}</h2>

        </div>
        <div className='flex flex-col items-center gap-12 justify-center'>
          <Link href='/project'><div className='work-btn'>My Work</div></Link>
          <Social />
        </div>
      </div>
      <div className='bg-gradient-to-l from-black to-[#202020]'>
      </div>
    </div>

  
  </div>
  )
}

export default Index
