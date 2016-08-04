$(window).scroll(function() {
	
if ($(this).scrollTop() > 80){  


    $("#panel").slideUp(1000);

  }
  
  else{

$("#panel").slideDown(1000);


  }
});
