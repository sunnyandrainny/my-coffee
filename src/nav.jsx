import React from "react";
// import ShowMenu from './showMenu';
import MenuDesc from "./menudesc";
const Nav = () => {
  return (
    <header className="">
      <nav className="flex lg:justify-around justify-center max-sm:text-xs md:h-[40px] lg:h-[60px] items-center">
        <div className="basis-2/6 text-center text-xl font-bold max-sm:text-[12px]">
          CoffeeStyle.
        </div>
        <MenuDesc />
      </nav>
    </header>
  );
};
export default Nav;
