"use client";
import { useEffect, useState, useRef } from "react";
import GridPattern from "@/components/magicui/grid-pattern";
import Hero from "@/components/Hero";
import History from "@/components/History";
import EventsPage from "@/components/EventsPage";
import TeamsPage from "@/components/TeamsPage";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [loading, setLoading] = useState(true);
  
  // Create refs for each section
  const heroRef = useRef<HTMLDivElement>(null);
  const historyRef = useRef<HTMLDivElement>(null);
  const eventsRef = useRef<HTMLDivElement>(null);
  const teamsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (section: "home" | "history" | "events" | "teams") => {
    switch (section) {
      case "home":
        heroRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "history":
        historyRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "events":
        eventsRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "teams":
        teamsRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
    }
  };

  if (loading) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center relative">
        <div className="w-96">
          <img
            src="./logo.svg"
            className="repeat-infinite animate-pulse transition-all ease-out"
          />
        </div>
      </main>
    );
  }

  return (
    <div className="relative w-screen h-auto">
      <GridPattern
        width={50}
        height={50}
        strokeDasharray="5,5"
        className="absolute inset-0"
      />
      <Navbar 
        scrollToSection={scrollToSection} // Pass the function as a prop
      />
      <div ref={heroRef}>
        <Hero />
      </div>
      <div className="h-auto w-full flex justify-center items-center ">
        <div className="h-auto w-full flex flex-col gap-10 justify-end items-end">
          <section ref={historyRef}>
            <History />
          </section>
          <section ref={eventsRef}>
            <EventsPage />
          </section>
          <section ref={teamsRef}>
            <TeamsPage />
          </section>
        </div>
      </div>
    </div>
  );
}
