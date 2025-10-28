import Link from "next/link";

export const metadata = {
  title: "Learn | My Project",
};

export default function LearnPage() {
  return (
    <main style={{ padding: 20 }}>
      <h1>Learn Section</h1>
      <p>This is a static overview of the Learn & Market routes.</p>

      <ul>
        <li><Link href="/learn/funds">Funds (ISR)</Link></li>
        <li><Link href="/learn/fund/122639">Fund Detail Example (SSR)</Link></li>
        <li><Link href="/learn/tools">Tools (CSR)</Link></li>
        <li><Link href="/market">Market (ISR via Pages Router)</Link></li>
        <li><Link href="/market/fund/122639">Market Fund Detail (SSR)</Link></li>
        <li><Link href="/market/compare">Market Compare (CSR)</Link></li>
        <li><Link href="/market/about">About (SSG)</Link></li>
      </ul>
    </main>
  );
}
