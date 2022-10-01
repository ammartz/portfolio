import Link from "next/link"
export default function NavBar(){
return(
    <div className='flex items-center justify-around pt-6 gap-6 absolute sm:w-full w-[100vw] z-[999]'>
        <Link href='/'>
            <div className=' h-[32px] opacity-30 transform hover:scale-110 hover:opacity-100 duration-200 cursor-pointer'>
                <h1 className="text-white text-xl text-center">HOME</h1>
            </div>
        </Link>
        <Link href='/about'>
            <div className=' h-[32px] opacity-30 transform hover:scale-110 hover:opacity-100 duration-200 cursor-pointer'>
                <h1 className="text-white text-xl text-center">ABOUT</h1>
            </div>
        </Link>
        <Link href='/project'>
            <div className=' h-[32px] opacity-30 transform hover:scale-110 hover:opacity-100 duration-200 cursor-pointer '>
                <h1 className="text-white text-xl text-center truncate ">MY WORK</h1>
            </div>
        </Link>
        
    </div>
)
}
