$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        600,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });

  $("#menu").onePageNav({
    currentClass: "active",
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: "",
    easing: "swing",
  });

  $(function () {
    var navbtn = $(".navbar-toggler");

    $(navbtn).click(function () {
      $(navbtn).toggleClass("active");
    });
  });

  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 30,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    navigation: true,
    navText: [
      '<i class="fas fa-chevron-circle-left"></i>',
      '<i class="fas fa-chevron-circle-right"></i>',
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      576: {
        items: 1,
        nav: true,
      },
      768: {
        items: 2,
        nav: true,
      },
      1000: {
        items: 4,
        nav: true,
      },
    },
  });

  AOS.init({
    duration: 800,
    anchorPlacement: "top-top",
    once: false,
  });
  window.addEventListener("load", AOS.refresh);
});
