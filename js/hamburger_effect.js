// when click on 3bar icon (Hide all the page excpet Humbarger Menu)
const showHideMenu = document.getElementById('humbarger-mobile');
showHideMenu.addEventListener('click', () => {
  document.getElementById('mobile-nav').style.transform = 'translateX(0%)';
});

// when click on X icon (Hide Humbarger Menu and show all the Page)
document.getElementById('humbarger').addEventListener('click', () => {
  document.getElementById('mobile-nav').style.transition = 'all 1s';
  document.getElementById('mobile-nav').style.transform = 'translateX(100%)';
});