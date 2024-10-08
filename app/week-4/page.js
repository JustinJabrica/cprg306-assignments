import React from 'react';
import Link from "next/link";
import NewItem from "./new-item";

export default function Page() {
  return (
    <body>
        <main>
            <NewItem/>
            <Link href = "./" className = " text-2xl m-4 text-cyan-700 hover:text-cyan-300">Home</Link>
        </main>
    </body>
  );
};