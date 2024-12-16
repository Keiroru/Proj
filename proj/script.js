var nav = document.getElementById("nav");
var navLinks = document.getElementById("navLinks");

function Navclick() {
    if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
        nav.style.height = "40px";
    } else {
        navLinks.style.display = "flex";
        nav.style.height = "200px";
    }
}

function myFunction(x) {
    if (x.matches) {
        nav.style.height = "40px";  
    }
    else{
        nav.style.height = "200px";
    }
}
  
var x = window.matchMedia("(min-width: 451px)")
  
myFunction(x);
  
x.addEventListener("change", function() {
    myFunction(x);
});