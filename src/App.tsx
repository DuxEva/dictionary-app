import Navbar from "./components/Navbar";
import Search from "./components/Search";
import { useState } from "react";
import ContentContainer from "./components/ContentContainer";
import { Meaning } from "./components/ContentContainer";
import useTheme from "./components/ThemeContext";
import NotFound from "./components/NotFound";

const App = () => {
  const [search, setSearch] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [showError, setShowError] = useState<boolean>(false);
  const { isDark } = useTheme();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setShowError(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleClickSearch();
    }
  };

  const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/`;

  const fetchData = async (word: string) => {
    try {
      setLoading(true);
      setError("");
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
      setError("No results found");
    } finally {
      setLoading(false);
    }
  };

  const handleClickSearch = () => {
    if (!search.trim()) {
      setShowError(true);
      return;
    }
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
      className={`min-h-screen w-full flex justify-center pt-10 ${
        isDark
          ? "bg-dark-1 transition-all text-light-1"
          : "bg-light-1 transition-all"
      }`}
    >
      <div className="w-1/2 max-md:w-full max-sm:w-full  h-full p-4">
        <Navbar />
        <Search
          value={search}
          onChange={handleSearchChange}
          onSearch={handleClickSearch}
          handleKeyDown={handleKeyDown}
          showError={showError}
        />
        {loading && <p className="text-center mt-10">Searching...</p>}
        {!loading && error && <NotFound />}
        {!loading && data && !error && (
          <>
            <div className="flex justify-between items-center mt-10">
              <div className="flex flex-col gap-4">
                <h1 className="text-4xl font-bold">{data[0]?.word}</h1>
                <p className="text-purple-1 text-2xl">{data[0]?.phonetic}</p>
              </div>
              {data[0]?.phonetics[0] && (
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
            {data[0].meanings.map((meaning: Meaning, index: number) => (
              <ContentContainer key={index} meaning={meaning} />
            ))}
            <div className="h-[2px] w-full bg-light-3 my-7" />
            <div className="flex gap-8">
              <p className="font-semibold">source</p>
              <p>{data[0]?.sourceUrls[0]} </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
