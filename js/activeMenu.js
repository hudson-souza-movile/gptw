u('.trigger, .overlay').on('click', function(){
	u('nav').toggleClass('menu-active')
	u('.overlay').toggleClass('overlay-active')
	u('body').toggleClass('overflow-hidden')
})