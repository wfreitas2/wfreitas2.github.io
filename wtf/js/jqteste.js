$(window).scroll(function() {
	
if ($(this).scrollTop() > 80){  


    $("#panel").slideUp(400);

  }
  
  else{

$("#panel").slideDown(400);


  }
});

$(window).scroll(function() {

if ($(this).scrollTop() < 80){  
 


    $("#aparece").hide(900);
//$("#resto").removeClass("offset1");

  }
  
  else{

    $("#aparece").show(900);
//    $("#resto").addClass("offset1");


  }
});