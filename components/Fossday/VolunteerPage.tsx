import { Text } from "@/components/ui/text";
import type React from "react";
import AnimatedCardGrid from "../ui/AnimatedCardGrid";

const cardImages = [
	{ normal: "./fossday/aibel.png", hover: "./fossday/aibelhover.png" },
	{ normal: "./fossday/rajat.png", hover: "./fossday/rajathover.png" },
	{ normal: "./fossday/milan.png", hover: "./fossday/milanhover.png" },
];

export default function VolunteerPage() {
	return (
		<div className="w-screen h-auto flex flex-col gap-9 items-center justify-between mx-auto p-4">
			<Text
				variant={"fossday"}
				coloring={"fossday-yellow"}
				size={"h2"}
				className=""
			>
				Ping Us
			</Text>
			<div className="w-full flex items-center justify-center">
				<AnimatedCardGrid cardImages={cardImages} />
			</div>
		</div>
	);
}
