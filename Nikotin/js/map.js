$(document).ready(function(){
  var mapCenter = function () {

    var marker;

    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 50.4835149, lng: 30.4866828},
      scrollwheel: false,
      zoom: 17
    });

    marker = new google.maps.Marker({
      map: map,
      draggable: false,
      animation: google.maps.Animation.DROP,
      position: {lat: 50.4835149, lng: 30.4866828}

    });
    marker.setMap(map);

  };

  $(window).load(function () {
    mapCenter();
  });
});