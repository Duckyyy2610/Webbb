var className = "inverted";
var scrollTrigger = 60;

window.onscroll = function() {
  // We add pageYOffset for compatibility with IE.
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByTagName("header")[0].classList.add('change-backgroundcolor');
  } else {
    document.getElementsByTagName("header")[0].classList.remove('change-backgroundcolor');
  }
};