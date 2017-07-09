



$(".arrow").hover(function(){
	$(this).addClass("animated shake");
});

$(".arrow").mouseleave(function(){
	$(this).removeClass("animated shake");
});





$("#lib1").click(function(){
	var q,w,e;


	function alert(){
		q = prompt("Enter verb ending in 'ing' :");
		w= prompt("Enter plural :");
		e= prompt("Enter adjective :");
	}


	if($(".arrow").length>0){
		$(".arrow").remove();
	}
	$(".main").empty();
	$(".main").addClass("lib");
	$(".main").append('<h1 class="content">There are too many <span class="word q">verb ending in "ing"</span> <span class="word w">plural</span> on this <span class="word e">adjective</span> plane! - he said</h1>');
	alert();
	$(".q").text(q);
	$(".w").text(w);
	$(".e").text(e);
	

});


$("#lib2").click(function(){
	var q,w,e,r;


	function alert(){
		q = prompt("Enter plural :");
		w= prompt("Enter word ending in ing :");
		e= prompt("Enter noun :");
		r = prompt("Enter adjective : ");
	}

	if($(".arrow").length>0){
		$(".arrow").remove();
	}
	$(".main").empty();
	$(".main").addClass("lib");
	$(".main").append('<h1 class="content">I was home alone and scared out of my <span class="word q">plural</span>. I could hear the wind<span class="word w">verb ending in "ing"</span> and off in the distance a/an <span class="word e" >noun</span>was houling I crossed the room and saw <span class="word r">adjective</span></h1>');
	alert();
	$(".q").text(q);
	$(".w").text(w);
	$(".e").text(e);
	$(".r").text(r);
});


$("#lib3").click(function(){
	var q,w,e;


	function alert(){
		q = prompt("Enter adjective :");
		w= prompt("Enter random word :");
		e= prompt("Enter random word :");
	}



	if($(".arrow").length>0){
		$(".arrow").remove();
	}
	$(".main").empty();
	$(".main").addClass("lib");
	$(".main").append('<h1 class="content">I would like to be a member of <span class="word q">adjective</span> I want my username to be <span class="word w">random</span> and password to be <span class="word e">random</span>. </h1>');
	alert();
	$(".q").text(q);
	$(".w").text(w);
	$(".e").text(e);

});


$("#lib4").click(function(){
	var q,w,e;


	function alert(){
		q = prompt("Enter noun :");
		w= prompt("Enter noun :");
		e= prompt("Enter adjective :");
	}
	if($(".arrow").length>0){
		$(".arrow").remove();
	}
	$(".main").empty();
	$(".main").addClass("lib");
	$(".main").append('<h1 class="content">I want to tell you how <span class="word q">noun</span> and <span class="word w">noun</span> my dad is. He is so strong I bet he could lift a <span class="word e">adjective</span></h1>');
	alert();
	$(".q").text(q);
	$(".w").text(w);
	$(".e").text(e);

});


