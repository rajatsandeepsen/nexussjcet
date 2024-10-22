import { Text } from "@/components/ui/text";
import React from "react";

const data = [
	{
		link: "https://fossmec.netlify.app",
		image: "./common/fossmec.png",
	},
	{
		link: "https://fossunited.org/c/mits",
		image: "./common/fossmits.svg",
	},
	{
		link: "https://icfoss.in",
		image: "./common/icfoss.svg",
	},
	{
		link: "https://fossunited.org",
		image: "./common/fossunited.svg",
	},
	{
		link: "https://nexus.sjcetpalai.ac.in/",
		image: "./common/mozilla.png",
	},
	{
		link: "https://nexus.sjcetpalai.ac.in/",
		image: "./common/swathanthra.svg",
	},
	{
		link: "https://tinkerhub.org/",
		image: "./common/tinkerhub.svg",
	},
	{
		link: "https://iedc.sjcetpalai.ac.in/",
		image: "./common/iedc.png",
	},
	{
		link: "https://iedc.sjcetpalai.ac.in/",
		image: "./common/bootcamp.svg",
	},
	{
		link: "https://mulearn.sjcetpalai.ac.in/",
		image: "./common/mulearn.svg",
	},
]

export default function CommunityPage() {
	return (
		<div className="p-4 container">
			<Text variant={"fossday"} size={"h2"} coloring={"fossday-yellow"}>
				Community Partners
			</Text>

			<div className="flex items-center justify-center gap-4 flex-wrap">
				{data.map((item, index) => (
					<a href={item.link} key={item.image}>
						<img src={item.image} alt="" className="h-auto w-40 md:w-60" />
					</a>
				))}
			</div>
		</div>
	);
}
