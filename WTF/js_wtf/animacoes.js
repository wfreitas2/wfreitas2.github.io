$(window).scroll(function() {
	
if ($(this).scrollTop() !=0){  


    $("#panel").slideUp(400);
   // $("#ajuste").animate({paddingTop: "+200px"})

  }
  
  
  else{

	$("#panel").slideDown(400);

	//$("#ajuste").animate({paddingTop: "-200px"})

  }


});

function inicio(){
 

}