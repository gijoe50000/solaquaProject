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





/*******************AJAX********************/



// "See More".. Button in gallery in index.html
var $galleryBut= $('#galleryButton');
    $galleryBut.click(function(){
        $('#galleryHome').load('gallery.html #gallery > *',null , onLoadGallery);
        console.log($galleryBut);
});

function onLoadGallery() {
    console.log("onLoadGallery");
    galleryAddClickHandlers(popup);
}



function onLoadProducts(){
    console.log("onLoadProducts");
    $('#contProductTabs').tabs();
    productClickHandler();
    console.log("onLoadProducts after handler");
}



/********** load pages from menu using AJAX ********/

var $homeBut=$('.homeButton');
    $homeBut.click(function(){
    $('main').load('index.html main > *');

});

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
  
  /********** END OF load pages from menu using AJAX ********/








    
/*************************** products **********************/


// When Order Now button is clicked, open contact and 
// set select option to the id of the product
var buyBut=$('.buyNow');
buyBut.click(function(but){
    console.log("buy button clicked");
    var prod=$(this).attr("id");   
    openContactPage(prod);
});




function productClickHandler(){
    buyBut=$('.buyNow');
    buyBut.click(function(){
        var prod=$(this).attr("id");  
        console.log("buy button clicked in func"); 
        openContactPage(prod);
    });

}




function openContactPage (prod){
    $('main').load('contact.html main > *', null, function(){
        $('html, body').animate({ scrollTop: 0 }, 0);
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
    // alert("Submit Success!");
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



var submittednews=$('#submitNewsletter');
submittednews.click(function(){
    // alert("Submit Success!");
    console.log("submit clicked");
    return true;
});









}); //end file
























