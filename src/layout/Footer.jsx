/** @format */

import React from "react";
import ContactHeader from "../components/ContactHeader";
import ContactCont from "../components/ContactCont";

const Footer = () => {
	return (
		<footer>
			<section
				id="section8"
				className="gray"
			>
				<div className="footer__head">
					<ContactHeader />
					<ContactCont />
				</div>
			</section>
		</footer>
	);
};

export default Footer;
