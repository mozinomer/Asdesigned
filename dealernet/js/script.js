$(function () {

    "use strict";



    /*------ MENU Fixed ------*/

    $(window).scroll(function () {

        var $scroll = $(window).scrollTop();

        var $navbar = $("header");

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
  dots:true,
  nav:true,
  navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
  loop:true,
  margin:0,
//   autoplay:true,
//   autoplayTimeout:2000,
//   autoplayHoverPause:false
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
    navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    responsive : {
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

       

        
        $(document).ready(function () {
            var $owl = $('.media-carousel');
            $owl.owlCarousel({
                items: 4,
                smartSpeed: 800,
                dots: true,
                margin: 10,
                navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
                nav:true,
                autoplay: false,
                loop: true,
                responsiveRefreshRate: 1000,
                responsive: {
                    0: {
                        items: 1
                    },
                    500: {
                        items: 2
                    },
                    768: {
                        items: 3
                    },
                    1000: {
                        items:4                    }
                }
            });
        });
          

      

        
        $('.advantage-faq-heading').click(function(){
            $(this).addClass('active').parent('.advantage-faq').siblings().children('.advantage-faq-heading').removeClass('active');
            $(this).siblings('.advantage-para').slideDown('').parent('.advantage-faq').siblings().children('.advantage-para').slideUp('');
        });

        var owl = $('.advantage-slider');
        owl.owlCarousel({
         items:1,
         dots:false,
         nav:true,
         navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
         loop:true,
         margin:0,
       });
       var owl = $('.brands-carousel');
       owl.owlCarousel({
        items:6,
        dots:false,
        nav:true,
        navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        loop:true,
        margin:50,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:false
      });
      $('span.down-arrow').click(function(){
        $(this).parent('li').toggleClass('down-ul').siblings('li').removeClass('down-ul');
      });
      $('.hamburger').click(function(){
          $(this).toggleClass('active');
        $('.listing-menu').toggleClass('show-menu');
      });
      $( document ).ready(function() {
      if ($(window).width() < 767) {
      $('.footer-links h4').click(function(){
        $(this).toggleClass('rotate-i').parent().parent('.footer-links').siblings('.footer-links').find(' h4').removeClass('rotate-i');
       $(this).siblings('ul').slideToggle().parent().parent('.footer-links').siblings('.footer-links').find('ul').slideUp();
   });
}
});
    });
