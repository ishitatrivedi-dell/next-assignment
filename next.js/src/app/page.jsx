
"use client"; 

import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === "") {
      setResults([]);
      return;
    }

    try {
      const res = await fetch(
        `https://hn.algolia.com/api/v1/search?query=${value}&tags=story&hitsPerPage=5`
      );
      const data = await res.json();
      setResults(data.hits || []);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto", textAlign: "center" }}>
      {/* Static intro */}
      <h1>🚀 Welcome to Hacker News Search</h1>
      <p>Type below to fetch the latest 5 stories from Hacker News.</p>

      {/* Search box */}
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search Hacker News..."
        style={{
          padding: "10px",
          width: "100%",
          borderRadius: "8px",
          border: "1px solid #ccc",
          marginBottom: "20px"
        }}
      />

      {/* Results */}
      <ul style={{ textAlign: "left", listStyle: "none", padding: 0 }}>
        {results.map((item) => (
          <li key={item.objectID} style={{ margin: "10px 0" }}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "#0070f3" }}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
