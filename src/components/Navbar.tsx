import React from "react";
import { IoMoonOutline } from "react-icons/io5";
import ThemeSwitcher from "./ThemeSwitcher";
import FontSwitcher from "./FontSwitcher";
import useTheme from "./ThemeContext";

const Navbar: React.FC = () => {
  const { isDark } = useTheme();
  const [, setFont] = React.useState("Sans-serif");

  const handleFontChange = (newFont: string) => {
    setFont(newFont);
    document.body.style.fontFamily = newFont;
  };

  return (
    <div className={` flex justify-between items-center h-12`}>
      <div className="w-[40px] h-[40px] max-md:w-full max-sm:w-[30px] max-sm:h-[30px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 34 38"
        >
          <g
            fill="none"
            fillRule="evenodd"
            stroke="#838383"
            strokeLinecap="round"
            strokeWidth="1.5"
          >
            <path d="M1 33V5a4 4 0 0 1 4-4h26.8A1.2 1.2 0 0 1 33 2.2v26.228M5 29h28M5 37h28" />
            <path strokeLinejoin="round" d="M5 37a4 4 0 1 1 0-8" />
            <path d="M11 9h12" />
          </g>
        </svg>
      </div>
      <div className="flex gap-9 max-sm:gap-4 items-center">
        <FontSwitcher onChange={handleFontChange} />
        <div className="w-[2px] h-10 bg-light-3 rounded-lg " />
        <ThemeSwitcher />
        <div className="flex items-center justify-center w-[35px] h-[25px]">
          <button className={`text-${isDark ? "purple-1" : "light-4"}`}>
            <IoMoonOutline size={25} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
