/**** Map *****/


var map;
  
function initMap() {
    var solaquaLoc={lat: 51.904465, lng: -8.358551}; 
        
    map = new google.maps.Map(document.getElementById('mapDiv'), { center: solaquaLoc, zoom: 13
    });
    marker=new google.maps.Marker({position: solaquaLoc, icon: "./images/logo/marker.png", map: map});
}