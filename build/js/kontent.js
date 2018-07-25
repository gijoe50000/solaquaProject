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
});









/****** Gallery images popup ******/ 



//popup div for clicked image
var popup= $('#popup'); 
popup.hide();
popup.click( 'slow', function(){   popup.hide()  });


var $imageClicked=$('#gallery img');
$imageClicked.click(galleryAddClickHandlers());


var tempImg

function galleryAddClickHandlers() {
    $('.galImg').click(function(e){
      
        popup.toggle();
        popup.empty();
        popup.append( '<img src='    + 
        this.getAttribute('src')     +     '>' );
        console.log("galleryAddClickHandlers "+this);
        tempImg=this;
          $('popup').css('width', "80vw");
        // $('tempImg').css('max-width', "100%");
        // center();
        console.log("temp image class= "+tempImg.getAttribute('class'));
        console.log("image Src= "+tempImg.getAttribute('src'));
        console.log("tmpimg= "+tempImg);
    });
}
 



function center(){
    $('tempImg').css("position","absolute");
    $('tempImg').css("top", Math.max(0, (($(window).height() - $(tempImg).outerHeight()) / 2) + 
      $(window).scrollTop()) + "px");

      $('tempImg').css("left", Math.max(0, (($(window).width() - $(tempImg).outerWidth()) / 2) + 
      $(window).scrollLeft()) + "px");
}

/* End of Gallery images popup*/ 

/***************contact form************************/

$('#labadd').hide();
$('#inpadd').hide();
// console.log("hideLaabel");




/***************************************/





/***************************************/






function onLoadProducts(){
    console.log("onLoadProducts");
    $('#contProductTabs').tabs();

}


function onLoadGallery() {
    console.log("onLoadGallery");
    galleryAddClickHandlers();
}

// Load More.. Button in gallery in index.html
var $galleryBut= $('#galleryButton');
    $galleryBut.click(function(){
        $('#galleryHome').load('gallery.html #gallery > *',null , onLoadGallery);
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
      openContactPage();
    });
























    
/*************************** products **********************/

var buyBut=$('.buyNow');
   
    buyBut.click(function(but){
        var prod=$(this).attr("id");   
        openContactPage(prod);
    });


    


function openContactPage (prod){
    $('main').load('contact.html main > *', null, function(){
        selectProdOption(prod);

        var submitted=$('#submitContact');
        
        submitted.click(function(){
            alert("Submit Success!");
        });
});
}




function selectProdOption(prod){
    prodList=$('#productList');
    options=$('#productList > option');
    prodList.val(prod);
}


























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








}); //end file
























