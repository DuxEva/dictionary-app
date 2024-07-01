import useTheme from "./ThemeContext";

const ThemeSwitcher: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      className={`w-[45px] h-[22px] rounded-full bg-light-4 p-1 relative flex items-center ${
        isDark ? "bg-purple-1" : ""
      }`}
      onClick={toggleTheme}
    >
      <div
        className={`w-[18px] h-[18px] rounded-full bg-light-1 absolute transition-transform duration-300 ${
          isDark ? "transform translate-x-full right-5" : ""
        }`}
      />
    </button>
  );
};

export default ThemeSwitcher;
