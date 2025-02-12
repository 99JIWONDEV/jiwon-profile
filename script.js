"use strict";

const addEventOnElem = function (elem, type, callback) {
	if (elem.length > 1) {
		for (let i = 0; i < elem.length; i++) {
			elem[i].addEventListener(type, callback);
		}
	} else {
		elem.addEventListener(type, callback);
	}
};

const navbar = document.querySelector("[data-navbar]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

// 네비게이션 바 토글 함수
const toggleNavbar = function () {
	navbar.classList.toggle("active");
	navToggler.classList.toggle("active");
};

// 네비게이션 토글 버튼에 클릭 이벤트 추가
addEventOnElem(navToggler, "click", toggleNavbar);

// 네비게이션 바 닫기 함수
const closeNavbar = function () {
	navbar.classList.remove("active");
	navToggler.classList.remove("active");
};

// 네비게이션 링크에 클릭 이벤트 추가
addEventOnElem(navLinks, "click", closeNavbar);

// 헤더 요소 선택
const header = document.querySelector("[data-header]");

// 스크롤 이벤트에 따라 헤더 클래스 추가/제거
window.addEventListener("scroll", function () {
	if (window.scrollY > 100) {
		header.classList.add("active");
	} else {
		header.classList.remove("active");
	}
});
