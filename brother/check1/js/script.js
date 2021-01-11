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

$('.products').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})


$('.test-moon').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:true,
    navText:["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


$('.testing-slide').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    navText:["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
})

});



