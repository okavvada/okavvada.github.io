var map;

// Main function that runs with the html page
function initMap() {

      var map = new google.maps.Map(document.getElementById('map'), {
        center: {
      lat: 30.283747,
      lng: -97.706758},
        zoom: 10,
      }); 


	polyLayer = new google.maps.Data({map:map});
	polyLayer.loadGeoJson('zipcode_water.geojson');


	polyLayer.setStyle(function(feature) {
      if (feature.getProperty('total_water_MGD') > 1000000){
        color = '#165906';
      }
      if (feature.getProperty('total_water_MGD') > 100000 && feature.getProperty('total_water_MGD') < 1000000){
        color = '#219904';
      }
      if (feature.getProperty('total_water_MGD') > 1000 && feature.getProperty('total_water_MGD') < 100000) {
        color = '#9df28a';
      }
      if (feature.getProperty('total_water_MGD') < 1000){
        color = '#ffe554';
      }
      return ({visible: vis_biomass,
              fillColor: color,
              fillOpacity: 0.5,
              strokeWeight: 0.3,
              cursor: 'auto'})
      })

};
