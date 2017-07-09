 
var operators = ['+','-','*','/'];
var input = "";
var result = "";
var DecimalPresent = false;

$(".screen").text("0");

$(".key").on("click",function(){


	var keyVal = $(this).text();   //keyval == the current key Pressed
	// var $screen = $(".screen");
	// var outputVal = $screen.innerHTML;

	if(keyVal === 'C'){ 
		input = "";
		result = "";
		$(".screen").text("0");
		DecimalPresent = false;
	}else if(keyVal === '='){       // evalutation logic start
		// var equation = input;
		// var previouschar = input[input.length - 1];

		// if(operators.indexOf(previouschar)>-1 || previouschar === '.'){
		// 	equation.replace(/.$/,"");
		// }
		// if(equation){
		// 	$screen.innerHTML = result(equation);
		// }
		if(input[input.length - 1] =="."){
			input +="0";
		}
		try{
		result = eval(input);
		$(".screen").text(result);
		input = result;
		}catch(ex){
			alert("Something wrong!!");
		}
		DecimalPresent = false;     // evaluation logic end
	}else if(operators.indexOf(keyVal)>-1){

		var previouschar = input[input.length-1];


			if(input !="" && (operators.indexOf(previouschar) == -1)){
				input += keyVal;
				$(".screen").text(input);
			}else if(input=="" && keyVal == '-'){
				input += keyVal;
				$(".screen").text(input);
			}
			//replace last operator with new operator
			if(input.indexOf(previouschar)>-1 && input.length > 1){
				input = input.replace(/.$/,keyVal);
				$(".screen").text(input);
			}
	
	}else if(keyVal === '.') {
		if(!DecimalPresent){
			input += keyVal;
			$(".screen").text(input);
			DecimalPresent = true;
		}
	}else{
		input += keyVal;
		// $(".screen").innerHTML += keyVal;
		$(".screen").text(input);
	}

});




// function keyboard(e) {
//   var map = {".": ".", "1": ".", "2": "2", "3": "3", "4": "4", "5": "5", "6": "6", "7": "7", "8": "8", "9": "9", "0": "0", "+": "+", "-": "-", x: "*", "*": "*", "/": "/", Enter: "=", "=": "=", Delete: "C"};
//   var keypressed = map[e.key];
//   if (keypressed){
//   	$('.clear').css("background","white");
//   }
// }

// window.addEventListener("keydown", keyboard(e));





