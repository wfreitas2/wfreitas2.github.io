$(window).scroll(function() {
	
if ($(this).scrollTop() > 1){  


    $("#panel").slideUp(400);

  }
  
  else{

$("#panel").slideDown(400);


  }
});

$(window).scroll(function() {

if ($(this).scrollTop() < 1){  
 


    $("#aparece").hide(400);
//$("#resto").removeClass("offset1");

  }
  
  else{

    $("#aparece").show(400);
//    $("#resto").addClass("offset1");


  }
});
function inicio(){
  $("#aparece").hide();

}