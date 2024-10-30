import React, { useState } from "react";
import axios from "axios";

const GoogleSearchComponent = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const apiKey = "YOUR_GOOGLE_API_KEY";
  const searchEngineId = "YOUR_CUSTOM_SEARCH_ENGINE_ID";

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        "https://www.googleapis.com/customsearch/v1",
        {
          params: {
            key: apiKey,
            cx: searchEngineId,
            q: query,
          },
        }
      );
      setResults(response.data.items || []); // Results from Google Custom Search API
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search the web with Google..."
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {results.map((result) => (
          <div key={result.cacheId}>
            <a href={result.link} target="_blank" rel="noopener noreferrer">
              <h3>{result.title}</h3>
            </a>
            <p>{result.snippet}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoogleSearchComponent;
