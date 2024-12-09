"use client";
import { ProjectHome } from "@/components/projects/ProjectHome";
import { ProjectOfTheWeek } from "@/components/projects/ProjectOfTheWeek";
import { FloatingNav } from "@/components/projects/floating-navbar";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";

export default function Page() {
  const aboutRef = useRef<HTMLDivElement>(null);

  // State to manage scroll positions
  const [scrollDirections, setScrollDirections] = useState({
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  });

  useEffect(() => {
    console.log("Initializing IntersectionObserver...");
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        console.log("Observed entry:", entry);

        if (entry.isIntersecting) {
          console.log("Scrolling into the About Section");
          setScrollDirections({
            left: -1500, // Move left boxes far to the left
            right: 1500, // Move right boxes far to the right
            top: -1500, // Move top boxes up
            bottom: 1500, // Move bottom boxes down
          });
        } else {
          console.log("Scrolling back into the Hero Section");
          setScrollDirections({
            left: 0, 
            right: 0,
            top: 0,
            bottom: 0,
          });
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      threshold: 0.1,
    });

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  

  return (
    <div className="relative bg-[#eff2f5] w-full">
      {/* Animated Edge-Aligned Boxes */}
      <div className={`pointer-events-none fixed inset-0 z-50 transition-transform duration-500 ease-in-out`}>
        {/* Left Edge Boxes */}
        <div
          className={`absolute top-[20%] left-[20%] transform transition-transform duration-500 ease-in-out drop-shadow-xl`}
          style={{ transform: `translateX(${scrollDirections.left}%)` }}
        >
          <div className=" ">
            <Image src={"/projects/pi.png"} width={200} height={200} alt="logo" />
          </div>
        </div>
        <div
          className={`absolute top-[50%] left-[10%] transform transition-transform duration-500 ease-in-out drop-shadow-xl`}
          style={{ transform: `translateX(${scrollDirections.left}%)` }}
        >
          <div className="">
            <Image src={"/projects/Next.js.png"} width={60} height={60} alt="logo" />
            
          </div>
        </div>

        {/* Right Edge Boxes */}
        <div
          className={`absolute top-[20%] right-[20%] transform transition-transform duration-500 ease-in-out drop-shadow-xl`}
          style={{ transform: `translateX(${scrollDirections.right}%)` }}
        >
          <div className="">
            <Image src={"/projects/figma.png"} width={90} height={90} alt="logo" />
          </div>
        </div>
        <div
          className={`absolute top-[30%] right-[30%] transform transition-transform duration-500 ease-in-out drop-shadow-xl`}
          style={{ transform: `translateX(${scrollDirections.right}%)` }}
        >
          <div className="">
            <Image src={"/projects/Android Studio.png"} width={100} height={100} alt="logo" />
          </div>
        </div>

        {/* Top Edge Boxes */}
        <div
          className={`absolute top-[10%] left-[40%] transform transition-transform duration-500 ease-in-out drop-shadow-xl`}
          style={{ transform: `translateY(${scrollDirections.top}%)` }}
        >
          <div className="">
            <Image src={"/projects/Python.png"} width={100} height={100} alt="logo" />
          </div>
        </div>
        <div
          className={`absolute top-[10%] left-[60%] transform transition-transform duration-500 ease-in-out drop-shadow-xl`}
          style={{ transform: `translateY(${scrollDirections.top}%)` }}
        >
          <div className="">
            <Image src={"/projects/TypeScript.png"} width={100} height={100} alt="logo" />
          </div>
        </div>

        {/* Bottom Edge Boxes */}
        <div
          className={`absolute bottom-[10%] left-[40%] transform transition-transform duration-500 ease-in-out drop-shadow-xl`}
          style={{ transform: `translateY(${scrollDirections.bottom}%)` }}
        >
          <div className="">
            <Image src={"/projects/nexus-tag.png"} width={200} height={200} alt="logo" />
          </div>
        </div>
        <div
          className={`absolute bottom-[-10%] left-[50%] transform transition-transform duration-500 ease-in-out drop-shadow-xl`}
          style={{ transform: `translateY(${scrollDirections.bottom}%)` }}
        >
          <div className="">
            <Image src={"/projects/keyboard.png"} width={500} height={200} alt="logo" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative p-4">
        <div className="relative h-screen w-full bg-blue-500 overflow-hidden">
          <ProjectHome />
        </div>
        <div ref={aboutRef} className="h-screen bg-gray-300">
          <ProjectOfTheWeek />
        </div>
      </div>
    </div>
  );
}
