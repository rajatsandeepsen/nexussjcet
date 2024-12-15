import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function RetroNavbar() {
  return (
    <div className="w-3/4 mx-auto h-[3rem] bg-[#02a933] flex items-center justify-around text-white pointer-events-auto px-2 py-1">
       <Link href="/hackday">
        <button className="transition duration-200 ease-in-out hover:bg-black hover:text-white text-xl font-bold  uppercase">
          <Image src={"/favicon.svg"} width={30} height={30} alt="logo" />
        </button>
      </Link>

      <Link href="/hackday">
        <button className="transition duration-200 ease-in-out hover:bg-black hover:text-white text-xl font-bold  uppercase">Home</button>
      </Link>
      <Link href="/hackday/about">
        <button className="transition duration-200 ease-in-out hover:bg-black hover:text-white text-xl font-bold uppercase">About</button>
      </Link>
      <Link href="/hackday/schedule">
        <button className="transition duration-200 ease-in-out hover:bg-black hover:text-white text-xl font-bold uppercase">Schedule</button>
      </Link>
      <Link href="/hackday/register"> 
        <button className="transition duration-200 ease-in-out hover:bg-black hover:text-white text-xl font-bold uppercase">Register</button>
      </Link>
      <Link href="/hackday/exit">
        <button className="transition duration-200 ease-in-out hover:bg-black hover:text-white text-xl font-bold uppercase">Exit</button>
      </Link>
    </div>
  );
}
