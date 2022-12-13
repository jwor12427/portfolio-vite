/** @format */

import React from "react";

const Script02 = () => {
	return (
		<section className="section section2">
			<div className="script__cont">
				<div className="script">
					<div className="script__svg01 back__img">
						<img
							src="assets/img/script__back.svg"
							alt="스크립트배경"
							aria-hidden="true"
						/>
					</div>
					<div className="script01">
						<img
							src="assets/img/script01.png"
							alt="게임이펙트 사이트"
						/>
					</div>
					<div className="script__behind01">
						<img
							src="assets/img/script01_be.png"
							alt="사이트 바로가기"
						/>
						<div className="behind__desc">
							<div className="be__title">게임이펙트 사이트</div>
							<a
								href="https://jwor12427.github.io/codingclassName/javascript/effect/gameEffect01.html"
								target="_blank"
								className="site__go"
							>
								<span>바로 가기</span>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="script__cont02">
				<div className="script">
					<div className="script__svg02 back__img">
						<img
							src="assets/img/script__back.svg"
							alt="스크립트배경"
							aria-hidden="true"
						/>
					</div>
					<div className="script02">
						<img
							src="assets/img/script02.png"
							alt="검색이펙트 사이트"
						/>
					</div>
					<div className="script__behind01">
						<img
							src="assets/img/script02_be.png"
							alt="사이트 바로가기"
						/>
						<div className="behind__desc">
							<div className="be__title">검색이펙트 사이트</div>
							<a
								href="https://jwor12427.github.io/codingclassName/javascript/effect/searchEffect01.html"
								target="_blank"
								className="site__go"
							>
								<span>바로 가기</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Script02;
