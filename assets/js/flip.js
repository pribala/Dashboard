$(".flip-container").hover(function(e){
   	$(this).toggleClass("flipper");
});
$('.flip-container').on('touchstart', function(){
	$(this).toggleClass("flipper");
});