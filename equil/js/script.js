$(function () {
    "use strict";

    /*------ MENU Fixed ------*/
    $(window).scroll(function () {
        var $scroll = $(window).scrollTop();
        var $navbar = $(".navbar");
        var $header = $(".header-icon-bars ");
        if ($scroll > 100) {
            $navbar.addClass("scroll-nav");
            $header.addClass("bar-color");
        } else {
            $navbar.removeClass("scroll-nav");
            $header.removeClass("bar-color");
        }
    });
$('.hamburger').click(function(){
$(this).toggleClass('active');


});

$('.banner-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    items:1,
    responsive:{
        0:{
            items:1
        }
    }
});

$('.testi-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    items:1,
    responsive:{
        0:{
            items:1
        }
    }
})


});




$(document).ready(function(){
    $(".images-event").slice(0, 1).show();
    $("#redi").on("click", function(e){
      e.preventDefault();
      $(".images-event:hidden").slice(0, 1).slideDown();
      if($(".images-event:hidden").length == 0) {
        $("#redi").text("No More Avaible").addClass("noContent");
      }
    });
    
  })