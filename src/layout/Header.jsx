/** @format */

import React from "react";

const Header = () => {
	return (
		<header id="header">
			<div className="header__inner">
				<div className="header__logo">
					<a
						href="/"
						className="header__main"
					>
						portfolio
					</a>
				</div>
				<div className="header__nav">
					<ul className="header__list">
						<li className="header__link">
							<a href="#section2">about</a>
						</li>
						<li className="header__link">
							<a
								href="#section4"
								className="link__sub"
							>
								site
							</a>
							<div className="header__badge">best</div>
						</li>
						<li className="header__link">
							<a href="#sectionSub">script</a>
						</li>
						<li className="header__link">
							<a href="#section7">react</a>
						</li>
						<li className="header__link">
							<a href="#section8">contact</a>
						</li>
					</ul>
				</div>
				<div className="header__ham">
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
		</header>
	);
};

export default Header;
