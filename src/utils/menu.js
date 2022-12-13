/** @format */

const menu = () => {
	//햄버거 메뉴
	const ham = document.querySelector(".header__ham");
	const hamMenu = document.querySelector(".header__nav");
	const hamList = document.querySelector(".header__list");
	ham.addEventListener("click", () => {
		ham.classList.toggle("open");
		hamMenu.classList.toggle("open");
		hamList.classList.toggle("over");
	});

	//메뉴 이동
	document.querySelectorAll(".header__list li a").forEach((li) => {
		li.addEventListener("click", (e) => {
			e.preventDefault();
			document.querySelector(li.getAttribute("href")).scrollIntoView({
				behavior: "smooth",
			});
		});
	});

	//가장 처음으로 이동
	document.querySelector(".header__main").addEventListener("click", () => {
		window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
	});
};

export default menu;
