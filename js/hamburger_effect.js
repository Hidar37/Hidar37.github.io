// Hide all the page section
function hideAllSection() {
  document.getElementById("move-top").style.display = "none";
  document.getElementById("about-section").style.display = "none";
  document.getElementById("soft-skill").style.display = "none";
  document.getElementById("contact-section").style.display = "none";
  document.getElementById("footer").style.display = "none";
}
// Show all the Page Section
function showAllSection() {
  document.getElementById("move-top").style.display = "block";
  document.getElementById("about-section").style.display = "block";
  document.getElementById("soft-skill").style.display = "block";
  document.getElementById("contact-section").style.display = "block";
  document.getElementById("footer").style.display = "block";
}

// when click on 3bar icon (Hide all the page excpet Humbarger Menu)
var showHideMenu = document.getElementById("humbarger-mobile");
showHideMenu.addEventListener("click", function () {
  document.getElementById("mobile-nav").style.transform = "translateX(0%)";
  // hideAllSection();
});

// when click on X icon (Hide Humbarger Menu and show all the Page)
document.getElementById("humbarger").addEventListener("click", function () {
  document.getElementById("mobile-nav").style.transition = "all 1s";
  document.getElementById("mobile-nav").style.transform = "translateX(100%)";
  // showAllSection();
});