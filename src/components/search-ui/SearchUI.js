import React, { useEffect, useState } from "react";

function SearchUI() {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const [isResultVisible, setIsResultVisible] = useState(false);

  useEffect(() => {
    let timerId;
    timerId = setTimeout(() => {
      fetchData();
    }, 200);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchText]);

  const fetchData = async () => {
    const data = await fetch(
      `https://www.google.com/complete/search?client=firefox&q=${searchText}`
    );
    const json = await data.json();

    setSearchResults(json[1]);
  };
  return (
    <div className="m-10">
      <input
        onChange={(e) => setSearchText(e.target.value)}
        className="border border-black p-2  w-96"
        type="text"
        value={searchText}
        onFocus={() => setIsResultVisible(true)}
        onBlur={() => setIsResultVisible(false)}
      />
      {searchResults.length && isResultVisible && (
        <ul className="p-2 border border-black w-96 shadow-lg">
          {searchResults.map((item, i) => (
            <li className="hover:bg-gray-200 cursor-pointer shadow-md" key={i}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchUI;
