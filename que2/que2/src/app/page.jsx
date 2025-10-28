import FundSummaryCard from "./components/FundSummaryCard";

export default function Home() {
  return (
    <main style={{ padding: "20px" }}>
      <h1>App Router Home</h1>
      <FundSummaryCard title="Total Funds" value="$10,000" />
    </main>
  );
}
