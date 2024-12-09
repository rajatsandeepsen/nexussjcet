import React from "react";
import Footer from "./componentes/RetroFooter";
import RetroNavbar from "./componentes/RetroNavbar";
import "./styles.css";

import type { ReactNode } from "react";

const CRTThemeWrapper = ({ children }: { children: ReactNode }) => {
	return (
		<div className="noisy">
			<div className="emblem">
				<span className="icon-information"></span>
			</div>
			<div className="frame overflow-x-scroll min-h-screen relative">
				<div className="absolute  top-0 h-[5rem] w-full z-10">
					<RetroNavbar />
				</div>
				<div className="piece output overflow-x-scroll">{children}
        <Footer />
        </div>
				<div className="piece scanlines overflow-x-scroll"></div>
				<div className="piece glow overflow-x-scroll"></div>
					
			</div>
      <div className="absolute  bottom-0 h-[5rem] w-full z-10">
				</div>
		</div>
	);
};

export default CRTThemeWrapper;
