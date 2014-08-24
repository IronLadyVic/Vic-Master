$(function(){
	// console.log($(".flex-item"));
	$(".flex-item").on("click", function(){

		$(this).children("span").addClass("show");

	});

	$(".flex-item span").on("click",function(e){
		e.stopPropagation();
		$(this).removeClass("show");
		console.log("bla");
	});





});
