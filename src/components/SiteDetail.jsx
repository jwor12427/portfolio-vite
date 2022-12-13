/** @format */

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const SiteDetail = () => {
	useEffect(() => {
		//사이트부분 위에 고정
		ScrollTrigger.matchMedia({
			"(min-width: 560px)": function () {
				//사이트 부분 위에 고정
				let sites = gsap.utils.toArray(".site");
				sites.forEach((site, i) => {
					ScrollTrigger.create({
						trigger: site,
						start: "top 70px",
						pin: i === sites.length - 1 ? false : true,
						end: "bottom 70px",
						pinSpacing: false,
						scrub: 1,
					});
				});
			},
		});
	}, []);
	return (
		<section
			id="section4"
			className="gray"
		>
			<div className="site__wrap-d">
				<div className="site__inner-d site line">
					<div className="site__left">
						<div className="site__left__title">webstandrd site</div>
						<div className="site__left__desc">
							<span
								className="main__icon"
								aria-hidden="true"
							></span>
							웹표준성과 웹 접근성을 준수하면서 만든 사이트 입니다. IR효과를
							이용하여 모든 사용자가 불편함이 없이 사이트를 쉽게 이용할 수
							있도록 제작하였습니다. 슬라이드 효과는 swiper플러그인을 이용하여
							제작하였고, 탭메뉴 효과와 스무스 효과는 자바스크립트로
							제작하였습니다.
						</div>
						<div className="site__btn">
							<a
								href="https://jwor12427.github.io/codingclassName/site/site1/index.html"
								target="_blank"
							>
								사이트 보기
							</a>
							<a
								href="https://github.com/jwor12427/codingclassName/blob/main/site/site1/index.html"
								target="_blank"
							>
								코드 보기
							</a>
						</div>
						<div className="s__conts-rail">
							<div className="conts__inner">
								<div className="conts__item">
									<div className="conts__line">
										webstandard site&nbsp;webstandard site&nbsp;webstandard site
										&nbsp;webstandard site
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="site__right">
						<div className="site__ce">
							<div className="site__back">
								<img
									src="assets/img/site_back.svg"
									alt="사이트이미지 배경"
									aria-hidden="true"
								/>
							</div>
							<div className="site__fron">
								<img
									src="assets/img/site_pro01.png"
									alt="웹표준사이트 이미지"
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="site__inner-d sce site">
					<div className="site__right">
						<div className="site__ce">
							<div className="site__back">
								<img
									src="assets/img/site_back.svg"
									alt="사이트이미지 배경"
									aria-hidden="true"
								/>
							</div>
							<div className="site__fron">
								<img
									src="assets/img/site_pro02.png"
									alt="반응형사이트 이미지"
								/>
							</div>
						</div>
					</div>
					<div className="site__left">
						<div className="site__left__title">WebResponsive Site</div>
						<div className="site__left__desc">
							<span
								className="main__icon"
								aria-hidden="true"
							></span>
							미디어 쿼리를 사용하여 다양한 디바이스의 대응하여 화면크기에 따라
							반응 하도록 마든 반응형 사이트 입니다. 레이아웃의 배치와 디자인을
							미디어쿼리를 사용하여 재구성하였고, CSS를 사용하여 슬라이드에
							애니메이션을 추가하여 더욱 동적인 슬라이드를 구성하였습니다.
						</div>
						<div className="site__btn">
							<a
								href="https://jwor12427.github.io/codingclassName/site/site2/index.html"
								target="_blank"
							>
								사이트 보기
							</a>
							<a
								href="https://github.com/jwor12427/codingclassName/blob/main/site/site2/index.html"
								target="_blank"
							>
								코드 보기
							</a>
						</div>
						<div className="s__conts-rail">
							<div className="conts__inner">
								<div className="conts__item">
									<div className="conts__line">
										webresponsive site&nbsp;webresponsive
										site&nbsp;webresponsive site&nbsp;webresponsive site
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="site__inner-d site">
					<div className="site__left">
						<div className="site__left__title">php site</div>
						<div className="site__left__desc">
							<span
								className="main__icon"
								aria-hidden="true"
							></span>
							PHP를 사용하여 만든 웹페이지 입니다. 로그인, 회원가입, 게시판,
							댓글작성 기능을 넣었습니다. MyAdmin에 접속한 후, 데이터를 생성,
							삭제, 수정등의 관리가 가능합니다.
						</div>
						<div className="site__btn">
							<a
								href="http://jwor124.dothome.co.kr/phpclassName/main/main.php"
								target="_blank"
							>
								사이트 보기
							</a>
							<a
								href="https://github.com/jwor12427/phpclassName"
								target="_blank"
							>
								코드 보기
							</a>
						</div>
						<div className="s__conts-rail">
							<div className="conts__inner">
								<div className="conts__item">
									<div className="conts__line">
										php site&nbsp;php site&nbsp;php site&nbsp;php site&nbsp;php
										site&nbsp;php site&nbsp;php site&nbsp;php site&nbsp;php site
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="site__right">
						<div className="site__ce">
							<div className="site__back">
								<img
									src="assets/img/site_back.svg"
									alt="사이트이미지 배경"
									aria-hidden="true"
								/>
							</div>
							<div className="site__fron">
								<img
									src="assets/img/site_pro03.png"
									alt="php사이트"
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="site__inner-d sce site last">
					<div className="site__right">
						<div className="site__ce">
							<div className="site__back">
								<img
									src="assets/img/site_back.svg"
									alt="사이트이미지 배경"
									aria-hidden="true"
								/>
							</div>
							<div className="site__fron">
								<img
									src="assets/img/site_pro04.png"
									alt="php프로젝트 사이트 이미지"
								/>
							</div>
						</div>
					</div>
					<div className="site__left">
						<div className="site__left__title">php project</div>
						<div className="site__left__desc">
							<span
								className="main__icon"
								aria-hidden="true"
							></span>
							PHP를 사용하여 만든 팀 프로젝트 사이트 입니다. UI/UX 계획 및
							수립부터 디자인, 페이퍼 프로토 타입등을 다양한 과정을 거쳐서
							제작하였습니다. 식물의 관리법과 종류를 찾아볼 수 있는 사이트
							입니다. 추가적으로 커뮤니티를 통해 자신의 식물 사진을 올려서 다른
							사람들과 공유할 수 있도록 제작하였습니다. 처음하는 팀 프로젝트라
							미숙한 부분도 많았지만 많은 경험을 배웠던 프로젝트 였습니다.
						</div>
						<div className="site__btn">
							<a
								href="http://homming.dothome.co.kr/main/main.php"
								target="_blank"
							>
								사이트 보기
							</a>
							<a
								href="https://github.com/jwor12427/Team-Project"
								target="_blank"
							>
								코드 보기
							</a>
						</div>
						<div className="s__conts-rail">
							<div className="conts__inner">
								<div className="conts__item">
									<div className="conts__line">
										&nbsp;php site&nbsp;php site&nbsp;php site&nbsp;php
										site&nbsp;php site&nbsp;php site&nbsp;php site&nbsp;php
										site&nbsp;php site
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="script__before">
					<div className="script__be__inner rail__effect2">
						<div className="script__be-line v1">
							coding javascript coding javascript coding
						</div>
						<div className="script__be-line v2">
							javascript coding javascript coding javascript
						</div>
						<div className="script__be-line v3">
							coding javascript coding javascript coding
						</div>
						<div className="script__be-line v4">
							javascript coding javascript coding javascript
						</div>
						<div className="script__be-line v5">
							coding javascript coding javascript coding
						</div>
					</div>
					<div className="script__detail">
						<div className="script__detail__desc">
							<span className="main__icon white"></span>
							<em className="detail__desc js">
								6개월간 공부한 자바스크립트를 소개합니다. 스크립트를 이용해서
								만든 게임사이트, 마우스 효과, 패럴랙스 효과, 퀴즈 게임 등을
								작업하였습니다. 가장 기억에 남았던 작업은 게임사이트를
								만드는것이 었습니다. 여러가지의 코드를 붙여 넣는 과정에 많은
								어려움이 있었지만, 그만큼 즐거웠던 기억이 남았습니다.
							</em>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SiteDetail;
