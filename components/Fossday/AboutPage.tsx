import { Text } from "../ui/text";

import Image from "next/image";

const data = [
	{
		title: "Welcome to FOSSDAY",
		content:
			"Hello, Nerds! We're bringing open source software community to SJCET. Join us for FOSSDAY – it's going to be an exciting learning experience! Join us to learn, explore, and contribute to the world of open source. It's a great opportunity to expand your tech horizons!",
	},
	{
		title: "What is FOSSDAY?",
		content:
			"FOSSDAY is your opportunity to dive into the world of open source technology right here in Campus of SJCET Pala. Whether you're an experienced coder or just getting started, we've got something for you. Workshops for students and talk session from experinced developers around the FOSS community.",
	},
	{
		title: "When and Where?",
		content:
			"November 9, 2024 (from 10:00am to 4:30pm) at St Joseph's College of Engineering and Technology, Palai",
	},
	{
		title: "Who Can Attend?",
		content:
			"Students, Professional, doesn't matter, all are welcomed. You don't need to be a tech expert – just bring your curiosity and laptop to learn!",
	},
	{
		title: "Event Highlights",
		content:
			"Network with like-minded tech enthusiasts, Earn a certificate of participation, Receive FOSS-themed merchandise, Develop practical skills in open source technologies, Be part of a growing movement in software development",
	},
];

const workshops = [
	{
		tag: "Beginner",
		imageSrc: "/fossday/w-1.png",
	},
	{
		tag: "Intermediate",
		imageSrc: "/fossday/w-2.png",
	},
	{
		tag: "Advanced",
		imageSrc: "/fossday/w-3.png",
	},
	{
		tag: "Beginner",
		imageSrc: "/fossday/w-4.png",
	},
	{
		tag: "Beginner",
		imageSrc: "/fossday/w-5.png",
	},
];
const speakers = [
	{
		
		imageSrc: "/fossday/w intro-1.png",
	},
	{
		
		imageSrc: "/fossday/w intro-2.png",
	},
	{
		
		imageSrc: "/fossday/w intro-3.png",
	},
	{
		
		imageSrc: "/fossday/w intro.png",
	},
];

export default function AboutPage() {
	return (
		<div className="text-center container space-y-28 space-y-40 relative z-40">
			{data.map((e) => (
				<div key={e.title} className="text-center">
					<Text coloring={"fossday-yellow"} size={"h2"} variant={"fossday"}>
						{e.title}
					</Text>
					<br />
					<Text coloring={"white"} size={"p"}>
						{e.content}
					</Text>
				</div>
			))}
			<div className="text-center ">
				<Text coloring={"fossday-yellow"} size={"h2"} variant={"fossday"}>
					Workshops
				</Text>
				<Text coloring={"white"} size={"p"}>
					All the workshops are running at the same time, so pick your favorite
					and dive in!
				</Text>
				<br />
				<div className="flex flex-col gap-3 md:flex-row  relative z-40">
					{workshops.map((workshop, index) => (
						<div
							className="flex flex-col gap-2 hover:scale-125 transition-transform ease-out duration-200 "
							key={index}
						>
							<Image
								src={workshop.imageSrc}
								alt="Intro to Github"
								width={1080}
								height={1080}
							/>
							<p className="px-2 text-lg rounded-full bg-green-200 text-green-500 font-bold w-fit h-fit">
								{workshop.tag}
							</p>
						</div>
					))}
				</div>
			</div>
			<div className="text-center ">
				<Text coloring={"fossday-yellow"} size={"h2"} variant={"fossday"}>
					Speakers
				</Text>
				<Text coloring={"white"} size={"p"}>
				Meet the open-source legends bringing inspiration and energy to FOSS Day!
				</Text>
				<br />
				<div className="flex flex-col gap-3 md:flex-row  relative z-40">
					{speakers.map((speaker, index) => (
						<div
							className="flex flex-col gap-2 hover:scale-125 transition-transform ease-out duration-200 "
							key={index}
						>
							<Image
								src={speaker.imageSrc}
								alt="FOSSDAY Speakers"
								width={1080}
								height={1080}
							/>
							
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
