"use client"
import type React from 'react';

const WavyText: React.FC = () => {
    const text = "Call for Speakers"; 

    return (
        <h2 className="text-4xl capitalize sm:text-4xl md:text-6xl font-medium text-yellow-300 font-pixelify [text-shadow:1px_1px_orange] mb-4">
            {/* {text.split('').map((letter, index) => (
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
                > */}
                    {text}
                {/* </span> */}
            {/* ))} */}
            {/* <style jsx>{`
                @keyframes wave {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }
            `}</style> */}
        </h2>
    );
};

export default WavyText;
