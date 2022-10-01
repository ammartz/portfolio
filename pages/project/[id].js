import { getAllProjectIds, getProjectData } from '../../lib/projects';

export async function getStaticProps({ params }) {
    // Add the "await" keyword like this:
    const projectData = await getProjectData(params.id);
  
    return {
      props: {
        projectData,
      },
    };
  }

export async function getStaticPaths() {
  const paths = getAllProjectIds();
  return {
    paths,
    fallback: false,
  };
}

import NavBar from '../../components/nav-bar';
import SideBar from "../../components/side-bar"
import Link from 'next/link';
export default function Project({projectData}) {
    return(

        <div>
        <NavBar></NavBar>
        <div className=" hidden group sm:flex fixed top-[50vh]">
            <SideBar />
            </div>
        <div className='bg-[#202020] sm:grid grid-cols-5 p-4 sm:p-0'>
            <div className='bg-gradient-to-r from-black to-[#202020]'>
            </div>
            <div className="flex flex-col items-center col-span-3 h-full py-[100px]">
                <div className="flex sm:flex-row-reverse gap-7 flex-col items-center justify-between w-full mb-12">
                    <Link href='/project'><div className='project-btn'>Back to Projects</div></Link>
                    <h1 className="text-primary text-3xl text-center uppercase">{projectData.title}</h1>
                </div>
                
                <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} className='text-white' />

            </div>
           
            <div className='bg-gradient-to-l from-black to-[#202020]'>
            </div>
        </div>
        
    </div>

    ) 
  }