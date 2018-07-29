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

//popup div for clicked gallery image
var popup= $('#popup'); 
popup.hide();
popup.click( 'slow', function(){   popup.hide()  });
console.log("gal image clicked.............................");
var $imageClicked=$('#gallery img');
$imageClicked.click(galleryAddClickHandlers(popup));


var tempImg;

function galleryAddClickHandlers(popup) {
    $('.galImg').click(function(e){
        popup.toggle();
        popup.empty();
        tempImg=this.getAttribute('src');
        popup.append( '<img src='    +tempImg    +     '>' );
        console.log("gal image clicked and this: "+$(this).attr('src'));
      });
}
 
/* End of Gallery images popup*/ 












/***************contact form************************/

// $('#labadd').hide();
// $('#inpadd').hide();
// console.log("hideLaabel");




/***************************************/

/*******************AJAX Load pages into main********************/



// Load More.. Button in gallery in index.html
var $galleryBut= $('#galleryButton');
    $galleryBut.click(function(){
        $('#galleryHome').load('gallery.html #gallery > *',null , onLoadGallery);
});



function onLoadProducts(){
    console.log("onLoadProducts");
    $('#contProductTabs').tabs();
     $('html, body').animate({ scrollTop: 0 }, 'slow');
    productClickHandler();
   
}

function onLoadGallery() {
    console.log("onLoadGallery");
    $('html, body').animate({ scrollTop: 0 }, 'slow');
    galleryAddClickHandlers(popup);
    
}


var $homeLink=$('.homeLink');
$homeLink.click(function(){
$   ('main').load('index.html main > *');
$('html, body').animate({ scrollTop: 0 }, 'slow');
});

// load full gallery page using AJAX
var $galLink= $('.galLink');
$galLink.click(function(){
    $('main').load('gallery.html #mainGallery > *', null, onLoadGallery);
});


var $prodLink=$('.prodLink');
$prodLink.click(function(){
    $('main').load('products.html main > *', null, onLoadProducts);
   });

var $aboutLink=$('.aboutLink');
$aboutLink.click(function(){
    $('main').load('aboutus.html main > *');
    $('html, body').animate({ scrollTop: 0 }, 'slow');
});

var $newsLink=$('.newsLink');
$newsLink.click(function(){
    $('main').load('news.html main > *', null, loadNewsScript);
    $('html, body').animate({ scrollTop: 0 }, 'slow');
});

function loadNewsScript(){
  $.getScript("js/RSSScript.js",null);
  $.getScript("//feed.surfing-waves.com/js/rss-feed.js",null);
}

var $contactLink=$('.contactLink');
$contactLink.click(function(){
      openContactPage();
      $('html, body').animate({ scrollTop: 0 }, 'slow');
    });






    
/*************************** products **********************/

var buyBut=$('.buyNow');
    
buyBut.click(function(but){
        var prod=$(this).attr("id");   
        openContactPage(prod);
    });


//whewn buy button is clicked, pass the product to buy (contact) page
function productClickHandler(){
        buyBut.click(function(){
        var prod=$(this).attr("id");   
        openContactPage(prod);
    });

}




function openContactPage (prod){
    $('main').load('contact.html main > *', null, function(){
        selectProdOption(prod);
        var submitted=$('#submitContact');
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
    console.log("submit clicked from not cb");
    return true;
});


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




var submittedNews=$('#submitNewsletter');
submittedNews.click(function(){
    console.log("submit clicked");
    return true;
});

submittedNews.click(function(e){
    e.preventDefault();
    var news = $("#newsletter");
    var data = news.serialize();
    $.post( news.attr("action") , data , function(result){
        $("#sendResult").html(result);
    });
    console.log("Submit Success from callback!");
    return false;
});


}); //end file
























