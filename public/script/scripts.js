var currentContent = "page-content";


document.getElementById("nav-bar__item-1").addEventListener("click", navigateToListen, true);
document.getElementById("nav-bar__item-2").addEventListener("click", navigateToConcert, true);
document.getElementById("nav-bar__item-3").addEventListener("click", navigateToBand, true);
document.getElementById("nav-bar__item-4").addEventListener("click", navigateToPictures, true);
document.getElementById("nav-bar__image").addEventListener("click", navigateToHome, true);
document.getElementById("nav-bar__item-hide").addEventListener("click", hideNavBar, true);

function navigateToListen() {
    document.getElementById(currentContent).classList.remove("enter-left");
    document.getElementById(currentContent).classList.remove ("page-content--normal");
    document.getElementById(currentContent).classList.add("exit-right");
    document.getElementById("listen-content").classList.add("enter-left");
    document.getElementById("listen-content").classList.remove("exit-right");
    currentContent = document.getElementById("listen-content").id;
}

function navigateToConcert() {
    console.log(currentContent);
    document.getElementById(currentContent).classList.remove("enter-left");
    document.getElementById(currentContent).classList.remove ("page-content--normal");
    document.getElementById(currentContent).classList.add("exit-right");
    document.getElementById("concert-content").classList.add("enter-left");
    document.getElementById("concert-content").classList.remove("exit-right");
    currentContent = document.getElementById("concert-content").id;
}

function navigateToBand() {
    document.getElementById(currentContent).classList.remove("enter-left");
    document.getElementById(currentContent).classList.remove ("page-content--normal");
    document.getElementById(currentContent).classList.add("exit-right");
    document.getElementById("band-content").classList.add("enter-left");
    document.getElementById("band-content").classList.remove("exit-right");
    currentContent = document.getElementById("band-content").id
}

function navigateToPictures() {
    document.getElementById(currentContent).classList.remove("enter-left");
    document.getElementById(currentContent).classList.remove ("page-content--normal");
    document.getElementById(currentContent).classList.add("exit-right");
    document.getElementById("pictures-content").classList.add("enter-left");
    document.getElementById("pictures-content").classList.remove("exit-right");
    currentContent = document.getElementById("pictures-content").id
}

function navigateToHome() {
    document.getElementById(currentContent).classList.remove("enter-left");
    document.getElementById(currentContent).classList.remove ("page-content--normal");
    document.getElementById(currentContent).classList.add("exit-right");
    document.getElementById("page-content").classList.add("enter-left")
    document.getElementById("pictures-content").classList.remove("exit-right");
    currentContent = document.getElementById("page-content").id
}

function hideNavBar () {
    document.getElementById("nav-bar").classList.add("nav-bar--hidden");
    document.getElementById("nav-bar").classList.remove ("nav-bar--initial");
    document.getElementById("nav-bar").classList.remove ("nav-bar--visible");
    document.getElementById("nav-bar__item-hide").classList.add("nav-bar__item--upside-down")

    document.getElementById("nav-bar__item-hide").removeEventListener("click", hideNavBar, true);
    document.getElementById("nav-bar__item-hide").addEventListener("click", showNavBar, true);

    document.getElementById(currentContent).classList.add("page-content--extended");
    document.getElementById(currentContent).classList.remove ("enter-left");
    document.getElementById(currentContent).classList.remove ("page-content--normal");
    

}
function showNavBar () {
    document.getElementById("nav-bar").classList.remove ("nav-bar--hidden");
    document.getElementById("nav-bar").classList.add("nav-bar--visible")
    document.getElementById("nav-bar__item-hide").classList.remove("nav-bar__item--upside-down")

    document.getElementById("nav-bar__item-hide").removeEventListener("click", showNavBar, true);
    document.getElementById("nav-bar__item-hide").addEventListener("click", hideNavBar, true);

    document.getElementById(currentContent).classList.add ("page-content--normal");
    document.getElementById(currentContent).classList.remove("page-content--extended");
    

}




/********************************************************************************************* */
function initializePage(){
    document.getElementById("nav-bar__item-1").addEventListener("click", navigate());
}








