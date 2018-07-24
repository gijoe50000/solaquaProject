

/**** Map *****/

var latText=document.getElementById('latitude');
var longText=document.getElementById('longitude');
var lat;
var lng;
var latlng={};
var map;
var marker;


var navi=navigator.geolocation.getCurrentPosition(successCallback, errorCallback);


function successCallback(pos){
    lat=pos.coords.latitude;
    lng=pos.coords.longitude;

    latText.value=lat.toFixed(3);
    longText.value=lng.toFixed(3);
    latlng={Lat: lat, Lng: lng};
    console.log('No error..');
}



function errorCallback(){
    console.log('error!!!!!!');
}




function initMap(){
   
   
    latlng=new google.maps.LatLng(lat,  lng);
    map=new google.maps.Map(document.getElementById('mapDiv'), {zoom: 16, center: latlng});
    marker=new google.maps.Marker({position: latlng, map: map});
}




// function initMap(){}


// $(() => {
//     initMap = function() {
//       // your code like...
     
//         map=new google.maps.Map(document.getElementById('mapDiv'), {zoom: 16, center: latlng});
//         marker=new google.maps.Marker({position: latlng, map: map});

//       };
//       // and other stuff...
//     });
 
   
    































