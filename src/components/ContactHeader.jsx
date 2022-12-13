/** @format */

import React from "react";

const ContactHeader = () => {
	return (
		<>
			<div className="f-head__wrap">
				<div className="head__box">
					<ul className="head__line">
						<li className="head__detail">
							<a href="mailto:jwor124@naver.com">email adress</a>
						</li>
						<li className="head__detail">
							<a
								href="https://github.com/jwor12427"
								target="_blank"
							>
								github
							</a>
						</li>
						<li className="head__detail">
							<a
								href="https://damlong.tistory.com"
								target="_blank"
							>
								tistory
							</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default ContactHeader;
