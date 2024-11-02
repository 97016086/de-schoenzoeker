import React, { useState } from "react";
import axios from "axios";

const GoogleSearchComponent = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
  const searchEngineId = process.env.REACT_APP_SEARCH_ENGINE_ID;

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        "https://customsearch.googleapis.com/customsearch/v1",
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
      if (error.response) {
        // Server responded with a status other than 200 range
        console.error("Error response data:", error.response.data);
        console.error("Error status:", error.response.status);
        console.error("Error headers:", error.response.headers);
        console.error("Full error response:", error.response.data);
      } else if (error.request) {
        // No response was received
        console.error("Error request:", error.request);
      } else {
        // Something happened in setting up the request
        console.error("Error message:", error.message);
      }
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
