import { createContext, useContext, useState } from "react";

const ResultContext = createContext();

const baseURL = "https://google-search74.p.rapidapi.com";

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const getResult = async (type) => {
    setIsLoading(true);

    const response = await fetch(`${baseURL}${type}`, {
      method: "GET",
      headers: {
        "x-rapidapi-key": "02c3163ab5mshf9af4abdd3df0f2p1e514bjsn3b3bd3a33962",
        "x-rapidapi-host": "google-search74.p.rapidapi.com",
      },
    });

    const data = await response.json();
    console.log(data);

    setResults(data);
    setIsLoading(false);
  };

  return (
    <ResultContext.Provider
      value={{ getResult, results, searchTerm, setSearchTerm, isLoading }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
