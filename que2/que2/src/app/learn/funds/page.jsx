export const revalidate = 86400; // ISR once per day

async function getFunds() {
  const codes = [
    122639, 120492, 125497, 118825, 125354,
    118955, 120166, 120586, 118778, 130503,
  ];

  const responses = await Promise.all(
    codes.map((code) =>
      fetch(`https://api.mfapi.in/mf/${code}`, { cache: "no-store" }).then((res) => res.json())
    )
  );

  return responses;
}

export default async function FundsPage() {
  const funds = await getFunds();

  return (
    <main style={{ padding: 20 }}>
      <h1>Funds (ISR)</h1>
      <div style={{ display: "grid", gap: "1rem" }}>
        {funds.map((fund, i) => {
          const latest = fund.data?.[0];
          return (
            <div key={i} style={{ border: "1px solid #ccc", padding: 10 }}>
              <h3>{fund.meta?.scheme_name || "Unknown Fund"}</h3>
              {latest ? (
                <p>
                  Latest NAV: {latest.nav} ({latest.date})
                </p>
              ) : (
                <p>No data available</p>
              )}
              <a href={`/learn/fund/${fund.meta?.scheme_code}`}>View Details</a>
            </div>
          );
        })}
      </div>
    </main>
  );
}
