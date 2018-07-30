$(function() {

var $navList=$('#navList');
var $showMenu=$('#hmbMenu');
var $galleryBut= $('#galleryButton');
var $homeLink=$('.homeLink');
var $galLink= $('.galLink');
var $prodLink=$('.prodLink');
var $aboutLink=$('.aboutLink');
var $newsLink=$('.newsLink');
var $contactLink=$('.contactLink');
var $buyBut=$('.buyNow');
var $submitted=$('#submitContact');
var $submittedNews=$('#submitNewsletter');
var $popup= $('#popup'); 
var $imageClicked=$('#gallery img');
var $tempImg;
$('html, body').animate({ scrollTop: 0 }, 'slow');


$navList.hide();

$navList.click('slow', function(){
    $navList.hide();
});

$showMenu.click('slow', function(){
    $('#navList').toggle();
});





/****** Gallery images $popup ******/ 

//$popup div for clicked gallery image
$popup.hide();
$popup.click( 'slow', function(){$popup.hide()});
$imageClicked.click(galleryAddClickHandlers());


/* End of Gallery images $popup*/ 


// $popup.style.border="3px solid black";









/***************contact form************************/

// $('#labadd').hide();
// $('#inpadd').hide();
// console.log("hideLaabel");




/***************************************/

/*******************AJAX Load pages into main********************/


//Load home main content

$homeLink.click(function(){
$   ('main').load('index.html main > *');
});


// Load More images into gallery in index.html via See More button.
$galleryBut.click(function(){
    $('#galleryHome').load('gallery.html #gallery > *',null , onLoadGallery);
});


// load full gallery page using AJAX
$galLink.click(function(){
    $('main').load('gallery.html #mainGallery > *', null, onLoadGallery);
});

function onLoadGallery() {
 $('html, body').animate({ scrollTop: 0 }, 'slow');
    galleryAddClickHandlers();
}


function galleryAddClickHandlers() {
    $('.galImg').click(function(e){
        $imageClicked=$('#gallery img');
        $popup= $('#popup'); 
        $popup.toggle();
        $popup.empty();
        $imageClicked=$('#gallery img');
        $tempImg=$(this).attr('src');
        $popup.append( '<img src=' +$tempImg +'>' );
        $popup.css("border", "3px solid black");
        $popup.click( 'slow', function(){$popup.hide()});
    });
}
 









$prodLink.click(function(){
    $('main').load('products.html main > *', null, onLoadProducts);
   });

function onLoadProducts(){
    $('#contProductTabs').tabs();
     $('html, body').animate({ scrollTop: 0 }, 'slow');
    productClickHandler();
}

$aboutLink.click(function(){
    $('main').load('aboutus.html main > *');
    $('html, body').animate({ scrollTop: 0 }, 'slow');
});


$newsLink.click(function(){
    $('main').load('news.html main > *', null, loadNewsScript);
    $('html, body').animate({ scrollTop: 0 }, 'slow');
});

function loadNewsScript(){
  $.getScript("js/RSSScript.js",null);
  $.getScript("//feed.surfing-waves.com/js/rss-feed.js",null);
}


$contactLink.click(function(){
      openContactPage();
      $('html, body').animate({ scrollTop: 0 }, 'slow');
    });






    
/*************************** products **********************/


    
$buyBut.click(function(but){
        var prod=$(this).attr("id");   
        openContactPage(prod);
    });


//whewn buy button is clicked, pass the product to buy (contact) page
function productClickHandler(){
        $buyBut.click(function(){
        var prod=$(this).attr("id");   
        openContactPage(prod);
    });

}




function openContactPage (prod){
    $('main').load('contact.html main > *', null, function(){
        selectProdOption(prod);
        var $submitted=$('#submitContact');
});
}



function selectProdOption(prod){
    prodList=$('#productList');
    options=$('#productList > option');
    prodList.val(prod);
}




/**** Form *****/

$submitted.click(function(){
    console.log("submit clicked from not cb");
    return true;
});


$submitted.click(function(e){
    e.preventDefault();
    var form = $("#formContact");
    var data = form.serialize();
    $.post( form.attr("action") , data , function(result){
        $("#sendResult").html(result);
    });
    console.log("Submit Success from callback!");
    return false;
});



$submittedNews.click(function(){
    console.log("submit clicked");
    return true;
});

$submittedNews.click(function(e){
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
























