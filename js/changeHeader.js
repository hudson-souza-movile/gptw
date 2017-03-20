u(document).on('scroll', function(){                        
	if (window.scrollY > 60) {
		u('header.home').addClass('shadow-header');
		u('header.pilar').addClass('scrolled');
		u('div.trigger').removeClass('trigger-pilar');
	} else {
		u('header.home').removeClass('shadow-header');
		u('header.pilar').removeClass('scrolled');
		u('div.trigger').addClass('trigger-pilar');
	}
});