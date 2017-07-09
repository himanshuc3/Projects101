



var computer = ["rock","paper","scissor"];
var compchoice;
var userchoice;
var all = "../css/comic-hands-rock-paper-scissors.png";


function displayResults(){
	$('.hand_container').removeClass('shake');
	$(".human_hand").text(userchoice);
	$(".comp_hand").text(compchoice);

}

function randomNumber(){
	return Math.floor(Math.random()*3);
}


function countDown() {
		var i = 3;

		count();

		function count() {
			$('.hand_container').addClass('shake');
			
			

			if (i == 0) {
				displayResults(); 
			} else {
				$('.count').text(i);
				i -= 1;
				setTimeout(count, 500);
			}
		}
}





$(".button").on("click",function(){
	// $(".human_hand").text("Processing..");
	// $(".comp_hand").text("Processing..");
	$(".human_hand").html('<img src="css/4851155_orig.png" alt="">');
	$(".comp_hand").html('<img src="css/4851155_orig.png" alt="">');
	compchoice = computer[randomNumber()];
	userchoice = $(this).text();
	countDown();

	setTimeout(function(){
		if ( userchoice == compchoice ) {
		$('.count').text('Tie!');
	} else if ( (userchoice == 'rock' && compchoice == 'scissor') || (userchoice == 'paper' && compchoice == 'rock') || (userchoice == 'scissor' && compchoice == 'paper') ) {
		$('.count').text('You Win!');
	} else {
		$('.count').text('You Lose!');
	};
	
	},1600);

});




