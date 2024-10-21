"use client"
import type React from 'react';
import { Text } from '../ui/text';

const WavyText: React.FC = () => {
    const text = "Call for Speakers"; 

    return (
        <Text variant={"fossday"} size={"h2"} coloring={"fossday-yellow"} >
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
        </Text>
    );
};

export default WavyText;
