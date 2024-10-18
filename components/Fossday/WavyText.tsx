"use client"
import type React from 'react';

const WavyText: React.FC = () => {
    const text = "Call for Speakers"; 

    return (
        <h3
            id="wavy-text"
            className="mt-8 font-pixelify text-4xl text-yellow-300 md:text-6xl"
            aria-label="Call For Speakers"
        >
            {text.split('').map((letter, index) => (
                <span
                    // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                    key={index}
                    className="inline-block"
                    style={{
                        display: 'inline-block',
                        // biome-ignore lint/style/noUnusedTemplateLiteral: <explanation>
                        animation: `wave 1s ease-in-out infinite`,
                        animationDelay: `${index * 0.1}s`, 
                    }}
                >
                    {letter}
                </span>
            ))}
            <style jsx>{`
                @keyframes wave {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }
            `}</style>
        </h3>
    );
};

export default WavyText;
