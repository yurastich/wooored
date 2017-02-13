/**
 * Created by admin on 12.11.16.
 */
$(document).ready(function () {
    YMaps.jQuery(function () {
        var map = new YMaps.Map(YMaps.jQuery("#YMapsID")[0]);
        map.setCenter(new YMaps.GeoPoint(30.447049, 50.452420), 10);
        map.setZoom(16);
        var s = new YMaps.Style();
        s.iconStyle = new YMaps.IconStyle();
        var placemark = new YMaps.Placemark(map.getCenter(), {style: s});
        placemark.name = "Киев, ул. Вадима Гетьмана 1б";
        map.addOverlay(placemark);
    });
});