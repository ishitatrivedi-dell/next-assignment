"use client";

import { useState } from "react";

export default function ToolsPage() {
  const [code, setCode] = useState("");
  const [fund, setFund] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchFund = async () => {
    setLoading(true);
    setFund(null);
    try {
      const res = await fetch(`https://api.mfapi.in/mf/${code}`);
      const data = await res.json();
      setFund(data);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <main style={{ padding: 20 }}>
      <h1>Tools (CSR)</h1>
      <p>Enter a scheme code to search:</p>

      <input
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Enter scheme code"
        style={{ padding: 5, marginRight: 10 }}
      />
      <button onClick={fetchFund} disabled={!code || loading}>
        {loading ? "Loading..." : "Fetch"}
      </button>

      {fund && fund.meta && (
        <div style={{ marginTop: 20, border: "1px solid #ccc", padding: 10 }}>
          <h3>{fund.meta.scheme_name}</h3>
          <p>
            Latest NAV: {fund.data?.[0]?.nav} (as of {fund.data?.[0]?.date})
          </p>
        </div>
      )}
    </main>
  );
}
