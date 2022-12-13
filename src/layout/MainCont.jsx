/** @format */

import React from "react";
import StartMain from "../components/StartMain";
import About from "../components/About";
import Site from "../components/Site";
import Javascript from "../components/Javascript";
import ReactSite from "../components/ReactSite";

const MainCont = () => {
	return (
		<main id="main">
			<StartMain />
			<About />
			<Site />
			<Javascript />
			<ReactSite />
		</main>
	);
};

export default MainCont;
