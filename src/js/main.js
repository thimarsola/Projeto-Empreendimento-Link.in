// Contato lateral
$(window).on('scroll', function () {
	if ($(window).scrollTop()) {
		$('.menu-contato').addClass('menu-center');
	} else {
		$('.menu-contato').removeClass('menu-center');
	}
});

// GoTo
function goTo(element, speed) {
	var href = element.attr('href');
	var top = $(href).offset().top;
	var menuHeight = $('nav').innerHeight();
	$('html,body').animate({
		scrollTop: top - menuHeight
	}, speed);
}

// menu de navegação
$(function () {
	$(' nav .navbar-nav a').click(function (e) {
		e.preventDefault()
		goTo($(this), 1000);
	});
	return false;
});
// botão goTo
$(function () {
	$(' header .goto a').click(function (e) {
		e.preventDefault()
		goTo($(this), 1000);
	});
	return false;
});

// WoW init
new WOW().init();