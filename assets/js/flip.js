$('document').ready(function(){
	$(".flip-container").hover(function(e){
	   	$(this).toggleClass("flipper");
	});

	$('.flip-container').on('touchstart', function(){
		$(this).toggleClass("flipper");
	});

	// $('.nav-link').click(function(){
	// 	$('.nav-link').removeClass('active');
	// 	$(this).addClass("active");
	// });
});