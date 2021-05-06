var currentContent = "page-content";


document.getElementById("nav-bar__item-1").addEventListener("click", navigateToListen, true);
document.getElementById("nav-bar__item-2").addEventListener("click", navigateToConcert, true);
document.getElementById("nav-bar__item-3").addEventListener("click", navigateToBand, true);
document.getElementById("nav-bar__item-4").addEventListener("click", navigateToPictures, true);
document.getElementById("nav-bar__image").addEventListener("click", navigateToHome, true);


function navigateToListen() {
    document.getElementById(currentContent).style.display = "none";
    document.getElementById("listen-content").style.display = "flex"
    currentContent = document.getElementById("listen-content").id
}

function navigateToConcert() {
    document.getElementById(currentContent).style.display = "none";
    document.getElementById("concert-content").style.display = "flex"
    currentContent = document.getElementById("concert-content").id
}

function navigateToBand() {
    document.getElementById(currentContent).style.display = "none";
    document.getElementById("band-content").style.display = "flex"
    currentContent = document.getElementById("band-content").id
}

function navigateToPictures() {
    document.getElementById(currentContent).style.display = "none";
    document.getElementById("pictures-content").style.display = "flex"
    currentContent = document.getElementById("pictures-content").id
}

function navigateToHome() {
    document.getElementById(currentContent).style.display = "none";
    document.getElementById("page-content").style.display = "flex"
    currentContent = document.getElementById("page-content").id
}




/********************************************************************************************* */
function initializePage(){
    document.getElementById("nav-bar__item-1").addEventListener("click", navigate());
}








