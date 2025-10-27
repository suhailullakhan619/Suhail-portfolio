
import  { useState } from 'react'
import Logo from '../../assets/S letter Logo.svg'
import { Link } from 'react-router-dom'
import {  Menu } from 'lucide-react'
import MenuContent from './MenuContent'
import { SquareX } from 'lucide-react'
import './Navbar.css'
const Navbar = () => {
  const [menu,setMenu]=useState(false);
   const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // smooth scrolling
    });
   }
  return (
   <>
   <header>
   <div className='navmainDiv bg-blue-100'>
         <Link to='/'>
         <img className='w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] cursor-pointer ' src={Logo} alt="Logo" />
         </Link>
            <div className='sm:hidden cursor-pointer' onClick={() => setMenu(!menu)}>
          {menu ? <SquareX  size={30} /> : <Menu onClick={scrollToTop} size={30} />}
            </div>
        <div className='hidden sm:flex sm:flex-row sm:gap-8'>
               <div className="relative group cursor-pointer active:scale-[0.8]">
                 <span className="text-black ">Home</span>
                 <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full "></span>
              </div>
              <div className='relative group cursor-pointer active:scale-[0.8]'>
                 <span className='text-black'>Education</span>
                 <span className='absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full'></span>
              </div>
               <div className='relative group cursor-pointer active:scale-[0.8]'>
                 <span className='text-black'>Skills</span>
                 <span className='absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full'></span>
              </div>
              <div className='relative group cursor-pointer active:scale-[0.8] '>
                <span className='text-black'>Experience</span>
                <span className='absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full'></span>
              </div>
              <div className='relative group cursor-pointer active:scale-[0.8]'>
                 <span className='text-black'>Contact</span>
                 <span className='absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full'></span>
              </div>
           </div>


  </div>
</header>
      {menu  && <div className='flex w-full z-40 sm:hidden ' 
    ><MenuContent/></div>}



    

   
   </>
  )
}

export default Navbar;

