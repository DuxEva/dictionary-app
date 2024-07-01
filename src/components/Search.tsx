import { FiSearch } from "react-icons/fi";

interface SearchProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void; // New prop for handling search button click
}

const Search = ({ value, onChange, onSearch }: SearchProps) => {
  return (
    <div className="bg-light-2 mt-10 w-full h-[45px] flex items-center justify-between p-2 rounded-lg">
      <input
        className="bg-light-2 border-none outline-none h-[25px] w-[95%] p-2 text-xl font-bold placeholder:text-lg placeholder:font-normal"
        type="text"
        placeholder="Keyword"
        value={value}
        onChange={onChange}
      />
      <button className="text-purple-1" onClick={onSearch}>
        <FiSearch size={25} />
      </button>
    </div>
  );
};

export default Search;
