import { useRouter } from "next/router";

export default function FundDetails() {
  const router = useRouter();
  const { code } = router.query; // dynamic route param

  return (
    <div style={{ padding: "20px" }}>
      <h1>Fund Details</h1>
      <p>You are viewing details for fund code: <strong>{code}</strong></p>
    </div>
  );
}
