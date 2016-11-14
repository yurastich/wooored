$(document).ready(function () {
    YMaps.jQuery(function () {
        var map = new YMaps.Map(YMaps.jQuery("#YMapsID")[0]);
        map.setCenter(new YMaps.GeoPoint(37.575882,55.851394), 10);
        map.setZoom(17);
        map.addControl(new YMaps.Zoom());
        var s = new YMaps.Style();
        s.iconStyle = new YMaps.IconStyle();
        var placemark = new YMaps.Placemark(map.getCenter(), {style: s});
        placemark.name = "8 (499) 390-23-19";
        map.addOverlay(placemark);
    });
});