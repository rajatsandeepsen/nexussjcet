"use client";
import {
	motion,
	useMotionValueEvent,
	useScroll,
	useTransform,
} from "framer-motion";
// biome-ignore lint/style/useImportType: <explanation>
import React, { useEffect, useRef, useState } from "react";
import { Text } from "./text";

interface TimelineEntry {
	title: string;
	time: string;
	content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
	const ref = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const [height, setHeight] = useState(0);

	useEffect(() => {
		if (ref.current) {
			const rect = ref.current.getBoundingClientRect();
			setHeight(rect.height);
		}
	}, [ref]);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start 10%", "end 50%"],
	});

	const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
	const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

	return (
		<div
			className="flex justify-center"
			ref={containerRef}
		>
			<div ref={ref} className="relative mx-auto pb-20">
				{data.map((item, index) => (
					<div
						key={index}
						className="flex pt-10 md:pt-40"
					>
						<div className="sticky flex flex-col">
							<Text coloring={"fossday-yellow"} size={"span"}>
								{item.time}
							</Text>
							<Text variant={"fossday"} coloring={"fossday-white1"} size={"p"}>
								{item.title}
							</Text>
							<p className="text-white opacity-65 font-bold">
								{item.content}
							</p>
						</div>
					</div>
				))}
				<div
					style={{
						height: height + "px",
					}}
					className="absolute -left-10 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
				>
					<motion.div
						style={{
							height: heightTransform,
							opacity: opacityTransform,
						}}
						className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-yellow-300 via-orange-400 to-transparent from-[0%] via-[10%] rounded-full"
					/>
				</div>
			</div>
		</div>
	);
};
