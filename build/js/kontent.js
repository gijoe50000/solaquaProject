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
var result="Sent";

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
        // $popup.css('max-width','100%');
        $popup.append( '<img src=' +$tempImg +'>');
        $('#popup img').css('max-width','100%').css("border", "3px solid black").css("margin", "0 auto");
        // $tempImg.css("border", "3px solid black");
        $popup.click( 'slow', function(){$popup.hide()});
    
    });
}
 

$prodLink.click(function(){
    $('main').load('products.html main > *', null, onLoadProducts);
    $('html, body').animate({ scrollTop: 0 }, 'slow');
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
    $('main').load('news.html #mainNews > *', null, onLoadNewspage);
    $('html, body').animate({ scrollTop: 0 }, 'slow');
});




function onLoadNewspage (){
    
    // var addscript1=$.getScript("js/RSSScript.js",null);
    // var addscript2=$.getScript("js/rss-feed.js",null);
    // $('main').load('news.html #mainNews > *',null);
        // $('main').load('news.html #mainNews > *');
    // $('#newsDiv').get(addscript1);
    // $('#newsDiv').load(addscript2);
    // $('#newsDiv').load(addscript1).load(addscript2);
    // $('#newsDiv').load(addscript1).load(addscript2);
    //   $('#newsDiv').get($.getScript("js/RSSScript.js",null)).get($.getScript("js/rss-feed.js",null));
    // $('#newsDiv').load(addscript1).load(addscript2);


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
    console.log("submit clicked tru");
    return true;
});


$submitted.click(function(e){
    console.log("submit clicked fal");
    e.preventDefault();
    var form = $("#formContact");
    var data = form.serialize();
    $.post( form.attr("action") , data , function(result){
        $("#sendResult").attr('value',"sent");
    });
    return false;
});

// Newsletter
$submittedNews.click(function(){
    console.log("submit clicked tru");
    return true;
});


$submittedNews.click(function(e){
    console.log("submit clicked fal");
    e.preventDefault();
    var news = $("#newsletter");
    var data = news.serialize();
    $.post( news.attr("action") , data , function(result){
        $("#submitNewsletter").attr('value',"sent");
    });
    return false;
});


}); //end file
























