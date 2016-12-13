$(document).ready(function(){

  widthScreen = $(window).width();
  heightScreen = $(window).height();

  var blockInCenter = function (container, element) {
    var elementWidth = $(element).outerWidth(),
      elementHeight = $(element).outerHeight(),
      containerWidth = $(container).outerWidth(),
      containerHeight = $(container).outerHeight(),
      positionLeft = (containerWidth - elementWidth) / 2,
      positionTop = (containerHeight - elementHeight) / 2;

    if (positionTop < 20) {
      positionTop = 20;
    }
    $(element).css("left", positionLeft);

    $(element).css("top", positionTop);

  };

  var slider = $('.b-video-slider').lightSlider({
    item: 1,
    loop:true,
    pager: false,
    onSliderLoad: function(){
      pager();
    },
    onBeforeSlide: function(){
      pager();
    }
  });

  $('.js-left').click(function(){
    slider.goToPrevSlide();
  });
  $('.js-right').click(function(){
    slider.goToNextSlide();
  });

  var pager = function(){
    var ind = slider.getCurrentSlideCount();

    var item = $(".b-pagination-list .e-pagination-item");
    item.removeClass("active");
    item.eq(ind-1).addClass("active");
  };

  $(".b-pagination-list .e-pagination-item").click(function(){
    var ind = $(this).index();
    slider.goToSlide(ind+1);
  });

  $(function () {
    $('a[href^="#"]').bind('click', function (event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: ($($anchor.attr('href')).offset().top)-77
      }, 1500, 'swing');
      event.preventDefault();
    });
  });

  // popup

  // Popup
  var activePopupCenter = function(){
    var popupActive = $(".b-popup-overlay.active");

    blockInCenter(window, popupActive);
  };

  var popup = function(){
    var popup = $(".b-popup-overlay");

    $("[data-button]").click(function(){
      var popupNum = $(this).data("button");
      $("[data-modal='"+popupNum+"']").addClass("active").animate({
        "opacity": 1
      },300);
      overlayOpen();
    });


    $("[data-button]").click(function(e){
      e.preventDefault();
      activePopupCenter();
    });

    $(".b-close").click(function(){
      $(".b-popup-overlay").animate({
        "opacity": 0
      },300);
      setTimeout(function(){
        $(".b-popup-overlay.active").removeClass("active");
      }, 310);
      overlayClose();
    });

    $(".b-overlay").click(function(){
      $(".b-popup-overlay").animate({
        "opacity": 0
      },300);
      setTimeout(function(){
        $(".b-popup-overlay.active").removeClass("active");
      }, 310);
      overlayClose();
    })
  };
  // Popup end

  // Overlay
  var overlayOpen = function(){
    $(".b-overlay").addClass("active");
    $(".b-overlay").animate({
      "opacity": "1"
    },300);
  };

  var overlayClose = function(){

    $(".b-overlay").animate({
      "opacity": "0"
    },300);
    setTimeout(function(){
      $(".b-overlay").removeClass("active");
    },310);
  };
  // Overlay end

// popup end

  // map

  var mapHeight = function(){
    var footerHeight = $(".b-footer").outerHeight(),
        screenHeight = $(window).height(),
        mapHeight = screenHeight - footerHeight;
    if(screenHeight>=450){
      $(".b-seventh-content").css("height", mapHeight);
    }else{
      $(".b-seventh-content").css("height", 450);
    }

    $(".js-map-center").each(function(){
      var thisHeight = $(this).outerHeight(),
        contHeight = $(".b-seventh-content").outerHeight(),
        top = (contHeight - thisHeight)/2;
      $(this).css("top", top);
    });

  };

  var validate = function(){

    $("input[name=tel]").mask("+38 (999) 999-99-99");
    var options = {
      delegation: true,
      clearForm: true,
      resetForm: true,
      type: 'post',
      success: function() {
        $(".b-popup").data("done","1").addClass("m-popup-done");
        $(".b-popup").removeClass("m-popup-validate");
      },
      error: function() {

      }
    }

    $("button[type='submit']").click(function(){
      var form = $(this).closest("#b-form, #b-form-2, #b-form-3"),
          popup = $(this).closest(".b-popup");
      popup.attr("data-done", "1");
      setTimeout(function(){
        var hasError = form.find(".b-input").hasClass("error");
        if(hasError == true){
          popup.addClass("m-popup-validate");
        }else{
          popup.removeClass("m-popup-validate");
        }
        form.find(".b-input.error").closest(".b-input-container").addClass("m-input-error");
        form.find(".b-input.valid").closest(".b-input-container").removeClass("m-input-error");
      },200);

    });



    $('#b-form').ajaxForm(options);
    $("#b-form").validate({
      rules:{
        name:{required: true, maxlength: 100,},
        tel:{required: true, minlength: 10, maxlength: 25,}
      },
      messages:{
        name:{required: "", maxlength: "",},
        tel:{required: "", minlength: "", maxlength: "",},
      }
    });

    $('#b-form-2').ajaxForm(options);
    $("#b-form-2").validate({
      rules:{
        name:{required: true, maxlength: 100,},
        tel:{required: true, minlength: 10, maxlength: 25,}
      },
      messages:{
        name:{required: "", maxlength: "",},
        tel:{required: "", minlength: "", maxlength: "",},
      }
    });

    $('#b-form-3').ajaxForm(options);
    $("#b-form-3").validate({
      rules:{
        name:{required: true, maxlength: 100,},
        tel:{required: true, minlength: 10, maxlength: 25,}
      },
      messages:{
        name:{required: "", maxlength: "",},
        tel:{required: "", minlength: "", maxlength: "",},
      }
    });


  };


  popup();
  mapHeight();
  validate();

  $(window).resize(function(){
    popup();
    mapHeight();
  });

  $(window).load(function(){
    mapHeight();
  });

  $(".b-nav-list .e-nav-item").click(function(){
    $(".b-nav-list .e-nav-item").removeClass("active");
    $(this).addClass("active");
  });

  $("section").each(function(){
    var pos = $(this).offset().top,
      ind = $(this).index(),
      scroll = $(window).scrollTop(),
      headerHeight = $(".b-header").outerHeight();

    if(scroll>=(pos-headerHeight)){
      $(".b-nav-list .e-nav-item").removeClass("active");
      $(".b-nav-list .e-nav-item").eq(ind-2).addClass("active");
    }

  });

  $(window).scroll(function(){
    var scroll = $(window).scrollTop(),
        heightHeight = $(".b-header").outerHeight(),
        lastSelect = $(".b-seventh-content").offset().top,
        headerHide = lastSelect-heightHeight;

    if((scroll>0)){
      $(".b-header").addClass("m-header-scroll");
      if(scroll>=(headerHide)){
        $(".b-header").css("top", ((scroll - headerHide)*(-1))).addClass("m-header-tr");
      }else{
        $(".b-header").css("top", 0);
      }
    }else{
      $(".b-header").removeClass("m-header-scroll").removeClass("m-header-tr");
    }

    $("section").each(function(){
      var pos = $(this).offset().top,
          ind = $(this).index(),
          headerHeight = $(".b-header").outerHeight();

      if(scroll>=(pos-headerHeight)){
        $(".b-nav-list .e-nav-item").removeClass("active");
        $(".b-nav-list .e-nav-item").eq(ind-2).addClass("active");
      }

    });

  });

});
