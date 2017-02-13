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


  $("#form1").submit(function () {
    var msg = $(this).serialize();
    $.ajax({
      type: 'POST',
      url: '../send.php',
      data: msg,
      success: function (data) {
        window.location.href = 'thanks.html';
      },
      error: function (xhr, str) {
        alert('Возникла ошибка: ' + xhr.responseCode);
      }
    });
  });
  $("#form2").submit(function () {
    var msg = $(this).serialize();
    $.ajax({
      type: 'POST',
      url: '../send.php',
      data: msg,
      success: function (data) {
        window.location.href = 'thanks.html';
      },
      error: function (xhr, str) {
        alert('Возникла ошибка: ' + xhr.responseCode);
      }
    });
  });
  $("#form3").submit(function () {
    var msg = $(this).serialize();
    $.ajax({
      type: 'POST',
      url: '../send.php',
      data: msg,
      success: function (data) {
        window.location.href = 'thanks.html';
      },
      error: function (xhr, str) {
        alert('Возникла ошибка: ' + xhr.responseCode);
      }
    });
  });

  rand = 0;
  function getRandomArbitrary(min, max) {
    rand = Math.floor(Math.random() * (max - min)) + min;
    return rand;
  }

  var textAnim = function () {

    var myList = $(".b-third .e-value-item"),
      listLength = myList.length;

    var changeColor = function () {


      getRandomArbitrary(0, listLength);


      if (randOld == rand) {
        if (rand > 1) {
          rand = rand - 1;
        } else {
          rand = rand + 1;
        }
        return rand;
      }


      myList.eq(rand).addClass("active");
      var numActive = 0,
        myListActive = $(".b-value-list .e-value-item.active");
      myListActive.each(function () {
        numActive = numActive + 1;
        return numActive
      });

      if (numActive >= 3) {
        myList.removeClass("active");
      }
    };

    randOld = 0;

    setInterval(function () {
      changeColor();
      randOld = rand;
    }, 1000);

  };

  var swiper = new Swiper('.b-slider-container .swiper-container', {
    nextButton: '.js-button-right',
    prevButton: '.js-button-left',
    parallax: true,
    keyboardControl: true,
    speed: 700,
  });

  // numInd = 0;
  //
  // $(".js-par-el").each(function () {
  //   var leftOld = parseInt($(this).css("left")),
  //     topOld = parseInt($(this).css("top")),
  //     num = numInd + 1,
  //     atr = $(this).attr("data-paralax", num),
  //     atrRead = $(this).attr("data-paralax");
  //
  //   numInd = num;
  //
  //   $(this).closest(".js-par-cont").mousemove(function (event) {
  //
  //
  //
  //     var el = $(".js-par-el[data-paralax=" + atrRead + "]"),
  //       // bot = el.hasClass("js-bot"),
  //       bot = el.hasClass("qwe"),
  //       mid = el.hasClass("js-mid");
  //
  //     var h = event.pageX,
  //       v = event.pageY,
  //       offTop = el.offset().top,
  //       totalLeft = leftOld - (h / 20),
  //       totalTop = topOld - ((v-offTop) / 20);
  //
  //     if(bot == true){
  //       el.css({
  //         "left": (totalLeft*(-1)),
  //         "top": (totalTop*(-1))
  //       })
  //       console.log(v - offTop)
  //
  //     }else{
  //       // if(mid == true){
  //       //   el.css({
  //       //     "left": (totalLeft*-2),
  //       //     "top": (totalTop*2)
  //       //   })
  //       // }else{
  //       //   el.css({
  //       //     "left": totalLeft,
  //       //     "top": totalTop
  //       //   })
  //       // }
  //     }
  //
  //
  //   });
  //
  //    return numInd
  // });

  function paralax (pathEl, par, num){

    var plane = pathEl,
      ofPla = plane.offset().top,
      leftOld = parseInt(plane.css("left")),
      topOld = parseInt(plane.css("top"));

    par.mousemove(function (e) {

      var h = e.pageX,
        v = e.pageY,
        totalLeft = leftOld - (h / (num)),
        totalTop = topOld - ((v - ofPla) / (num));
      plane.css({
        "left": totalLeft,
        "top": totalTop,
      });

    });

  }

  paralax($(".js-par-cont .js-par-el1"), $(".js-par-cont"), 200);
  paralax($(".js-par-cont .js-par-el2"), $(".js-par-cont"), 150);
  paralax($(".js-par-cont2 .js-par-el1"), $(".js-par-cont2"), 150);
  paralax($(".js-par-cont2 .js-par-el2"), $(".js-par-cont2"), 200);
  paralax($(".js-par-cont3 .js-par-el1"), $(".js-par-cont3"), 100);
  paralax($(".js-par-cont3 .js-par-el2"), $(".js-par-cont3"), 200);
  paralax($(".js-par-cont3 .js-par-el3"), $(".js-par-cont3"), 150);

  var butTop = function () {
    var scr = $(window).scrollTop(),
      heightScr = $(window).height();
    if(scr> heightScr){
      $(".b-button-top").addClass("active");
    }else{
      $(".b-button-top").removeClass("active");
    }
  };

  // menu button
  $(".js-button-menu").click(function () {
    var menu = $(this).closest(".b-header").find(".b-nav-list");
    $(this).toggleClass("active");
    menu.toggleClass("active");
  });
  // menu button end

  $(".b-nav-list").click(function () {
    $(".js-button-menu").removeClass("active");
    $(this).removeClass("active");
  });

  var menu = function(){
    var width = $(window).width();

    if(width>1000){
      $(".js-button-menu").removeClass("active");
      $(".b-nav-list").removeClass("active");
    }

  };

  var dateText = function () {
    var currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 2), //  Количество дней наперед
      month = currentDate.getMonth()+1,
      dateTime = currentDate.getDate(),
      year = currentDate.getFullYear();

    if(month<10){
      month= '0'+month;
    }

    $(".b-time").text(dateTime + "." + month + "." + year);

  };

  var message = function () {

    var block = $(".b-fourth"),
      offTop = block.offset().top,
      scroll = $(window).scrollTop(),
      height= $(window).height(),
      dis = block.hasClass("disable");

    if(scroll>(offTop-(height/2))){
      if(!dis){
        $(".b-message").addClass("active")
      }

    }

    $(".b-message .b-close").click(function (e) {
      e.preventDefault();
      $(this).closest(".b-message").addClass("disabled").removeClass("active");
    });

  };

  textAnim();
  butTop();
  menu();
  dateText();
  message();


  $(window).resize(function () {
    menu();

  });

  $(window).load(function () {

  });


  $(window).scroll(function () {
    var scr = $(window).scrollTop(),
      screenHeight = $(window).height(),
      screenWidth = $(window).width();
    butTop();
    message();
  });


});
