//Visar och döljer dropdown meny
$(document).ready(function () {

	$('#hamburger_menu_button').click(function () {
		$('nav ul').toggleClass('showing');
	});

	$(".close").click(function () {
		$('nav ul').toggleClass('showing');
	});

	$(document).on("click", function (e) {
		if (
			$(e.target).closest("nav ul").length == 0 &&
			$("nav ul").hasClass("showing") &&
			$(e.target).closest("#hamburger_menu_button").length == 0
		) {
			$('nav ul').toggleClass('showing');
		}
	});
});


//Skapar skroll på sidan
$(function () {

	$('a[href*="#"]:not([href="#"])').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

			if (target.length) {
				$('html, body').animate({

					scrollTop: target.offset().top

				}, 1000);

				return false;
			}
		}
	});
});