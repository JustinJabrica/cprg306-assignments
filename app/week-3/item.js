import React from 'react'

export default function Item ({name, quantity, category}) {
    return (
        <li class = "max-w-sm m-5 rounded-lg p-2 bg-cyan-950">
            <h2 class = "text-2xl">{name}</h2>
            <p>Buy {quantity} in {category}</p>
        </li>
    )
};