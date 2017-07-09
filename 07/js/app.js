
$(document).ready(function () {


		// alert($("body").css("background-color"));
		$("body").on("click",".toggle",function(){

			if($("body").css("background-color") == "rgb(94, 2, 49)"){
				$("body").removeClass("light");
				$("body").addClass("black");
				
			}else{
				$("body").removeClass("black");
				$("body").addClass("light");
				
			}
			


		});



		//removing from archive
        $("body").on("click",".delete",function(){
        	$(this).parent().remove();
        });





        $("body").on("click",".input-group-btn",function(){

        	if(!($(this).siblings("input").val())){
        		alert("You must write something!!");
        	}else{




        	var item ="";
        	item += '<div class="item col-lg-12">';
			item +=	 '<span class="input-group-addon">';
			item +=  '<input type="checkbox" aria-label="...">'
			item +=   '</span>';
			item +=	  '<div class="list-text">';
			item +=   $(this).siblings("input").val();
			item +=    '</div></div>';

			$(".items .row").prepend(item);
			$(this).siblings(":input").val("");
			$(this).siblings(":input").focus();}

        });

        $("body").on("click",".input-group-addon input",function(){

        	var archive ="";
        	var song = this;
        	archive += '<div class="archive-item col-lg-12">';
        	archive +=  '<div class="text">';
			archive +=	 $(this).parent().siblings(".list-text").text();
			archive +=   '</div>'
			archive +=   '<div class="delete">Delete</div></div>';

			setTimeout(function(){ 
				$(".archive .row").append(archive);
				$(song).parent().parent().remove();
			},1000);
			
			

        });










    });