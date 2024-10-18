
import AboutPage from "@/components/Fossday/AboutPage";
import CommunityPage from "@/components/Fossday/CommunityPage";
import GameoverPage from "@/components/Fossday/GameoverPage";
import HomePage from "@/components/Fossday/HomePage";
import RegistrationPage from "@/components/Fossday/RegistrationPage";
import SpeakerPage from "@/components/Fossday/SpeakerPage";
import TimelinePage from "@/components/Fossday/TimelinePage";
import React from "react";

export default function FossDay() {
	return (
		<div className="h-auto w-screen bg-[#4fadf5] overflow-x-hidden">
			<HomePage/>
			<SpeakerPage/>
			<AboutPage />
			{/* <TimelinePage/>
			<CommunityPage/>
			<RegistrationPage/>
			<GameoverPage/> */}
		</div>
	);
}
