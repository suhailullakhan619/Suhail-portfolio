import type React from "react";

const MenuContent = ({
  menu,
  setMenu,
}: {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <div className="flex flex-col w-full gap-2 text-center bg-blue-50 py-6  px-4 z-20">
      <a
        onClick={toggleMenu}
        href="#Home"
        className="h-[30px]   hover:text-black hover:font-bold cursor-pointer active:font-bold active:scale-[1.1] transition-all duration-300"
      >
        Home
      </a>
      <a
        onClick={toggleMenu}
        href="#Education"
        className="h-[30px]   hover:text-black hover:font-bold cursor-pointer active:font-bold active:scale-[1.1] transition-all duration-300"
      >
        Education
      </a>
      <a
        onClick={toggleMenu}
        href="#Skills"
        className="h-[30px]   hover:text-black hover:font-bold cursor-pointer active:font-bold active:scale-[1.1] transition-all duration-300"
      >
        Skills
      </a>
      <a
        onClick={toggleMenu}
        href="#Experience"
        className="h-[30px]   hover:text-black hover:font-bold cursor-pointer active:font-bold active:scale-[1.1] transition-all duration-300"
      >
        Experiences
      </a>
      <a
        onClick={toggleMenu}
        href="#Projects"
        className="h-[30px]   hover:text-black hover:font-bold cursor-pointer active:font-bold active:scale-[1.1] transition-all duration-300"
      >
        Projects
      </a>
      <a
        onClick={toggleMenu}
        href="#ContactMe"
        className="h-[30px]   hover:text-black hover:font-bold cursor-pointer active:font-bold active:scale-[1.1] transition-all duration-300"
      >
        Contact Me
      </a>
    </div>
  );
};

export default MenuContent;
