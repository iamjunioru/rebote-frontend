"use client";

import React, { useState, useEffect } from 'react';

interface ConfettiPiece {
  id: number;
  style: React.CSSProperties;
}

export const Confetti = () => {
    const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

    useEffect(() => {
        const colors = ['#fbbf24', '#22c55e', '#FFFFFF']; // Yellow, Green, White
        const newPieces: ConfettiPiece[] = Array.from({ length: 150 }).map((_, i) => {
            return {
                id: i,
                style: {
                    left: `${Math.random() * 100}%`,
                    backgroundColor: colors[Math.floor(Math.random() * colors.length)],
                    animationDuration: `${2 + Math.random() * 3}s`,
                    animationDelay: `${Math.random() * 2}s`,
                    opacity: 0,
                    transform: `rotate(${Math.random() * 360}deg)`,
                }
            };
        });
        setPieces(newPieces);
    }, []);

    return (
        <div className="pointer-events-none absolute inset-0 z-50 overflow-hidden">
            {pieces.map(p => (
                <div 
                    key={p.id} 
                    className="absolute w-2 h-4 animate-confetti-fall"
                    style={p.style}
                />
            ))}
        </div>
    );
};
