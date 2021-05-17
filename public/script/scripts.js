/*Initialisation des variables d'affichage: page actuelle et largeur actuelle*/
var currentContent = "home-content";
var currentWindowWidth = "--normal";

/*Creation des EventListeners pour les liens du menu principal*/
document.getElementById("nav-bar__image").addEventListener("click", () => {
    navigateToPage("home");
})


document.getElementById("nav-bar__item-1").addEventListener("click", () => {
    navigateToPage("listen");
})

document.getElementById("nav-bar__item-2").addEventListener("click", () => {
    navigateToPage("concert");
})

document.getElementById("nav-bar__item-3").addEventListener("click", () => {
    navigateToPage("band");
})

document.getElementById("nav-bar__item-4").addEventListener("click", () => {
    navigateToPage("pictures");
})

/*Creation d'un eventListener pour gérer l'affichage ou non de la navbar sur mobile*/

document.getElementById("nav-bar__item-hide").addEventListener("click", toggleNavBar, true);

/*Fonction qui gère le 'désaffichage" de la page en cours et l'affichage de la page demandée*/
function navigateToPage($page) {
    document.getElementById(currentContent).classList.remove("enter-left");
    document.getElementById(currentContent).classList.remove ("page-content--normal");
    document.getElementById(currentContent).classList.remove ("page-content--extended");
    document.getElementById(currentContent).classList.add("exit-right");
    document.getElementById($page+"-content").classList.add("enter-left");
    document.getElementById($page+"-content").classList.remove("exit-right");
    currentContent = document.getElementById($page+"-content").id;
}

/*Fonction qui gère minimize/expand le manu principal*/

function toggleNavBar () {
    switch(currentWindowWidth) {
    case "--normal":
        document.getElementById("nav-bar").classList.add("nav-bar--hidden");
        document.getElementById("nav-bar").classList.remove ("nav-bar--initial");
        document.getElementById("nav-bar").classList.remove ("nav-bar--visible");
        document.getElementById("nav-bar__item-hide").classList.add("nav-bar__item--upside-down")
        document.getElementById(currentContent).classList.add("page-content--extended");
        document.getElementById(currentContent).classList.remove ("enter-left");
        document.getElementById(currentContent).classList.remove ("page-content--normal");
        currentWindowWidth = "--extended";
        break;
    case"--extended":
        document.getElementById("nav-bar").classList.remove ("nav-bar--hidden");
        document.getElementById("nav-bar").classList.add("nav-bar--visible")
        document.getElementById("nav-bar__item-hide").classList.remove("nav-bar__item--upside-down")
        document.getElementById(currentContent).classList.add ("page-content--normal");
        document.getElementById(currentContent).classList.remove("page-content--extended");
        currentWindowWidth = "--normal";
        break;
    }
}










