$(window).scroll(function() {
if ($(this).scrollTop() > 2){  
    $('header').addClass("sticky");
    $('#esconde').slideUp(1000);

   ;
  }
  else{
    $('header').removeClass("sticky");
    $('#esconde').show(1000);

  }
});

$(window).scroll(function() {
	
if ($(this).scrollTop() > 2){  


    $("#panel").slideUp("1000");
    $("#fade").fadeOut("30000");
  }
  
  else{

$("#panel").slideDown("1000");
$("#fade").fadeIn("30000");

  }
});