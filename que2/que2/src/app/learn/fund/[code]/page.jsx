import { notFound } from "next/navigation";

export const dynamic = "force-dynamic"; // SSR always

async function getFund(code) {
  const res = await fetch(`https://api.mfapi.in/mf/${code}`, { cache: "no-store" });
  if (!res.ok) return null;
  return res.json();
}

export default async function FundDetail({ params }) {
  const { code } = params;
  const fund = await getFund(code);

  if (!fund || !fund.data) {
    return notFound();
  }

  const latest = fund.data[0];
  const last30 = fund.data.slice(0, 30);

  return (
    <main style={{ padding: 20 }}>
      <h1>{fund.meta?.scheme_name || "Unknown Fund"}</h1>
      <p>
        Latest NAV: {latest.nav} (as of {latest.date})
      </p>

      <h2>Last 30 Entries</h2>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>Date</th>
            <th>NAV</th>
          </tr>
        </thead>
        <tbody>
          {last30.map((entry, i) => (
            <tr key={i}>
              <td>{entry.date}</td>
              <td>{entry.nav}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
