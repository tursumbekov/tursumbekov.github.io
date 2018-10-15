$(function() {

  $('.slider').slick({
    infinite: true,
    dots: true,
    adaptiveHeight: true,
    arrows: false,
  });

  function myFunction(x) {
    if (x.matches) { // If media query matches

    } else {
      skrollr.init();
    }
  }

  var x = window.matchMedia("(max-width: 992px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes



});
