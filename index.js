let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;

console.log(navbar == null || undefined);

// This part is responsible for the sticky navbar.
window.onscroll = function () {
  if (window.pageYOffset >= sticky) navbar.classList.add("sticky");
  else navbar.classList.remove("sticky");
};
