import React from 'react';
import ItemList from './item-list';
import Link from "next/link";

export default function Page() {
  return (
    <body>
        <main>
            <h2 class = "text-3xl m-4">Shopping List</h2>
            <ItemList/>
            <Link href = "./" className = " text-2xl m-4 text-cyan-700 hover:text-cyan-300">Home</Link>
        </main>
    </body>
  );
};