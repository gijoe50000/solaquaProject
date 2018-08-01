var accept = document.getElementById('accept');
var decline = document.getElementById('decline');
var cookieContainer = document.getElementById('cookieBanner');
var cookie = navigator.cookieEnabled;
var cookieId = "992";
var name = "Bob";


//event listeners
accept.addEventListener('click', setCookie);
decline.addEventListener('click', removeBanner);

if (!checkForCookie(cookieId)) {
        displayBanner();
    }else{
        removeBanner();}

//if cookie position is > 0 return the position. basically true of false
function checkForCookie(cookieId) {
    var nvp = document.cookie;
    var pos = nvp.search(cookieId);
    if (pos>=0) {return pos;}
    } 

function setCookie() {
    var expiry = "Thu Jan 01 2070 01:00:00 GMT+0100 (Greenwich Mean Time)";
    document.cookie = name + "=" + cookieId + "; expires=" + expiry + ";path=/";
    removeBanner();
    }

function displayBanner() {
    cookieContainer.style.display = "flex";
    }

function removeBanner() {
    cookieContainer.style.display = "none";
    }
