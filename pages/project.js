import Link from "next/link"
import NavBar from "../components/nav-bar"
import SideBar from "../components/side-bar"
import { getSortedProjectsData } from '../lib/projects';

export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allProjectsData,
    },
  };
}
function MyWork( {allProjectsData} ) {

    return(
        <div>
            <div className=" hidden group sm:flex fixed top-[50vh]">
            <SideBar />
            </div>
            
            <NavBar></NavBar>
            <div className='bg-[#202020] sm:grid grid-cols-5 p-4 sm:p-0'>
                <div className='bg-gradient-to-r from-black to-[#202020]'>
                </div>
                
                <div className="flex flex-col pt-[100px] items-center text-shadow col-span-3">
                    <h1 className="text-primary text-3xl text-center mb-12">MY WORK</h1>
                    {allProjectsData.map(({id, title, description, img}) => (
                        <div key={id} className="flex flex-col items-center mb-[100px]">
                        <img id={img} src={img} width={600} className='shadow-lg' />
                        <br />
                        
                        <div className="max-w-[600px] border border-white flex flex-col items-center p-5">
                            <h1 id={title} className="text-primary text-3xl mb-5 w-full align-start uppercase">{title}</h1>
                            <p id={description} className="text-white mb-5 text-justify">
                                {description}
                            </p>
                        </div>
                        <Link href={'/project/'+id}><div className='project-btn mt-4'>View Project</div></Link>
                    </div>
                    ))}
     
                </div>
     
                <div className='bg-gradient-to-l from-black to-[#202020]'>
                </div>
            </div>
            
        </div>
    )
}
export default MyWork