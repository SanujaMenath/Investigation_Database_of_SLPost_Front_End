// src/pages/Search.tsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getSearchResults } from "../services/api";

const Search: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [investigationList, setInvestigationList] = useState<Array<any>>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const invList = await getSearchResults(searchQuery);

    if (invList) setInvestigationList(invList);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex gap-4 items-center justify-center  p-6"
      >
        <input
          type="text"
          placeholder="Search..."
          className="border border-red-500 p-2 rounded-full "
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="px-4 py-2 bg-blue-300 rounded-full">
          Search
        </button>
      </form>{" "}
      {investigationList.length > 0 && (
        <div>
          <h2>Search Results</h2>
          {investigationList.map((result) => (
            <div key={result.fileId}>
              <h3>{result.fileId}</h3>
              <p>{result.incident}</p>
              <p>Status: {result.status}</p>
              <Link to={`/investigations/${result.fileId}`}>View Details</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
