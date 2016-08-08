$(window).scroll(function() {
	
if ($(this).scrollTop() > 80){  


    $("#panel").slideUp(400);

  }
  
  else{

$("#panel").slideDown(400);


  }
});

$(window).scroll(function() {
  
if ($(this).scrollTop() > 80){  


    $("#aparece").show(1000);
//$("#resto").removeClass("offset1");

  }
  
  else{

$("#aparece").hide(1000);
//    $("#resto").addClass("offset1");


  }
});