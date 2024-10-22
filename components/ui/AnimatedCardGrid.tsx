"use client";
import type React from "react";
import { useEffect, useRef, useState } from "react";

type CardPosition = {
    right: string;
    bottom: string;
};

type CardImage = {
    normal: string;
    hover: string;
};

const AnimatedCardGrid: React.FC = () => {
    const gridRef = useRef<HTMLDivElement>(null);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [isMobile, setIsMobile] = useState(false);

    const cardPositions: CardPosition[] = [
        { right: "right-[474px]", bottom: "bottom-[326px]" },
        { right: "right-[237px]", bottom: "bottom-[326px]" },
        { right: "right-0", bottom: "bottom-[326px]" },
    ];

    const cardImages: CardImage[] = [
        { normal: "./fossday/aibel.png", hover: "./fossday/aibelhover.png" },
        { normal: "./fossday/rajat.png", hover: "./fossday/rajathover.png" },
        { normal: "./fossday/milan.png", hover: "./fossday/milanhover.png" },
    ];

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (isMobile) return; // Skip animation logic for mobile
    
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    const cards = entry.target.querySelectorAll<HTMLLIElement>(".card");
                    if (entry.isIntersecting) {
                        let index = 0;
                        for (const card of cards) {
                            const position = cardPositions[index];
                            if (position) {
                                setTimeout(() => {
                                    card.classList.remove("right-0", "bottom-0");
                                    card.classList.add(position.right, position.bottom);
                                }, index * 150);
                            }
                            index++;
                        }
                    } else {
                        let index = 0;
                        for (const card of cards) {
                            const position = cardPositions[index];
                            if (position) {
                                setTimeout(() => {
                                    card.classList.remove(position.right, position.bottom);
                                    card.classList.add("right-0", "bottom-0");
                                }, index * 150);
                            }
                            index++;
                        }
                    }
                }
            },
            { threshold: 0.5 }
        );
    
        const currentGridRef = gridRef.current;
        if (currentGridRef) {
            observer.observe(currentGridRef);
        }
    
        return () => {
            if (currentGridRef) {
                observer.unobserve(currentGridRef);
            }
        };
    }, [isMobile]);
    

    return (
        <div ref={gridRef} className="mx-auto w-auto md:w-[45vw] px-4 md:px-0">
            <ul className={`list-none p-0 w-full ${
                isMobile 
                ? "flex flex-row flex-wrap justify-center gap-4" 
                : "relative h-[652px] flex items-center justify-center"
            }`}>
                {cardPositions.map((_, index) => (
                    <li
                        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                        key={index}
                        className={`${isMobile 
                                ? "static my-2 w-auto sm:w-[222px]" 
                                : "card absolute right-0 bottom-0 my-[30px_0_15px_15px] w-[222px]"
                            }float-left h-auto cursor-pointer overflow-hidden rounded-lg shadow-lg${!isMobile && "transition-all duration-1000 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] [perspective:1000px] [transform-style:preserve-3d]"}`}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <div className="relative w-full h-full">
                            <img
                                src={cardImages[index]?.normal || ""}
                                alt={`Card ${index + 1}`}
                                className={`object-cover transition-opacity duration-300${
                                    hoveredIndex === index ? "opacity-0" : "opacity-100"
                                }`}
                                sizes="(max-width: 768px) 280px, 222px"
                            />
                            <img
                                src={cardImages[index]?.hover || ""}
                                alt={`Card ${index + 1} Hover`}
                                className={`absolute top-0 left-0 object-cover transition-opacity duration-300${
                                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                                }`}
                                sizes="(max-width: 768px) 280px, 222px"
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AnimatedCardGrid;
