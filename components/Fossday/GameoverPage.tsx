"use client";
import Link from "next/link";
import React from "react";

export default function GameoverPage() {
	return (
		<div className="w-screen h-screen overflow-hidden relative p-4 mt-7 flex items-start justify-center">
			<div className="absolute bottom-0">
				<img src="./fossday/gameover.svg" alt="" className=" scale-150" />
			</div>
			<div className="text-4xl md:text-5xl text-white font-pixelify font-medium text-center p-4 md:w-[50vw] mt-9 flex flex-col items-center justify-center gap-9">
				<p className="">
					To contact us or to ask Any Questions , Join this group
				</p>
				<Link href="/">
					<button type="button" className="flex items-center justify-center rounded-full bg-white px-5 py-2 text-[#4fadf5]">
						Join Group
					</button>
				</Link>
			</div>
		</div>
	);
}
