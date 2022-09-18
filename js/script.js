/* ==============================================================
# fv__inner-slider
=========================================================== */
$('.fv__inner-slider ul').slick({
  dots: false,
  arrows: false,
  fade: true,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 3000,
});


/* ===============================================
# slick
=============================================== */
$('.gallery__inner-slider ul').slick({
  dots: true,
  arrows: true,
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    }
  ]
});


/* ===============================================
# headerをスクロールすると、背景色がつく
=============================================== */
jQuery(window).on('scroll', function () {
  if (300 < jQuery(this).scrollTop()) {
    jQuery('.header').addClass('change-color');
  } else {
    jQuery('.header').removeClass('change-color');
  }
});



/* ===============================================
# スムーススクロール header分ずらす
=============================================== */
$(function () {
  $('a[href^="#"]').on("click", function () {
      var speed = 600;
      var header_height = $("header").height();
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top - header_height;
      $('body,html').animate({ scrollTop: position }, speed, 'swing');
      return false;
  });
});