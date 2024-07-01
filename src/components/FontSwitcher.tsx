import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import useTheme from "./ThemeContext";

const FontSwitcher: React.FC<{ onChange: (font: string) => void }> = ({
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFont, setSelectedFont] = useState("Sans-serif");
  const { isDark } = useTheme();

  const handleFontChange = (font: string) => {
    setSelectedFont(font);
    onChange(font);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        className={`w-[130px] p-2 rounded-lg border-none flex justify-between items-center ${
          isDark
            ? "bg-dark-1 text-light-1 border-dark-4"
            : "bg-light-2 text-dark-1 border-light-4"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedFont}</span>
        <MdOutlineKeyboardArrowDown size={24} />
      </button>
      {isOpen && (
        <ul
          className={`absolute top-10 left-0 w-full border-none rounded-lg z-10 mt-1 ${
            isDark
              ? "bg-dark-1 text-light-1 shadow-lg shadow-purple-1"
              : "bg-white text-dark-1 shadow-lg shadow-gray-200"
          }`}
        >
          {["Sans-serif", "Serif", "Monospace"].map((font) => (
            <li
              key={font}
              className={"p-2 cursor-pointer hover:text-purple-1" }
              onClick={() => handleFontChange(font)}
            >
              {font}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FontSwitcher;
