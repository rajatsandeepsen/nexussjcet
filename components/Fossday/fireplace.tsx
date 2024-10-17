"use client";

import { useEffect, useState } from "react";

const Fireplace = () => {
	const [state, setState] = useState(false);
	useEffect(() => {
		const interval = setInterval(() => {
			setState((prev) => !prev);
		}, 400);
		return () => clearInterval(interval);
	}, []);
	return (
		<>
			{state ? (
				<img src="./fossday/fire1.png" alt="" className="" />
			) : (
				<img src="./fossday/fire2.png" alt="" className="" />
			)}
			<img src="./fossday/fireplace.png" alt="" className="-translate-y-1" />
		</>
	);
};

export default Fireplace;
