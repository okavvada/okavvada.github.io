var map;

// Main function that runs with the html page
function initMap() {

      var map = new google.maps.Map(document.getElementById('map'), {
        center: {
      lat: 30.283747,
      lng: -97.706758},
        zoom: 12,
      }); 


	polyLayer = new google.maps.Data({map:map});
polyLayer.loadGeoJson('tabblocks_water.geojson');


	polyLayer.setStyle(function(feature) {
      if (feature.getProperty('total_water') > 2){
        color = '#c60505';
      }
      if (feature.getProperty('total_water') > 0.2 && feature.getProperty('total_water') < 2){
        color = '#d18a08';
      }
      if (feature.getProperty('total_water') > 0.02 && feature.getProperty('total_water') < 0.2) {
        color = '#3964db';
      }
      if (feature.getProperty('total_water') < 0.02){
        color = '#34d84c';
      }
      return ({
              fillColor: color,
              fillOpacity: 0.5,
              strokeWeight: 0.3,
              cursor: 'auto'})
      })

var infowindow = new google.maps.InfoWindow();
polyLayer.addListener('mouseover', function(event) {
    cap = (Math.round(event.feature.getProperty("total_water")*1000)/1000).toLocaleString();
    var html = "Water Consumption: </br>" + cap + " MGD";

  infowindow.setContent(html);
  infowindow.setPosition(event.latLng);
  infowindow.setOptions({disableAutoPan: true});
  infowindow.open(map);

    });
polyLayer.addListener('mouseout', function() {
    window.infowindow.close();
  });

html_text = "<div class='tooltip-wrap' id='legend-title'></br><strong>Water Consumption (MGD) </br></strong></br><div>" +
                  "<span class='legend-swatch' style='background-color: #34d84c;opacity: 0.6'></span>" +
                  "<span class='legend-range'><0.02</span></div><div>" +
                  "<span class='legend-swatch' style='background-color: #3964db;opacity: 0.6'></span>" +
                  "<span class='legend-range'>0.02 - 0.2</span></div><div>" +
                  "<span class='legend-swatch' style='background-color: #d18a08;opacity: 0.6'></span>" +
                  "<span class='legend-range'>0.2 - 2</span></div><div>" +
                  "<span class='legend-swatch' style='background-color: #c60505;opacity: 0.6'></span>" +
                  "<span class='legend-range'>2+</span></div></div>"
parent = document.getElementById('legend');
parent.insertAdjacentHTML("beforeend", html_text)
};
