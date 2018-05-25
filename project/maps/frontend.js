var map;

// Main function that runs with the html page
function initMap() {

      var map = new google.maps.Map(document.getElementById('map'), {
        center: {
      lat: 30.283747,
      lng: -97.706758},
        zoom: 10,
      }); 


// polyLayer = new google.maps.Data({map:map});

map.data.loadGeoJson('polygons.geojson');

};
