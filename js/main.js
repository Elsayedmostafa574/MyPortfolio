var typed = new Typed(".about", {
  strings: [
    "I'm Front-End Developer, I can Make Attractive Designs and Professional Websites.",
  ],
  typeSpeed: 50,
});

$(document).ready(function () {
  $(window).scroll(function () {
    let x = $(window).scrollTop();
    if (x > 600) {
      $(".navbar").css({
        background: "#53A0E8",
      });
    } else {
      $(".navbar").css({
        background: "transparent",
      });
    }
  });
});
