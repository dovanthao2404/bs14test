// Scroll
$(window).scroll(function () {
	var sc = $(window).scrollTop();
	if (sc > 100) {
		$("#header").addClass("nav__fixed");
	} else {
		$("#header").removeClass("nav__fixed");
	}
});

// responsive pages
var dropdownBefore = document.querySelector("#menuHeader .dropdown-toggle");
$(window).on("resize", function () {
	if ($(window).width() > 991) {
		if (dropdownBefore.getAttribute("aria-expanded") == "true") {
			dropdownBefore.style.position = "unset"
		}
	}
});
dropdownBefore.onclick = function () {
	if (window.innerWidth < 992 && !(dropdownBefore.style.position == "unset")) {
		dropdownBefore.style.position = "unset";
	} else {
		dropdownBefore.style.position = "relative";
	}
};
function dropDownPagesPosition() {
	if (window.innerWidth < 992) {
		if (dropdownBefore.getAttribute("aria-expanded") == "true") {
			dropdownBefore.style.position = "relative";
		}
	}
}
// toggle() navbar toggler icon
var icon = document.querySelector("#header .navbar-toggler .fa");
icon.onclick = function iconNavbar() {
	icon.classList.toggle("icon-expand");
	icon.classList.toggle("fa-bars");
	icon.classList.toggle("icon-close");
	icon.classList.toggle("fa-times");
	dropDownPagesPosition()
};

// countUp
$(".counter").countUp();
var themeSwitch = document.getElementById("theme__switch");
themeSwitch.onclick = function () {
	document.body.classList.toggle("dark-theme");
	themeSwitch.classList.toggle("gg-moon");
	themeSwitch.classList.toggle("gg-sun");
	dropDownPagesPosition()
};


(function () {
	// Back to Top - by CodyHouse.co
	var backTop = document.getElementsByClassName('js-cd-top')[0],
		offset = 20, // browser window scroll (in pixels) after which the "back to top" link is shown
		offsetOpacity = 1200, //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		scrollDuration = 2000,
		scrolling = false;

	if (backTop) {
		//update back to top visibility on scrolling
		window.addEventListener("scroll", function (event) {
			if (!scrolling) {
				scrolling = true;
				(!window.requestAnimationFrame) ? setTimeout(checkBackToTop, 250) : window.requestAnimationFrame(checkBackToTop);
			}
		});

		//smooth scroll to top
		backTop.addEventListener('click', function (event) {
			event.preventDefault();
			(!window.requestAnimationFrame) ? window.scrollTo(0, 0) : Util.scrollTo(0, scrollDuration);
		});
	}

	function checkBackToTop() {
		var windowTop = window.scrollY || document.documentElement.scrollTop;
		(windowTop > offset) ? Util.addClass(backTop, 'cd-top--is-visible') : Util.removeClass(backTop, 'cd-top--is-visible cd-top--fade-out');
		(windowTop > offsetOpacity) && Util.addClass(backTop, 'cd-top--fade-out');
		scrolling = false;
	}
})();

// Easy Reponsive Tab

$(document).ready(function () {
	//Horizontal Tab
	$('#parentHorizontalTab').easyResponsiveTabs({
		type: 'default', //Types: default, vertical, accordion
		width: 'auto', //auto or any width like 600px
		fit: true, // 100% fit in a container
		tabidentify: 'hor_1', // The tab groups identifier
		activate: function (event) { // Callback function if tab is switched
			var $tab = $(this);
			var $info = $('#nested-tabInfo');
			var $name = $('span', $info);
			$name.text($tab.text());
			$info.show();
		}
	});
});


// Slick Carousel
$(document).ready(function () {
	$('.slick-wrapper').slick({
		dots: true,
		infinite: true,
		speed: 800,
		arrows: false,
		slidesToShow: 2,
		slidesToScroll: 2,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			}

		]
	});
});