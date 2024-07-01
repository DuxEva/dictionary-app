import { FiSearch } from "react-icons/fi";
import useTheme from "./ThemeContext";

interface SearchProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
  handleKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  showError: boolean;
}

const Search = ({
  value,
  onChange,
  onSearch,
  handleKeyDown,
  showError,
}: SearchProps) => {
  const { isDark } = useTheme();

  return (
    <div className="w-full mt-10">
      <div
        className={`w-full h-[45px] flex items-center justify-between p-2 rounded-lg ${
          isDark ? "bg-dark-4" : "bg-light-2"
        } ${showError ? "border border-red-500" : ""}`}
      >
        <input
          className={`border-none outline-none h-[25px] w-[95%] p-2 text-xl font-bold placeholder:text-lg placeholder:font-normal ${
            isDark ? "bg-dark-4" : "bg-light-2"
          }`}
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
      {showError && (
        <p className="text-red-500 mb-2">Whoops, can’t be empty…</p>
      )}
    </div>
  );
};

export default Search;
