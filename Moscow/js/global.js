$(document).ready(function () {

    widthScreen = $(window).width();
    heightScreen = $(window).height();

    // Link anchor
    $(function () {
        $('a[href^="#"]').bind('click', function (event) {
            var $anchor = $(this),
                scr = $($anchor.attr('href')).offset().top;

            $('html, body').stop().animate({
                scrollTop: scr
            }, 1500, 'swing');
            event.preventDefault();
        });
    });


    var firstScreen = function () {
        var header = $(".b-header").outerHeight(),
            screenHeight = $(window).height(),
            footer = $(".b-footer").outerHeight(),
            content = $(".b-first .container").outerHeight(),
            newHeight = screenHeight - header,
            newHeightTh = newHeight - footer;

        if (screenHeight >= 650) {
            if(content<newHeight){
                $(".e-first-content").css("height", newHeight).removeClass("m-first-pad");
            }
        } else {
            $(".e-first-content").css("height", "auto").addClass("m-first-pad");
        }

    };

    var companySlider = new Swiper('.js-company', {
        paginationClickable: true,
        slidesPerView: 5,
        spaceBetween: 10,
        prevButton:".js-company-prev",
        nextButton:".js-company-next",
        loop:true,
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 40
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },

        }
    });

    var meetSlider = new Swiper('.b-month-container', {
        nextButton: '.js-meet-next',
        prevButton: '.js-meet-prev',
        parallax: true,
        speed: 600,
    });

    // menu button
    $(".js-button-menu").click(function () {
        var menu = $(this).closest(".b-header").find(".b-nav-list");
        $(this).toggleClass("active");
        menu.toggleClass("active");
    });
    // menu button end

    firstScreen();

    $(window).resize(function () {
        firstScreen();
    });

    $(window).load(function () {
        firstScreen();
    });

});
