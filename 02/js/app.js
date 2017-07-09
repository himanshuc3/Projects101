


var randomColor = '#' + Math.random().toString(16).slice(2, 8);

$(".box").mouseover(function(){
		$(this).css("background",randomColor);
		randomColor = '#' + Math.random().toString(16).slice(2, 8);
});



$("#solid").click(function(){

	var randomsolid = '#' + Math.random().toString(16).slice(2, 8);
	$(".box").mouseover(function(){
		$(this).css("background",randomsolid);
	});

});

$("#jazz").click(function(){

	$(".box").mouseover(function(){
		$(this).css("background",randomColor);
		randomColor = '#' + Math.random().toString(16).slice(2, 8);
	});

});


$("#gray").click(function(){
	var op = 0.01;
	$(".box").mouseover(function(){
		$(this).css("background","black");
		if(op<1){
			op +=.01;
		}else{
			op = 0.01
		}
		$(this).css("opacity",op);

	});

});

$("#erase").click(function(){
	$(".box").css("background","rgba(132, 133, 134, 0.1)");
});


















