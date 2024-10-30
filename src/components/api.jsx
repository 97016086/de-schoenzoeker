export const fetchGoogleSearchResults = async (query) => {
  const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
  const CX_ID = process.env.REACT_APP_GOOGLE_CX_ID;

  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(
      query
    )}&key=${API_KEY}&cx=${CX_ID}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch search results");
  }

  const data = await response.json();
  return data.items || [];
};
