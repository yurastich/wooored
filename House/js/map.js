/**
 * Created by admin on 12.11.16.
 */
$(document).ready(function () {
    YMaps.jQuery(function () {
        var map = new YMaps.Map(YMaps.jQuery("#YMapsID")[0]);
        map.setCenter(new YMaps.GeoPoint(37.201446, 55.611660), 10);
        map.setZoom(16);
        var s = new YMaps.Style();
        s.iconStyle = new YMaps.IconStyle();
        var placemark = new YMaps.Placemark(map.getCenter(), {style: s});
        placemark.name = "г. Москва, ул. Ленина, д 12";
        map.addOverlay(placemark);
    });
});