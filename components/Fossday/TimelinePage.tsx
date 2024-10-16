import React from "react";
import { Timeline } from "../ui/timeline";

export default function TimelinePage() {
	const data = [
		{
			title: "Registration",
			content: ""
		},
		{
			title: "Tribute to Abraham",
			content: ""
		},
		{
			title: "Software Launch",
			content: ""
		},
        {
			title: "Expert Talks",
			content: ""
		},
        {
			title: "Workshops",
			content: ""
		},
        {
			title: "Debian Installation Party",
			content: ""
		},
	];
	return (
		<div className="flex items-center justify-center relative">
              {/* <div>
                <img src="./fossday/clouds-2.svg" alt="" className="absolute z-1 top-10 -right-20 w-96" />
                <img src="./fossday/clouds-2.svg" alt="" className="absolute z-1 bottom-30 -left-20 w-96" />
                <img src="./fossday/paperplane.svg" alt="" className="absolute z-1 top-10 right-60 w-32" />
                


            </div> */}

			<Timeline data={data} />
		</div>
	);
}
