import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <Link href = "./week-2/" className = "text-cyan-700 hover:text-cyan-300">Week 2 Assignment</Link>
      <Link href = "./week-3/" className = "text-cyan-700 hover:text-cyan-300">Week 3 Assignment</Link>
      <Link href = "./week-4/" className = "text-cyan-700 hover:text-cyan-300">Week 4 Assignment</Link>
    </main>
    );
}