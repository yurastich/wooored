$(document).ready(function(){
  var mapCenter = function () {

    var marker;

    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 46.480982, lng: 30.735268},
      scrollwheel: false,
      zoom: 18
    });

    marker = new google.maps.Marker({
      map: map,
      draggable: false,
      animation: google.maps.Animation.DROP,
      position: {lat: 46.481858, lng: 30.735289}

    });
    marker.setMap(map);

  };

  $(window).load(function () {
    mapCenter();
  });
});