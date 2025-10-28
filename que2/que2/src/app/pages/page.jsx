import Navbar from "@/components/Navbar";
import FundSummaryCard from "@/components/FundSummaryCard";

export default function HomePage() {
  return (
    <div style={{ padding: "20px" }}>
      <Navbar />
      <h1>Pages Router Home</h1>
      <FundSummaryCard title="Investments" value="$5,000" />
    </div>
  );
}
