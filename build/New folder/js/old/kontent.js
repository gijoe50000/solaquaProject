$(function() {



var navList=$('#navList');
var showMenu=$('#hmbMenu');
navList.hide();

navList.click('slow', function(){
    navList.hide();
});

showMenu.click('slow', function(){
    $('#navList').toggle();
});





/****** Gallery images popup ******/ 



//popup div for clicked image

var popup= $('#popup'); 
popup.hide();
popup.click( 'slow', function(){   popup.hide()  });
console.log("gal image clicked.............................");
var $imageClicked=$('#gallery img');
$imageClicked.click(galleryAddClickHandlers(popup));


var tempImg;

function galleryAddClickHandlers(popup) {
    $('.galImg').click(function(e){
      console.log("gal image clicked");
        popup.toggle();
        popup.empty();
        tempImg=this.getAttribute('src');
        popup.append( '<img src='    +tempImg    +     '>' );
        console.log("gal image clicked and this: "+$(this).attr('src'));
      });
}
 




/* End of Gallery images popup*/ 

/***************contact form************************/

$('#labadd').hide();
$('#inpadd').hide();
// console.log("hideLaabel");




/***************************************/





/*******************AJAX Load pages into main********************/



// Load More.. Button in gallery in index.html
var $galleryBut= $('#galleryButton');
    $galleryBut.click(function(){
        $('#galleryHome').load('gallery.html #gallery > *',null , onLoadGallery);
        console.log($galleryBut);
});



function onLoadProducts(){
    console.log("onLoadProducts");
    $('#contProductTabs').tabs();
}


function onLoadGallery() {
    console.log("onLoadGallery");
    galleryAddClickHandlers(popup);
}




var $homeBut=$('.homeButton');
    $homeBut.click(function(){
    $('main').load('index.html main > *');

});

// load full gallery page using AJAX
var $galBut= $('.galButton');
    $galBut.click(function(){
        $('main').load('gallery.html #mainGallery > *', null, onLoadGallery);
        console.log('Gal page loaded');
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
    $('main').load('news.html main > *', null, loadNewsScript
    );
});


function loadNewsScript(){
  $.getScript("js/RSSScript.js",null);
  $.getScript("//feed.surfing-waves.com/js/rss-feed.js",null);

}




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
        
        submitted.click(function(e){
            e.preventDefault();
            var form = $("#formContact");
            var data = form.serialize();
            $.post( form.attr("action") , data , function(result){
                $("#sendResult").html(result);
            });
            console.log("Submit Success from callback!");
            return false;
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
    // alert("Submit Success!");
    console.log("submit clicked from not cb");
    return true;
});



var submittednews=$('#submitNewsletter');
submittednews.click(function(){
    // alert("Submit Success!");
    console.log("submit clicked");
    return true;
});








}); //end file
























