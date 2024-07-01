// Search.tsx
import { FiSearch } from "react-icons/fi";
import useTheme from "./ThemeContext";

interface SearchProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
  handleKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Search = ({ value, onChange, onSearch, handleKeyDown }: SearchProps) => {
  const { isDark } = useTheme();


  return (
    <div
      className={`mt-10 w-full h-[45px] flex items-center justify-between p-2 rounded-lg ${
        isDark ? "bg-dark-4" : "bg-light-2"
      }`}
    >
      <input
        className={`${
          isDark ? "bg-dark-4" : "bg-light-2"
        } border-none outline-none h-[25px] w-[95%] p-2 text-xl font-bold placeholder:text-lg placeholder:font-normal`}
        type="text"
        placeholder="Keyword"
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
      />
      <button className="text-purple-1" onClick={onSearch}>
        <FiSearch size={25} />
      </button>
    </div>
  );
};

export default Search;
