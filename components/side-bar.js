import { useEffect, useState } from 'react'
const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
  
    useEffect(() => {
      const updatePosition = () => {
        setScrollPosition(window.pageYOffset);
      }
      window.addEventListener("scroll", updatePosition);
      updatePosition();
      return () => window.removeEventListener("scroll", updatePosition);
    }, []);
  
    return scrollPosition;
  };

  const scrolling = () => {
  
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
  });
  }


  const SideBar = () => {
      return(
        <div className={useScrollPosition() > 99 ? 'fixed right-5 px-2} opacity-100 transition visible ease-in-out duration-1000' : 'fixed w-full flex justify-end right-5 px-2} opacity-0 invisible transition ease-in-out duration-1000'}>
        <div className="border border-primary w-[50px] h-[50px] text-lg flex justify-center items-center text-primary hover:outline outline-1 outline-primary outline-offset-2 hover:text-white hover:bg-primary cursor-pointer duration-200">
          <button onClick={scrolling} className="object-none object-right p-2 font-extrabold text-4xl"> ⬆ </button>
        </div>
      </div>  
      );
  }
  export default SideBar