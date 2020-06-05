$(document).ready(function(){
    var windowWidth = $(window).width();
    var headerHight = 100; 
    jQuery('a[href^=#]').click(function() {
    var speed = 1000;
    var href= jQuery(this).attr("href");
    var target = jQuery(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top-headerHight;
    jQuery('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
   });
});


$(document).ready(function(){
  $(".menu-btn").click(function(){
    $(".sp-menubtn_toggle").slideToggle();
  });
});


$(document).ready(function(){
  $(window).on('load resize', function(){
    var winW = $(window).width();
    var devW = 767;
    if (winW <= devW) {
      //767px以下の時の処理
      
      $(".del").on('click', function() {
        $(".sp-menubtn_toggle").hide();
      });
      
      
    } else {
      //768pxより大きい時の処理
      
      $(".del").on('click', function() {
        $(".sp-menubtn_toggle").show();
      });
      
    }
  });
});


$(document).ready(function(){
    $("#pageup").click(function(){
    $('html,body').animate({'scrollTop':0},500);
    });
});        