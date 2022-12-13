/** @format */

import React, { useEffect } from "react";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import MainCont from "./layout/MainCont";
import menu from "./utils/menu";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import maingsap from "./utils/maingsap.js";

const App = () => {
	// gsap.registerPlugin(ScrollTrigger);
	useEffect(() => {
		maingsap();
		menu();
	}, []);
	return (
		<>
			<Header />
			<MainCont />
			<Footer />
		</>
	);
};

export default App;
