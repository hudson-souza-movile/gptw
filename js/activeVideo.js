u('.active-video').on('click', function(){
	u('.overlay').addClass('overlay-active');
	u('body').addClass('overflow-hidden')
	u('.trigger').addClass('hide')
	var video = u(this).data('video-path');
	var video_format = u(this).data('video-format');
	if (video_format == "mp4") {
		u('.overlay').html("<video controls autoplay='none'><source src='"+video+"."+video_format+"' type='video/"+video_format+"'></video><button class='close-video'> Fechar </button>");
	}
	else {
		u('.overlay').html("<video controls autoplay='none' src='"+video+"."+video_format+"'></video><button class='close-video'> Fechar </button>");
	}
})
u('.overlay, .close-video').on('click', function(){
	u('video, .close-video').remove();
	u('.trigger').removeClass('hide')
})