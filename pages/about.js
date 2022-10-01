import { getAboutData } from "../lib/content";
export async function getStaticProps() {
    // Add the "await" keyword like this:
    const aboutData = await getAboutData();
  
    return {
      props: {
        aboutData,
      },
    };
  }
import NavBar from "../components/nav-bar";
import SideBar from "../components/side-bar";
  export default function About({aboutData}) {
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

                    
                </div>
                
                <div dangerouslySetInnerHTML={{ __html: aboutData.contentHtml }} className='text-white' />

            </div>
           
            <div className='bg-gradient-to-l from-black to-[#202020]'>
            </div>
        </div>
        
    </div>

    ) 
  }