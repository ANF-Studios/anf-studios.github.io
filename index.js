let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;

// This part is responsible for the sticky navbar.
window.onscroll = function () {
  if (window.pageYOffset >= sticky) navbar.classList.add("sticky");
};
