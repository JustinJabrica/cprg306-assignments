"use client";
import React, { useState } from 'react';

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);

    function increment() {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
    };
    
    function decrement() {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <body>
            <main class ="flex justify-center text-2xl max-w-1/4">
                <div class = "flex justify-center bg-cyan-950 rounded-lg">
                    <button onClick = {decrement} class = "min-w-7 rounded-lg bg-red-900">-</button>
                    <h2 class = "flex justify-center min-w-7">{quantity}</h2>
                    <button onClick = {increment} class = "min-w-7 rounded-lg bg-green-900">+</button>
                </div>
            </main>
        </body>
    )
}