import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";

import { useResultContext } from "../contexts/ResultContextProvider";

const Results = () => {
  const { results, isLoading, getResult, searchTerm } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    getResult(`/?query=${searchTerm}&limit=50&related_keywords=true`);
  }, [searchTerm]);

  if (isLoading) {
    return "Loading...";
  }

  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {results?.results?.map(({ url, title }, index) => (
            <div key={index} className="md:w-2/5 w-full">
              <a href={url} target="_blank" rel="noreferrer">
                <p className="text-sm">
                  {url.length > 30 ? url.substring(0, 30) : url}
                </p>
                <p className="text-lg hover:underline text-blue-700">{title}</p>
              </a>
            </div>
          ))}
        </div>
      );
    // case "/images":
    //   return "SEarch";
    // case "/news":
    //   return "SEarch";
    // case "/videos":
    //   return "SEarch";

    default:
      return "error";
  }
};

export default Results;
