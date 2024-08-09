maptilersdk.config.apiKey = maptilerAPI;
const map = new maptilersdk.Map({
  container: 'map', // container's id or the HTML element to render the map
  style: maptilersdk.MapStyle.STREETS,
  center: campground.geometry.coordinates, // starting position [lng, lat]
  zoom: 9, // starting zoom
});
// Set optionsf
const marker = new maptilersdk.Marker()
 .setLngLat(campground.geometry.coordinates)
 .setPopup(new maptilersdk.Popup().setHTML(`<strong>${campground.title}<strong>`)) // add popup
 .addTo(map);
 marker.togglePopup();