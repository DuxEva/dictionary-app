// App.tsx
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import { useState } from "react";
import ContentContainer from "./components/ContentContainer";
import { Meaning } from "./components/ContentContainer";
import useTheme from "./components/ThemeContext";

const App = () => {
  const [search, setSearch] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>(null);
  const { isDark } = useTheme();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleClickSearch();
    }
  };

  const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/`;

  const fetchData = async (word: string) => {
    try {
      console.log(`Fetching data for: ${word}`);
      const res = await fetch(`${URL}${word}`);
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      console.log("Data fetched successfully:", data);
      setData(data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  const handleClickSearch = () => {
    console.log("Button clicked");
    fetchData(search);
  };

  const playAudio = () => {
    console.log("Playing audio");
    const audio = data && data[0]?.phonetics[0]?.audio;
    if (audio) {
      new Audio(audio).play();
    }
  };

  return (
    <div
      className={` min-h-screen w-full flex justify-center pt-10 ${
        isDark
          ? "bg-dark-1 transition-all text-light-1"
          : "bg-light-1 transition-all"
      }`}
    >
      <div className="w-1/2 h-full p-4">
        <Navbar />
        <Search
          value={search}
          onChange={handleSearchChange}
          onSearch={handleClickSearch}
          handleKeyDown={handleKeyDown}
        />
        <div className="flex justify-between items-center mt-10">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold">{data && data[0]?.word}</h1>
            <p className="text-purple-1 text-2xl">
              {data && data[0]?.phonetic}
            </p>
          </div>
          {data && (
            <button
              className="rounded-full flex items-center justify-center"
              type="button"
              onClick={playAudio}
            >
              <svg width="75" height="75" viewBox="0 0 75 75">
                <g fill="#A445ED" fillRule="evenodd">
                  <circle cx="37.5" cy="37.5" r="37.5" opacity=".25" />
                  <path d="M29 27v21l21-10.5z" />
                </g>
              </svg>
            </button>
          )}
        </div>
        {data && (
          <>
            {data[0].meanings.map((meaning: Meaning, index: number) => (
              <ContentContainer key={index} meaning={meaning} />
            ))}
          </>
        )}
        {data && (
          <>
            <div className="h-[2px] w-full bg-light-3 my-7" />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
