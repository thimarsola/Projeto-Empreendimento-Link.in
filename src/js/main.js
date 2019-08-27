$(window).on('scroll', function () {
	if ($(window).scrollTop()) {
		$('.menu-contato').addClass('menu-center');
	} else {
		$('.menu-contato').removeClass('menu-center');
	}
});
