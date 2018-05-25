var map;

// Main function that runs with the html page
function initMap() {

      var map = new google.maps.Map(document.getElementById('map'), {
        center: {
      lat: 30.283747,
      lng: -97.706758},
        zoom: 9,
      }); 


	polyLayer = new google.maps.Data({map:map});
polyLayer.loadGeoJson('zipcode_water.geojson');


	polyLayer.setStyle(function(feature) {
      if (feature.getProperty('total_water_MGD') > 2){
        color = '#c60505';
      }
      if (feature.getProperty('total_water_MGD') > 0.2 && feature.getProperty('total_water_MGD') < 2){
        color = '#d18a08';
      }
      if (feature.getProperty('total_water_MGD') > 0.02 && feature.getProperty('total_water_MGD') < 0.2) {
        color = '#3964db';
      }
      if (feature.getProperty('total_water_MGD') < 0.02){
        color = '#34d84c';
      }
      return ({
              fillColor: color,
              fillOpacity: 0.5,
              strokeWeight: 0.3,
              cursor: 'auto'})
      })

html_text = "<div class='tooltip-wrap' id='legend-title'></br><strong>Biomass in County </br> (thousand BDT/year)</strong></br><div>" +
                  "<span class='legend-swatch' style='background-color: #ffe554;opacity: 0.6'></span>" +
                  "<span class='legend-range'><1</span></div><div>" +
                  "<span class='legend-swatch' style='background-color: #9df28a;opacity: 0.6'></span>" +
                  "<span class='legend-range'>1 - 100</span></div><div>" +
                  "<span class='legend-swatch' style='background-color: #219904;opacity: 0.6'></span>" +
                  "<span class='legend-range'>100 - 1000</span></div><div>" +
                  "<span class='legend-swatch' style='background-color: #165906;opacity: 0.6'></span>" +
                  "<span class='legend-range'>1000+</span></div></div>"
parent = document.getElementById('legend');
parent.insertAdjacentHTML("beforeend", html_text)

};
