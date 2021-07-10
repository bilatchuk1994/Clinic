import $ from 'jquery'
window.jQuery = $
window.$ = $


// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

import Swiper from 'swiper/bundle';

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


	function damaxToggleMenu() {
		$(".has-menu").hover(function () {
			if ($(window).width() > 992) {
				$(".menu-block").slideDown();
			}
		});
		$(".has-menu").mouseleave(function () {
			if ($(window).width() > 992) {
				$(".menu-block").slideUp();
			}
		});

	}



	jQuery(".burger").click(function () {
		jQuery("body").toggleClass("menu_expand");
		if ($(this).hasClass("on")) {
			$(".nav-menu").slideToggle();
			$(this).removeClass("on");
			$(".dropdown").animate({ left: '-1000' }, 200);
			$(".dropdown").removeClass("actives");
			$(".menu-block").animate({ left: '-1000' }, 200);
			$(".menu-block").removeClass("actives");
		} else {
			$(this).toggleClass("on");
			$(".nav-menu").slideToggle();
		}
	});


	jQuery(function ($) {
		$('.nav-menu ul li.has-child > a').click(function (e) {
			e.preventDefault();
			var $target = $($(this).attr('href')),
				$other = $target.siblings('.actives');

			if (!$target.hasClass('actives')) {
				$other.each(function (index, self) {
					var $this = $(this);
					$this.removeClass('actives').animate({
						left: $this.width()
					});
				});

				$target.addClass('actives').show().animate({
					left: 0
				});
			}
		});
	});


	jQuery(function ($) {
		$('.back-btn > a').click(function (e) {
			e.preventDefault();
			var $target = $($(this).attr('href')),
				$other = $target.siblings('.actives');

			if (!$target.hasClass('activ')) {
				$other.each(function (index, self) {
					var $this = $(this);
					$this.removeClass('actives').animate({
						left: $this.width()
					});
				});

				$target.removeClass('actives').show().css({
					left: -($target.width()) - 90
				}).animate({
					left: -($target.width()) - 90
				});
			}
		});
	});


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

	var swiper2 = new Swiper(".services-swiper", {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: false,
		pagination: {
			el: ".services-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".services-next",
			prevEl: ".services-prev",
		},
		breakpoints: {
			640: {
				slidesPerView: 1,
				spaceBetween: 30,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
		},
	});

	var swiper3 = new Swiper(".category-swiper", {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: false,
		pagination: {
			el: ".category-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".category-next",
			prevEl: ".category-prev",
		},
		breakpoints: {
			480: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			768: {
				slidesPerView: 5,
				spaceBetween: 41,
			},
			992: {
				slidesPerView: 4,
				spaceBetween: 49,
			},
			1260: {
				slidesPerView: 5,
				spaceBetween: 59,
			},
		},
	});

	var swiper4 = new Swiper(".gallery-swiper", {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: false,
		pagination: {
			el: ".gallery-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".gallery-next",
			prevEl: ".gallery-prev",
		},
		breakpoints: {
			480: {
				slidesPerView: 1,
				spaceBetween: 30,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			992: {
				slidesPerView: 2,
				spaceBetween: 40,
			},
		},
	});


	var swiper5 = new Swiper(".top-swiper", {
		slidesPerView: 1,
		spaceBetween: 0,
		effect: "fade",
		loop: false,
		pagination: {
			el: ".top-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".top-next",
			prevEl: ".top-prev",
		},
	});


	var swiper6 = new Swiper(".doctor-swiper", {
		slidesPerView: 1,
		spaceBetween: 29,
		loop: false,
		pagination: {
			el: ".doctor-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".doctor-next",
			prevEl: ".doctor-prev",
		},
	});

	$(".faq-title").on("click", function () {
		if ($(this).hasClass("active")) {
			$(this).removeClass("active");
			$(this).siblings(".faq-content").slideUp(200);
		} else {
			$(".faq-title").removeClass("active");
			$(this).addClass("active");
			$(".faq-content").slideUp(200);
			$(this).siblings(".faq-content").slideDown(200);
		}
	});

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
