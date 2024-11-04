import React from "react";
import { Text } from "../ui/text";
import { Timeline } from "../ui/timeline";

export default function TimelinePage() {
	const data = [
		{
			title: "Registration Starts",
			content: "Pay 200/- per head online, Enjoy 200 days worth of fun",
			time: "October 18th",
		},
		{
			title: "Registration Ends",
			content: "Try again next year... or wait.. Will you?",
			time: "November 7th 11:59pm",
		},
		{
			title: "Gate opens",
			content: "Make sure you smile at the Security when u come past the gate, Just dont be too late.",
			time: "November 9th 9:00am",
		},
		{
			title: "The FOSSDAY",
			content: "First to find Francis Hall gets the first prize of the day (Good seating)",
			time: "09:30am",
		},
	]
	const data1 = [
		{
			title: "Inauguration",
			content: "Inaugural speeches and software showcase.",
			time: "9:30am - 10:00am",
		},
		{
			title: "Tech Talks",
			content: "Listen to nerds talk.. well dont complain, you are here cuz you are one too",
			time: "10:00am - 12:30pm",
		},
		{
			title: "Lunch Break",
			content: "Enjoy the food you paid for, maybe share some with us?",
			time: "12:30pm - 1:30pm",
		},
	];
	
	const data2 = [
		{
			title: "Workshops Start",
			content: "Ah yes, Here we make your CPU and GPU utilizations reach 100%",
			time: "1:30pm - 4:00pm",
		},
		{
			title: "Snacks & Networking",
			content: "Chaya & time for a group pic, might as well share LinkedIn and um... Tinder?",
			time: "4:00pm - 4:30pm",
		},
		{
			title: "The END",
			content: "Thank you for joining us! Safe travels home.",
			time: "4:30pm",
		},
	];
	
	return (
		<div>
			<Text variant={"fossday"} coloring={"fossday-yellow"} size={"h2"}>
				Time Schedule
			</Text>
			<div className="flex md:gap-20 gap-10 container justify-center md:flex-row flex-col p-8 md:p-20">
				<div>
					{/* <Text variant={"fossday"} coloring={"fossday-yellow"} size={"h2"}>
						Morning
					</Text> */}
					<Timeline data={data} />
				</div>
				<div>
					{/* <Text variant={"fossday"} coloring={"fossday-yellow"} size={"h2"}>
						Morning
					</Text> */}
					<Timeline data={data1} />
				</div>
				<div>
					{/* <Text variant={"fossday"} coloring={"fossday-yellow"} size={"h2"}>
						Afternoon
					</Text> */}
					<Timeline data={data2} />
				</div>
			</div>
		</div>
	);
}
