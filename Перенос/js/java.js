$(document).ready(function()
{
// появление логотипа
setTimeout(function(){
 $(".logoHide").removeClass("logoHide");
  },500)

//скролл по стрелкам
$("#gotoq2").bind("click", function() {
    $('html, body').animate({
    scrollTop: ($('.q2').offset().top-0)
},1300);
});
$("#gotoq3").bind("click", function() {
    $('html, body').animate({
    scrollTop: ($('.q3').offset().top-0)
},1300);
});
$("#gotoq4").bind("click", function() {
    $('html, body').animate({
    scrollTop: ($('.q4').offset().top-250)
},1300);
});
$("#gotoq5").bind("click", function() {
    $('html, body').animate({
    scrollTop: ($('.q5').offset().top+200)
},1300);
});
$("#gotoq51").bind("click", function() {
    $('html, body').animate({
    scrollTop: ($('.q5').offset().top+200)
},1300);
});
$("#gotoq52").bind("click", function() {
    $('html, body').animate({
    scrollTop: ($('.q5').offset().top+200)
},1300);
});
$("#gotoq53").bind("click", function() {
    $('html, body').animate({
    scrollTop: ($('.q5').offset().top+200)
},1300);
});
$("#gotoq54").bind("click", function() {
    $('html, body').animate({
    scrollTop: ($('.q5').offset().top+200)
},1300);
});
$("#gotoq55").bind("click", function() {
    $('html, body').animate({
    scrollTop: ($('.q5').offset().top+200)
},1300);
});
$("#gotoq56").bind("click", function() {
    $('html, body').animate({
    scrollTop: ($('.q5').offset().top+200)
},1300);
});
$("#gotoq6").bind("click", function() {
    $('html, body').animate({
    scrollTop: ($('.q6').offset().top+50)
},1300);
});
$("#gotoq8").bind("click", function() {
    $('html, body').animate({
    scrollTop: ($('.q8').offset().top+50)
},1300);
});
$(".gotoq9").bind("click", function() {
    $('html, body').animate({
    scrollTop: ($('.q9').offset().top+50)
},1300);
$(".gotoq9").removeClass("gotoq9");
$(".arrowq9").addClass("gotoq91");
});

$(".gotoq91").bind("click", function() {
    $('html, body').animate({
    scrollTop: ($('.q9').offset().top-850)
},1300);
});

$("#modal_close").bind("click", function() {
    
    setTimeout(function(){
      $('html, body').animate({
    scrollTop: ($('.q7').offset().top)
},1300);
      },400);
});


$('.your-class').slick({
        dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  autoplay:true,
  cssEase: 'linear'
      });

$('.your-class-mobile').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  autoplay:true,
  cssEase: 'linear'
      });



$('.reviewOver').slick({
  dots: false,
  infinite: true,
  speed: 500,
  autoplay:true,
  cssEase: 'ease',
  nextArrow: ".reviewArrowR",
  prevArrow: ".reviewArrow"
      });






var blockWidth = $(".reviewBlock").width();
console.log(blockWidth);

$(".reviewShell").css("width",blockWidth);
$(".reviewShell2").css("width",blockWidth);
$(".reviewShell3").css("width",blockWidth);
$(".reviewShell4").css("width",blockWidth);




$('#next').click(function(){     
   event.preventDefault(); 
$('.reviewFixed').animate({  marginLeft:'-='+blockWidth },
  {
            step: function (now, fx) {
                if(parseInt(now)<=-blockWidth*4){
                    //$(this).stop();
                    fx.end = fx.start;
                }
            }
        },
  300)
    });

$('#prev').click(function(){     
   event.preventDefault(); 
$('.reviewFixed').animate({  marginLeft:'+='+blockWidth},
  {
            step: function (now, fx) {
                if(parseInt(now)>=0){
                    $(this).stop();
                    fx.end = fx.start;
                }
            }
        },
  300)
    });





$('#go').click( function(event){ // лoвим клик пo ссылки с id="go"
    event.preventDefault(); // выключaем стaндaртную рoль элементa
    $('#overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
      function(){ // пoсле выпoлнения предъидущей aнимaции
        $('#modal_form') 
          .css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
          .animate({opacity: 1}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
    });
  });
  /* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
  $('#modal_close, #overlay').click( function(){ // лoвим клик пo крестику или пoдлoжке
    $('#modal_form')
      .animate({opacity: 0,}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
        function(){ // пoсле aнимaции
          $(this).css('display', 'none'); // делaем ему display: none;
          $('#overlay').fadeOut(400); // скрывaем пoдлoжку
        }
      );
  });



});/*КОНЕЦ*/
    
