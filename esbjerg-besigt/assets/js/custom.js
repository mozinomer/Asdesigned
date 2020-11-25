$(document).ready(function () {
    // home slider
    $('.home-slider .owl-carousel').owlCarousel({
        loop: false,
        margin: 0,
        nav: true,
        autoplay: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left">', '<i class="fa fa-angle-right">'],
        responsive: {
            0: {
                items: 1
            }
        }
    });
    $('.offer-slider .owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        autoplay: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left">', '<i class="fa fa-angle-right">'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000:{
                items:3
            }
        }
    });
    $(".menu-bar").click(function () {
        $(".cus-navigation").slideToggle();
    });
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        //>=, not <=
        if (scroll >= 150) {
            //clearHeader, not clearheader - caps H
            $("header").addClass("stickyheader");
        }
        else {
            $("header").removeClass("stickyheader");
        }
    }); //missing );
});
