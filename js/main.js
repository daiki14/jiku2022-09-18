

/* ===============================================
# 画像切り替え[picturefill.js必須]
=============================================== */
/*document.createElement( "picture" );*/



/* ===============================================
# HamburgerMenu
=============================================== */
$(function(){
    $('.hamburger').click(function(){
        $('.header').toggleClass("is-open");
        $('.header').not($('.header')).removeClass("is-open");
        $(".header__nav").fadetoggle(500);
    });
});



/* ===============================================
# TabMenu
=============================================== */
//$(function(){
//  $('.tab').on("click",function(){
//    $('.is-active').removeClass('is-active');
//    $(this).addClass('is-active');
//	  $('.is-show').removeClass('is-show');
    // クリックしたタブからインデックス番号を取得
//	  const index = $(this).index();
    // クリックしたタブと同じインデックス番号をもつコンテンツを表示
//	  $('.panel').eq(index).addClass('is-show');
//  });



/* ===============================================
# AccordionMenu
=============================================== */
// $(function () {
//     //クリックで動く
//     $('.category h3').click(function () {
//         $('.category').toggleClass('active');
//         $(this).next('.category ul').slideToggle();
//     });
//     //ホバーで動く
//     $('.nav-open').hover(function () {
//         $('.category').toggleClass('active');
//         $(this).next('.category ul').slideToggle();
//     });
// });



/* ===============================================
# Resize
=============================================== */
// $(window).resize(function () {     // Windowサイズが変更された時
//     var win = $(window).width();
//     var bp = 1280; // ブレークポイント（px）
//     if (win > bp) {
//       if ($(".hamburger").hasClass("is-open")) {  // ナビが開いていたら
//         $(".hamburger").removeClass("is-open");   // ハンバーガーアイコンを元に戻す
//         $(".header__nav").slideUp();  // ナビを閉じる（非表示にする）
//     }
//     }
// });




/* ===============================================
# ふわっと表示
=============================================== */
// $('.scroll-trigger').each(function(){
//     var POS = $(this).offset().top;  //fade-inがついている要素の位置
//     var scroll = $(window).scrollTop();  //スクロール位置
//     var windowHeight = $(window).height();  //ウィンドウの高さ

//     if (scroll > POS - windowHeight + windowHeight/6){
//     //$(this).css("opacity","1" );
//     $(this).addClass('scroll-trigger-on');
//     } else {
//     //$(this).css("opacity","0" );
//     $(this).removeClass('scroll-trigger-on');
//     }
// });




/* ===============================================
# ReturnTop
=============================================== */
// $(function(){
// var pagetop = $('.return_top');
// $(window).on("scroll",function(){
//     if ($(this).scrollTop() > 300) {
//     pagetop.fadeIn();
//     } else {
//     pagetop.fadeOut();
//     }
// });
// pagetop.click(function () {
//     $('body, html').animate({ scrollTop: 0 }, 500);
//     return false;
// });
// });




/* ===============================================
# Vegas_FVslide レスポンシブ
=============================================== */
// (function($){
// 	'use strict'; // Required code
	
//     //Resize
// 	var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
// 	var responsiveImage;
// 	if ( windowwidth > 768 ) {
// 		responsiveImage = [ //PC用の画像
// 			{ src: '/img/fv_pc.jpg'},
// 			{ src: '/img/fv_pc02.jpg'},
// 			{ src: '/img/fv_pc03.jpg'}
// 		];
// 	} else {
// 		responsiveImage = [ //タブレットサイズ（768px）以下用の画像
//         { src: '/img/fv_sp.jpg'},
//         { src: '/img/fv_sp02.jpg'},
//         { src: '/img/fv_sp03.jpg'}
// 		];
// 	}
	
//     //FVslide
// 	$('.fv').vegas({
// 		slides: responsiveImage,
// 		timer: false
// 	});
// }(jQuery));