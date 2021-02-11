let navShow = document.getElementsByClassName("nav-show")

let hideNav = document.getElementsByClassName("nav-hide")

function showNav() {
  navShow[0].style.display = "none";
  hideNav[0].style.display = "block";
}

function navHide() {
  navShow[0].style.display = "flex";
  hideNav[0].style.display = "none";
}