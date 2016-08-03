$(window).scroll(function() {
if ($(this).scrollTop() > 1){  
    $('header').addClass("sticky");
    $('#esconde').hide(1000);
    
  }
  else{
    $('header').removeClass("sticky");
     $('#esconde').show(1000);

  }
});

headerdescendo