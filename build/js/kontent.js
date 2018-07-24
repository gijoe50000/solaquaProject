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
        $('main').load('gallery.html main > *', null, onLoadGallery);
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
$('main').load('news.html main > *');
});


var $contactBut=$('.contactButton');
    $contactBut.click(function(){
$('main').load('contact.html main > *');
});





}); //end file
























