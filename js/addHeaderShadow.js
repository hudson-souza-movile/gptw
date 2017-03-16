u(document).on('scroll', function(){                        
	if (window.scrollY > 10) {
		u('header').addClass('shadow-header');
	} else {
		u('header').removeClass('shadow-header');
	}
});