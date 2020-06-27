
/*======================= Menu responsivo ==========================*/
const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');
	

	burger.addEventListener('click',() => {
		//toggle nav
		nav.classList.toggle('nav-active');

		//animate links
	navLinks.forEach((link, index) => {
		
		if (link.style.animation){
			link.style.animation = '';
		} else {
			link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.0}s`;
		}
		
	});

	//Burger Animation
	burger.classList.toggle('toggle');

	});
	
}

navSlide();
/*======================= Menu responsivo com Js ===================*/

/*======================= Menu fixo com jQuery =====================*/

$(function (){

	//Primeiro emcapsula o menu dentro de uma variável.
	var nav = $('nav');

	//Encapsula a janela window
	$(window).scroll(function(){

		if($(this).scrollTop() > 2){

			nav.addClass("menu-fixed");

		} else {

			nav.removeClass("menu-fixed");

		}

	})

});

/*======================= Menu fixo com jQuery =====================*/

/*======================= Scroll suave para link interno ===========*/

const menuItens = document.querySelectorAll('.nav-links a[href^="#"]');

menuItens.forEach(item => {
	item.addEventListener('click', scrollToIdOnClick);
})

function scrollToIdOnClick(event) {

	event.preventDefault();
	const element = event.target;
	const id = element.getAttribute('href');
	const to = document.querySelector(id).offsetTop;

	window.scroll({
		top: to - 80,
		behavior: "smooth",
	});

}

function getScrollTopByHref(element) {
	const id = element.getAttribute("href");
	const to = document.querySelector(id).offsetTop;
}
