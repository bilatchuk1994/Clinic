import $ from 'jquery'
window.jQuery = $
window.$ = $


// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener('DOMContentLoaded', () => {


	$(window).bind('load', function () {
		// stickyHeader();
	});

	//* Resize
	$(window).resize(function () {

	});

	//* Scroll
	$(window).scroll(function () {
		// stickyHeader();
	});

	//* Register
	function damaxRegister() {
		damaxToggleMenu();
		// stickyHeader();
	}
	damaxRegister();


	var swiper = new Swiper(".review-swiper", {
		slidesPerView: 1,
		spaceBetween: 31,
		loop: false,
		pagination: {
			el: ".review-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".review-next",
			prevEl: ".review-prev",
		},
	});

	function damaxToggleMenu() {
		$(".burger").click(function () {
			$(this).toggleClass("on");
			$(".header-menu").slideToggle();
			$(".header-menu").toggleClass("menu-active");
			$("body").toggleClass("menu_expand")
		});
	}


	$('.svg-image').each((i, e) => {
		var $img = $(e);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');
		$.get(imgURL, (data) => {
			let $svg = $(data).find('svg');
			if (typeof imgID !== 'undefined') {
				$svg = $svg.attr('id', imgID);
			}
			if (typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', `${imgClass}replaced-svg`);
			}
			$svg = $svg.removeAttr('xmlns:a');
			if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
				$svg.attr(`viewBox 0 0  ${$svg.attr('height')} ${$svg.attr('width')}`);
			}
			$img.replaceWith($svg);
		}, 'xml');
	});

})
