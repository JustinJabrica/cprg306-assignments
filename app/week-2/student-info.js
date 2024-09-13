import Link from "next/link";

export default function StudentInfo () {
    return (
        <main>
            <h1>Justin Jabrica</h1>
            <Link href = "https://github.com/JustinJabrica/cprg306-assignments" className = "text-cyan-700 hover:text-cyan-300">
                Justin's Github Repository
            </Link>
        </main>
    )
}