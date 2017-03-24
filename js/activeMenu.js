u('.trigger').on('click', function(){
	u('nav').toggleClass('menu-active')
	u('.overlay').toggleClass('overlay-active')
	u('body').toggleClass('overflow-hidden')
})
u('.overlay').on('click', function(){
	u('nav').removeClass('menu-active')
	u('.overlay').removeClass('overlay-active')
	u('body').removeClass('overflow-hidden')
})