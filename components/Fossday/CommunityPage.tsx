import { Text } from "@/components/ui/text";
import React from "react";

const data = [
	{
		link: "https://tinkerhub.org/",
		image: "./fossday/tinkerhub.svg",
	},
	{
		link: "https://iedc.sjcetpalai.ac.in/",
		image: "./fossday/iedc.png",
	},
	{
		link: "https://iedc.sjcetpalai.ac.in/",
		image: "./fossday/bootcamp.svg",
	},
	{
		link: "https://mulearn.sjcetpalai.ac.in/",
		image: "./fossday/mulearn.svg",
	},												
	{

	}
]

export default function CommunityPage() {
	return (
		<div className="p-4">
			<Text variant={"fossday"} size={"h2"} coloring={"fossday-yellow"}>
				Community Partners
			</Text>

			<div className="flex items-center justify-center gap-4 flex-wrap">
				{data.map((item, index) => (
					<a href={item.link} key={item.image}>
						<img src={item.image} alt="" className="h-40 w-auto" />
					</a>
				))}
			</div>
		</div>
	);
}
