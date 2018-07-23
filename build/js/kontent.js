$(function() {



var $imageClicked=$('#gallery img');
var popup= $('#popup'); //popup div for clicked image
var close=$('#close');
popup.hide();


close.click('slow',function(){ popup.hide()  });
popup.click( 'slow', function(){   popup.hide()  });



$imageClicked.click(galleryAddClickHandlers());


function galleryAddClickHandlers() {
    $('.galImg').click(function(e){
        popup.toggle();
        popup.empty();
        popup.append( '<img src='    + 
        this.getAttribute('src')     +     '>' );
        console.log("blah "+this);
        var tempImg=this;
        // console.log(tempImg);
    });
}
 


function onLoadProducts(){
    console.log("onLoadProducts");
    $('#contProducts').tabs();

}






function center(){
        tempImg.css("position","absolute");
      tempImg.css("top", Math.max(0, (($(window).height() - $(tempImg).outerHeight()) / 2) + 
      $(window).scrollTop()) + "px");

      tempImg.css("left", Math.max(0, (($(window).width() - $(tempImg).outerWidth()) / 2) + 
      $(window).scrollLeft()) + "px");
}




/***************************************/
function onLoadGallery() {
    console.log("onLoadGallery");
    galleryAddClickHandlers();
}

var $galleryBut= $('#galleryButton');
    $galleryBut.click(function(){
        $('#gallery').load('gallery2.html #gallery > *',null,onLoadGallery);
        console.log($galleryBut);
});



var $homeBut=$('#homeButton');
    $homeBut.click(function(){
    $('main').load('index.html main > *');

});


var $galBut= $('#galButton');
    $galBut.click(function(){
        $('main').load('gallery.html main > *');
        console.log($galBut);
});




var $prodBut=$('#prodButton');
    $prodBut.click(function(){
    $('main').load('products.html main > *', null, onLoadProducts);
   });




var $aboutBut=$('#aboutButton');
    $aboutBut.click(function(){
    $('main').load('aboutus.html main > *');
});




var $newsBut=$('#newsButton');
    $newsBut.click(function(){
$('main').load('news.html main > *');
});


var $contactBut=$('#contactButton');
    $contactBut.click(function(){
$('main').load('contact.html main > *');
});





}); //end file

//click button
//get content
//put content in now location






















