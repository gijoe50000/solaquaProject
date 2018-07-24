$(function() {



var navList=$('#navList');
var showMenu=$('#hmbMenu');
navList.hide();

navList.click('slow', function(){
    navList.hide();
    console.log("blah hide "+this);

});


showMenu.click('slow', function(){
    $('#navList').toggle();
    console.log("blah show "+navList.attr('id'));

});









/****** Gallery images popup ******/ 



//popup div for clicked image
var popup= $('#popup'); 
popup.hide();
popup.click( 'slow', function(){   popup.hide()  });


var $imageClicked=$('#gallery img');
$imageClicked.click(galleryAddClickHandlers());




function galleryAddClickHandlers() {
    $('.galImg').click(function(e){
        popup.toggle();
        popup.empty();
        popup.append( '<img src='    + 
        this.getAttribute('src')     +     '>' );
        console.log("galleryAddClickHandlers "+this);
        var tempImg=this;
        console.log("temp image= "+tempImg.getAttribute('class'))        ;
        console.log("image Src= "+tempImg.getAttribute('src'))        ;
    });
}
 



function center(){
        tempImg.css("position","absolute");
      tempImg.css("top", Math.max(0, (($(window).height() - $(tempImg).outerHeight()) / 2) + 
      $(window).scrollTop()) + "px");

      tempImg.css("left", Math.max(0, (($(window).width() - $(tempImg).outerWidth()) / 2) + 
      $(window).scrollLeft()) + "px");
}

/* End of Gallery images popup*/ 

/***************************************/















function onLoadProducts(){
    console.log("onLoadProducts");
    $('#contProducts').tabs();

}


function onLoadGallery() {
    console.log("onLoadGallery");
    galleryAddClickHandlers();
}

// Load More.. Button in gallery in index.html
var $galleryBut= $('#galleryButton');
    $galleryBut.click(function(){
        $('#gallery').load('gallery.html #gallery > *',null , onLoadGallery);
        console.log($galleryBut);
});



var $homeBut=$('.homeButton');
    $homeBut.click(function(){
    $('main').load('index.html main > *');

});

// load full gallery page using AJAX
var $galBut= $('.galButton');
    $galBut.click(function(){
        $('main').load('gallery.html #gallery > *', null, onLoadGallery);
        console.log($galBut);
});




var $prodBut=$('.prodButton');
    $prodBut.click(function(){
    $('main').load('products.html main > *', null, onLoadProducts);
   });




var $aboutBut=$('.aboutButton');
    $aboutBut.click(function(){
    $('main').load('aboutus.html main > *');
});




var $newsBut=$('.newsButton');
    
$newsBut.click(function(){
    console.log("news button clicked");
    $('main').load('news.html main > *', null, function(){
        console.log("news button clicked");

    });

});


var $contactBut=$('.contactButton');
    
$contactBut.click(function(){
        $('main').load('contact.html main > *', null, function(){
                    console.log("Contact Page, Finished loading");
                    var submitted=$('#submitContact');
                    submitted.click(function(){
                        alert("Submit Success!");
                        console.log("submit clicked");
                    });
        });

    });






/**** Form *****/
var submitted=$('#submitContact');
submitted.click(function(){
    alert("Submit Success!");
    console.log("submit clicked");
});



var submittednews=$('#submitNewsletter');
submittednews.click(function(){
    alert("Submit Success!");
    console.log("submit clicked");
});



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








}); //end file
























