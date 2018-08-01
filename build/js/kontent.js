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
var $siteMap=$('#siteLink');
var $prod;
var $buyBut=$('.buyNow');
var $submitted=$('#submitContact');
var $submittedNews=$('#submitNewsletter');
var $popup= $('#popup'); 
var $imageClicked=$('#gallery img');
var $tempImg;

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
 


/*****************Products**********************/
//load products page into index.html
$prodLink.click(function(){
    $('main').load('products.html main > *', null, onLoadProducts);
    $('html, body').animate({ scrollTop: 0 }, 'slow');
    console.log("prodlink");
   });


   //load jqueryui tabs and set up click handler
function onLoadProducts(){
    $('#contProductTabs').tabs();
     $('html, body').animate({ scrollTop: 0 }, 'slow');
     console.log("load prod page");
     productClickHandler();
}



///automatically go to contact page when the order button is clicked on a product.
function productClickHandler(){
    $buyBut=$('.buyNow');
    $buyBut.click(function(){$prod=$(this).attr("id");  
        openContactPage($prod);
    });
  
}  


//click order button and go to contact page
$buyBut.click(function(){
     $prod=$(this).attr("id");   
     openContactPage($prod);
});



// And pass in the product name to the select list
function openContactPage ($prod){
    $('main').load('contact.html main > *',null , function(){
        selectProdOption($prod);
        });
    $('html, body').animate({ scrollTop: 0 }, 'slow');
    }



    // just for the select box on contact page
function selectProdOption($prod){
    prodList=$('#productList');
    options=$('#productList > option');
    prodList.val($prod);
    }





/**********other AJAX links***************/

//test here 
$aboutLink.click(function(){
    $('main').load('aboutus.html main > *');
    $('html, body').animate({ scrollTop: 0 }, 'slow');
});



$newsLink.click(function(){
    $('main').load('news.html #mainNews > *');
    $('html, body').animate({ scrollTop: 0 }, 'slow');
});




$contactLink.click(function(){
      openContactPage();
      $('html, body').animate({ scrollTop: 0 }, 'slow');
    });


    


    $siteMap.click(function(){
        $('main').load('site_map.html main > *');
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });




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
























