
const MenuContent = () => {
  return (
   
      <div className='flex flex-col w-full gap-2 text-center bg-blue-50 py-6  px-4 z-20'>
          <div className='h-[30px]   hover:text-black hover:font-bold cursor-pointer active:font-bold active:scale-[1.1] transition-all duration-300'>Home</div>
          <div className='h-[30px]   hover:text-black hover:font-bold cursor-pointer active:font-bold active:scale-[1.1] transition-all duration-300'>Education</div>
          <div className='h-[30px]   hover:text-black hover:font-bold cursor-pointer active:font-bold active:scale-[1.1] transition-all duration-300'>Skills</div>
          <div className='h-[30px]   hover:text-black hover:font-bold cursor-pointer active:font-bold active:scale-[1.1] transition-all duration-300'>Experiences</div>
          <div className='h-[30px]   hover:text-black hover:font-bold cursor-pointer active:font-bold active:scale-[1.1] transition-all duration-300'>Contact Me</div>
      </div>
  
  )
}

export default MenuContent