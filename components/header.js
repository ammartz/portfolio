import Link from "next/link";
import Image from "next/image";

export default function Header({showBar}){

    const show = showBar;

    
    return(
        <div className="mb-2">
            <div className='header flex justify-around'>
                <div className="w-1/3 flex items-center justify-center">
                    <Link href={'/'}>
                    Home
                    </Link>
                </div>
              
                <div className="w-full flex justify-around items-center">
                    <Link href="/search" className="text-md header-btn">Search</Link>
                    <Link href="/register" className="text-md header-btn">Register</Link>
                    <Link href="/today" className="text-md header-btn">Today</Link>
                </div>
                
            </div>
            
    </div>
    )
    
}
