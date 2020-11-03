$(function () {

    "use strict";



    /*------ MENU Fixed ------*/

    $(window).scroll(function () {

        var $scroll = $(window).scrollTop();

        var $navbar = $(".navbar");

        if ($scroll > 100) {

            $navbar.addClass("scroll-nav");

        } else {

            $navbar.removeClass("scroll-nav");

        }

    });



 // banner slider
 var owl = $('.banner-slider');
 owl.owlCarousel({
  items:1,
  dots:false,
  loop:true,
  margin:0,
  autoplay:true,
  autoplayTimeout:2000,
  autoplayHoverPause:false
});

 // ipad slider
 var owl = $('.ipad-slider');
 owl.owlCarousel({
  items:3,
  dots:false,
  loop:true,
  margin:100,
  center:true,
    nav:true,
    navText:["<img src='images/prev.png'>","<img src='images/next.png'>"],
    responsive : {
        0:{
            items:1,
            margin:0,
        },
        768 : {
            margin:45,
            items:3,
        },
        992 : {
            margin:50
        },
        1100 : {
            margin:65
        },
        1300 : {
            margin:70
        },
        1400 : {
            margin:85
        },
        1599 : {
            margin:90
        }
    }
});
// var swiper = new Swiper('.ipad-slider', {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     loop: true,
//     centeredSlides: true,
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
//   });
// if ($('.owl-item').hasClass("center")) {
//     $(this).addClass("show").parent().next().addClass("show2"); 
//   }
// });

    // $(window).on('change', function(e) {
        
    // })
    // var owl = $('.ipad-slider');
    // owl.owlCarousel();
    // // Listen to owl events:
    // owl.on('changed.owl.carousel', function(event) {
    //     $('.owl-item.center').next().addClass('asd')
    // });

});