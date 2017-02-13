$(document).ready(function () {

    widthScreen = $(window).width();
    heightScreen = $(window).height();

    var blockInCenter = function (container, element) {
        var elementWidth = $(element).outerWidth(),
            elementHeight = $(element).outerHeight(),
            containerWidth = $(container).outerWidth(),
            containerHeight = $(container).outerHeight(),
            positionLeft = (containerWidth - elementWidth) / 2,
            positionTop = (containerHeight - elementHeight) / 2;

        //if (positionTop < 20) {
        //  positionTop = 20;
        //}
        $(element).css("left", positionLeft);

        $(element).css("top", positionTop);

    };

    // Number fix
    $("input[name=tel]").mask("+7 (999) 999-99-99");

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


    var androidAnimate = function () {
        var button = document.querySelectorAll('.anim');
        for (var i = 0; i < button.length; i++) {
            button[i].onmousedown = function (e) {

                var x = (e.offsetX == undefined) ? e.layerX : e.offsetX;
                var y = (e.offsetY == undefined) ? e.layerY : e.offsetY;
                var effect = document.createElement('div');
                effect.className = 'effect';
                effect.style.top = y + 'px';
                effect.style.left = x + 'px';
                e.srcElement.appendChild(effect);
                setTimeout(function () {
                    e.srcElement.removeChild(effect);
                }, 1100);
            }
        }
    };

    // Popup
    var popup = function () {
        var popup = $(".b-popup-overlay");

        $("[data-button]").click(function () {
            var popupNum = $(this).data("button");
            $("[data-modal='" + popupNum + "']").addClass("active").animate({
                "opacity": 1
            }, 300);
            overlayOpen();
        });


        $("[data-button]").click(function (e) {
            e.preventDefault();
        });

        $(".b-close").click(function () {
            $(".b-popup-overlay").animate({
                "opacity": 0
            }, 300);
            setTimeout(function () {
                $(".b-popup-overlay.active").removeClass("active");
            }, 310);
            overlayClose();
        });

        $(".b-overlay").click(function () {
            $(".b-popup-overlay").animate({
                "opacity": 0
            }, 300);
            setTimeout(function () {
                $(".b-popup-overlay.active").removeClass("active");
            }, 310);
            overlayClose();
        })
    };
    // Popup end
    var scrollTopPopup = function () {
        scr = $(window).scrollTop();
        scrWrap = $(".wrap").scrollTop();
    };

    // Overlay
    var overlayOpen = function () {
        scrollTopPopup();
        $(".b-overlay").addClass("active");
        $(".wrap").addClass("m-wrap-popup");
        $(".wrap").scrollTop(scr);
        $(".m-close-glob").addClass("m-close-visible");
        $(".b-overlay").animate({
            "opacity": "1"
        }, 300);
    };

    var overlayClose = function () {
        scrollTopPopup();
        $(".b-overlay").animate({
            "opacity": "0"
        }, 300);
        setTimeout(function () {
            $(".b-overlay").removeClass("active");
            $(".wrap").removeClass("m-wrap-popup");
            $(window).scrollTop(scrWrap);
            $(".m-close-glob").removeClass("m-close-visible");
        }, 310);
    };
    // Overlay end

    // Popup end


    var firstScreen = function () {
        var header = $(".b-header").outerHeight(),
            footer = $(".b-footer").outerHeight(),
            screenHeight = $(window).height(),
            newHeight = screenHeight - header - footer;


            $(".e-thanks .b-first-container").css("height", newHeight);


    };

    var headerHeight = $(".b-header").height();


    $("#form").submit(function () {
        var msg   = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: 'http://dev.wooo.red/send.php',
            data: msg,
            success: function(data) {
                window.location.href = 'thanks.html';
            },
            error:  function(xhr, str){
                alert('Возникла ошибка: ' + xhr.responseCode);
            }
        });
    });

    firstScreen();
    popup();

    $(window).resize(function () {

        firstScreen();

    });

    $(window).load(function () {
        firstScreen();
    });


    $(window).scroll(function () {
        var scr = $(window).scrollTop(),
            screenHeight = $(window).height(),
            screenWidth = $(window).width();
        // scroll();
    });


});
