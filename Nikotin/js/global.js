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
    $("[name='num']").keypress(function (event) {
        var controlKeys = [8, 9, 13, 35, 36, 37, 39];
        // IE doesn't support indexOf
        var isControlKey = controlKeys.join(",").match(new RegExp(event.which));
        // Some browsers just don't raise events for control keys. Easy.
        // e.g. Safari backspace.
        if (!event.which || // Control keys in most browsers. e.g. Firefox tab is 0
            (49 <= event.which && event.which <= 57) || // Always 1 through 9
            (48 == event.which && $(this).attr("value")) || // No 0 first digit
            isControlKey) { // Opera assigns values for control keys.
            return;
        } else {
            event.preventDefault();
        }
    });

    // Link anchor
    $(function () {
        $('a[href^="#"]').bind('click', function (event) {
            var $anchor = $(this),
                h = $(".b-header").outerHeight(),
                scr = $($anchor.attr('href')).offset().top,
                newScr = scr - h;

            $('html, body').stop().animate({
                scrollTop: newScr
            }, 1500, 'swing');
            $(".b-nav a").removeClass("active");
            $(this).addClass("active");
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
    var activePopupCenter = function () {
        var popupActive = $(".b-popup-overlay.active"),
            heightPop = popupActive.find(".b-popup").outerHeight(),
            screenHeight = $(window).height();
        console.log(heightPop)
        if (heightPop >= screenHeight) {
            popupActive.find(".b-popup").addClass("m-popup-scroll").css({
                "height": (screenHeight - 30)
            });
        } else {
            popupActive.find(".b-popup").removeClass("m-popup-scroll").css({
                "height": "auto"
            });
        }

        blockInCenter(window, popupActive);
    };

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
            activePopupCenter();
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

    // Overlay
    var overlayOpen = function () {
        $(".b-overlay").addClass("active");
        $(".b-overlay").animate({
            "opacity": "1"
        }, 300);
    };

    var overlayClose = function () {

        $(".b-overlay").animate({
            "opacity": "0"
        }, 300);
        setTimeout(function () {
            $(".b-overlay").removeClass("active");
        }, 310);
    };
    // Overlay end

// popup end


    var firstScreen = function () {
        var header = $(".b-header").outerHeight(),
            screenHeight = $(window).height(),
            footer = $(".b-footer").outerHeight(),
            cont = $(".e-first-content").height(),
            newHeight = screenHeight - header,
            newHeightTh = newHeight - footer;

        if (screenHeight >= cont) {
            $(".e-first-content").css("height", newHeight).addClass("m-first-big");
            $(".e-first-content.m-thanks").css("height", newHeightTh);
        } else {
            $(".e-first-content").css("height", "auto").removeClass("m-first-big");
            $(".e-first-content.m-thanks").css("height", "auto");
        }

    };


    $("#form1").submit(function () { //устанавливаем событие отправки для формы с id=form
        var form_data = $(this).serialize(); //собераем все данные из формы
        $.ajax({
            type: "POST", //Метод отправки
            url: "send.php", //путь до php фаила отправителя
            data: form_data,
            success: function () {
                //код в этом блоке выполняется при успешной отправке сообщения
                alert("Ваше сообщение отпрвлено!");
            }
        });
    });

    var swiper = new Swiper('.b-slider-container .swiper-container', {
        nextButton: '.js-sl-next',
        prevButton: '.js-sl-prev',
        parallax: true,
        speed: 1500,
        loop: true,
        keyboardControl: true
    });

    var header = function () {
        var scroll = $(window).scrollTop(),
            heightHeight = $(".b-header").outerHeight(),
            screenHeight = $(window).outerHeight(),
            wrapHeight = $(".content").outerHeight();
        headerHide = wrapHeight - screenHeight-heightHeight;

        if(scroll>=(headerHide)){
            $(".b-header").css("top", ((scroll - headerHide)*(-1)));
        }else{
            $(".b-header").css("top", 0);
        }
    };

    // Calc

    var calc = function () {
        var item = $(".b-calc-list .e-calc-item"),
            act = $(".e-calc-item.active").index(),
            cal = $(".b-var-list .e-var-item");

        cal.removeClass("active");
        cal.eq(act).addClass("active");

        item.click(function () {
           var ind = $(this).index();
            cal.removeClass("active");
            item.removeClass("active");
            $(this).addClass("active");
            cal.eq(ind).addClass("active");
        });

    };



    firstScreen();
    popup();
    header();
    calc();
    // scroll();

    $(window).resize(function () {
        header();
        firstScreen();
        activePopupCenter();
    });

    $(window).load(function () {
        header();
        firstScreen();
    });




    $(window).scroll(function(){
        header();
    });


});
