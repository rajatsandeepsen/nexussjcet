"use client";

import RetroLogo from "@/components/hackday/componentes/RetroLogo";
import RetroNavbar from "@/components/hackday/componentes/RetroNavbar";
import type React from "react";
import { useEffect, useState } from "react";

// Define the type for the countdown timer state
interface TimeLeft {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
  expired?: boolean;
}

// Countdown Timer Logic Component
const CountdownTimer: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const targetDate = new Date("2025-01-05T00:00:00");
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    let timeLeft: TimeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { expired: true };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (timeLeft.expired) {
    return (
      <div className="text-[#00FF00] text-2xl font-bold">The countdown has ended! 🎉</div>
    );
  }

  return (
    <div className="text-center text-[#00FF00] text-lg font-mono">
      <h3 className="text-2xl font-bold mb-2">Countdown to HackDay 2025 🚀</h3>
      <div className="flex justify-center gap-4 mt-4">
        <div className="border border-[#555] p-2 rounded-md">
          <span className="text-xl">{timeLeft.days}d</span>
        </div>
        <div className="border border-[#555] p-2 rounded-md">
          <span className="text-xl">{timeLeft.hours}h</span>
        </div>
        <div className="border border-[#555] p-2 rounded-md">
          <span className="text-xl">{timeLeft.minutes}m</span>
        </div>
        <div className="border border-[#555] p-2 rounded-md">
          <span className="text-xl">{timeLeft.seconds}s</span>
        </div>
      </div>
    </div>
  );
};

// Main HomePage Component
const HomePage: React.FC = () => {
  return (
    <div className="noisy bg-black h-screen text-[#00FF00] font-mono leading-snug overflow-x-scroll">
    

      {/* Logo and Hero Section */}
      <div className="emblem pt-8">
        <div className="w-full flex items-center justify-center">
          <RetroLogo />
          <h1 className="text-8xl font-bold mt-4 text-center">HackDay 25</h1>
        </div>
      </div>

      {/* Countdown Timer Section */}
      <div className="countdown-section mt-12 text-center">
        <CountdownTimer />
      </div>

      {/* Retro Styled Text Section */}
      <div className="hero-text text-center mt-16 px-6">
        <p className="text-lg mb-4">
          Welcome, hacker! 🖖 Ready to roll back the clock, write some code, and embark on a journey of fun, caffeine, and innovation?
        </p>
        <p className="text-lg mb-4">
          HackDay is your playground for breaking boundaries, learning by experimenting, and building cool projects. All you need is curiosity and creativity.
        </p>
        <p className="text-lg mb-6">
          Trust us—it's going to be legendary. 🔮💾
        </p>
        <button className="bg-[#333] border border-[#00FF00] px-8 py-3 text-[#00FF00] hover:bg-[#555] transition duration-200">
          Join the Revolution
        </button>
      </div>
    </div>
  );
};

export default HomePage;
