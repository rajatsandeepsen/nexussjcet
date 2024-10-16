"use client"

import { useRouter } from 'next/navigation';
import React from "react";

const RegistrationPage = () => {
    const router = useRouter();

    const handleRegisterClick = () => {
        router.push('/fossday/register');
    };

    return (
        <div className="flex flex-col h-3/4 w-screen p-8 md:p-4 items-center justify-between gap-8 text-white font-pixelify relative">
            <h1 className="font-medium text-4xl md:text-5xl text-[#F0FF47] text-center">
                Register Now
            </h1>
            <div className="flex flex-col items-center justify-around w-full md:w-1/2 gap-5">
                <h2 className="font-medium text-2xl md:text-3xl text-[#F0FF47]">
                    Rupees 200/-
                </h2>
                <p className="w-full md:w-3/4 text-xl text-left">
                    In the ticket of two hundred rupees, you get to join for all the
                    sessions, get lunch and also some cool goodies.
                </p>
                <p className="w-full md:w-3/4 text-xl text-left">
                    You also get to pick from one of these three workshops:
                </p>
                <ul className="w-full md:w-3/4 list-inside list-disc text-xl text-left">
                    <li>Intro to GitHub and Git (Beginner)</li>
                    <li>Intro to Docker and DevOps (Mid)</li>
                    <li>Intro to OpenTofu (Advanced)</li>
                </ul>
                <button 
                className="rounded-full bg-white px-8 py-2 text-2xl md:text-3xl text-[#4fadf5] mt-8" 
                onClick={handleRegisterClick}
                type="button"
            >
                Register
            </button>
            </div>
            
        </div>
    );
};

export default RegistrationPage;
