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
    $('.hamburger').click(function () {
        $(this).toggleClass('active');


    });
    $('ul.navbar-nav li a').click(function () {
        $(this).parent().toggleClass('show').siblings().removeClass('show');
    });

    $('ul.quest-list li h6').click(function () {
        $(this).parent().toggleClass('active').siblings().removeClass('active');
    });

    $('.home-slider').on('initialized.owl.carousel changed.owl.carousel', function (e) {
        if (!e.namespace) {
            return;
        }
        var carousel = e.relatedTarget;
        $('.slider-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
    }).owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        nav: true,
        navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
        dots: false
    });

    $('.products').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    })


    $('.test-moon').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })


    $('.testing-slide').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    })

    $(document).ready(function () {
        $('.product__slider-main').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: false,
            asNavFor: '.product__slider-thmb',
        });

        $('.product__slider-thmb').slick({
            slidesToShow: 5,
            asNavFor: '.product__slider-main',
            dots: false,
            focusOnSelect: true,
            arrows: false,
        });




        // This button will increment the value
        $('.qtyplus').click(function (e) {
            e.preventDefault();
            let fieldName = $(this).attr('field');
            var currentVal = parseInt($(this).siblings('input[name=' + fieldName + ']').val());

            if (!isNaN(currentVal)) {
                $(this).siblings('input[name=' + fieldName + ']').val(currentVal + 1);
            } else {
                (this).siblings('input[name=' + fieldName + ']').val(0);
            }
        });
        $(".qtyminus").click(function (e) {
            e.preventDefault();
            let fieldName = $(this).attr('field');
            var currentVal = parseInt($(this).siblings('input[name=' + fieldName + ']').val());

            if (!isNaN(currentVal) && currentVal > 1) {
                $(this).siblings('input[name=' + fieldName + ']').val(currentVal - 1);
            } else {
                $(this).siblings('input[name=' + fieldName + ']').val(0);
            }
        });

    });

});



