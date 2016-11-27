$(document).ready(function()
{

// $( "#slider" ).slider({
// value : 0,//Значение, которое будет выставлено слайдеру при загрузке
//   min : -150,//Минимально возможное значение на ползунке
//   max : 150,//Максимально возможное значение на ползунке
//   step : 1,//Шаг, с которым будет двигаться ползунок
//   create: function( event, ui ) {
//    val = $( "#slider" ).slider("value");//При создании слайдера, получаем его значение в перемен. val
//   $( "#contentSlider" ).html( val );//Заполняем этим значением элемент с id contentSlider
//  },
//  slide: function( event, ui ) {
//   $( "#contentSlider" ).html( ui.value );//При изменении значения ползунка заполняем элемент с id contentSlider
//             }
//         });

$("#slider").slider({
  value:100,
  min: 0,
  max: 500,
  step: 50,
  slide: function( event, ui ) {
    $( "#amount" ).val( "$" + ui.value );
  }
});
$( "#amount" ).val( "$" + $( "#slider" ).slider( "value" ) );

$("#slider1").slider({
  value:100,
  min: 0,
  max: 500,
  step: 50,
  slide: function( event, ui ) {
    $( "#amount" ).val( "$" + ui.value );
  }
});
$( "#amount" ).val( "$" + $( "#slider" ).slider( "value" ) );

});/*КОНЕЦ*/
    
