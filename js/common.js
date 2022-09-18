
    /*■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

    コンテンツ全体の読み込み後の処理

    ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■*/
    $(window).on("load",function(){
    
        /*-----------------------------------------------------
            バーガーメニュー
        -----------------------------------------------------*/
        
        // $('#nav_toggle').click(function(){
        //     $("header").toggleClass('open');
        //     $("body").toggleClass('open_nv');
        //     /*$("nav").slideToggle(200);*/
        //     $("nav").fadeToggle(500);
        // });
        
        
        /*-----------------------------------------------------
        スクロールトリガー
        -----------------------------------------------------*/
        // $('.scroll-trigger').each(function(){
        //     var POS = $(this).offset().top;  //fade-inがついている要素の位置
        //     var scroll = $(window).scrollTop();  //スクロール一
        //     var windowHeight = $(window).height();  //ウィンドウの高さ
        
        //     if (scroll > POS - windowHeight + windowHeight/20){
        //     $(this).addClass('scroll-trigger-on');
        //     }
        // });
        
        
        
        /*-----------------------------------------------------
        画像切り替え起動！ ※picturefill.js が必要
        ------------------------------------------------------*/
        /*document.createElement( "picture" );*/
        
        
        
        /*-----------------------------------------------------
        スマートフォンのみ電話をかけられるようにする
        ------------------------------------------------------*/
        // if(navigator.userAgent.match(/(iPhone|Android)/)){
        // $('.tel').each(function() {
        // //.tel内のHTMLを取得
        //     var str = $(this).html();
        // //テキストを取得して電話番号リンクを追加
        //     $(this).html($('<a>').attr('href', 'tel:' + $(this).text().replace(/-/g, '')).append(str + '</a>'));
        // });
        // }
        
        
        /*-----------------------------------------------------
        Loading画面
        ------------------------------------------------------*/
        
        // const ua = navigator.userAgent;
        // if(ua.indexOf('Trident') !== -1) {
            
        // } else {
        
        // window.onload = function() {
        // const spinner = document.getElementById('loading');
        // spinner.classList.add('loaded');
        
        // $('.box-wrapper').each(function(index, element) {
        //     setTimeout(function(){
        //         element.classList.remove('loading');
        //     }, index * 500);
        // });
        
        // }
        
        // }
        
        
        
        
        // });
        
        
        
        /*$('.open_nv nav a[href]').on('click', function() {
        $('.nav_toggle').trigger('click');
        });*/
        
        /*$('.open_nv nav a[href]').on('click', function() {
        $('#nav').toggleClass('active');
        $(".menu").toggleClass('active');
        alert("click!");
        })*/
        
        
        
        /*-----------------------------------------------------
            VH余白対策
        -----------------------------------------------------*/
        /*$(window).load(function(){
            // 最初に、ビューポートの高さを取得し、0.01を掛けて1%の値を算出して、vh単位の値を取得
            let vh = window.innerHeight * 0.01;
            // カスタム変数--vhの値をドキュメントのルートに設定
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        });*/
        
        
        
        /*-----------------------------------------------------
            VH余白対策 リサイズ時
        -----------------------------------------------------*/
        // resizeイベントの取得
        /*window.addEventListener('resize', () => {
        // あとは上記と同じスクリプトを実行
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        });*/
            
        
        /*-----------------------------------------------------
            TOPスクロール ※ボタンフェード
        -----------------------------------------------------*/
        // $(function(){
        // var pagetop = $('#anchor');
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
            
        /*-----------------------------------------------------
        TOPスクロール ※ボタンフェードなし
        -----------------------------------------------------*/
        /*var pagetop_fix = $('#anchor');
        pagetop_fix.click(function () {
        $('body, html').animate({ scrollTop: 0 }, 500);
        return false;
        });*/
            
            
        /*-----------------------------------------------------
            フッターあたりで消える
        -----------------------------------------------------*/
            /*
        $(window).onscroll = function () {
        var check = window.pageYOffset ;       //現在のスクロール地点 
        var docHeight = $(document).height();   //ドキュメントの高さ
        var dispHeight = $(window).height();    //表示領域の高さ
        
        if(check > docHeight-dispHeight-1800){   //判別式  500はフッターからの距離です（ここはサイトのフッターに合わせて変更しましょう）
            $('.fix_top').fadeOut(500);	//1000 はフェードアウトの速度です。調整可
        }else{
            $('.fix_top').fadeIn(500);	//1000 はフェードインの速度です。調整可
        }
        
        };*/
        
        
        /*■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
        
        スクロール時の処理
        
        ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■*/
        // $(window).on("scroll",function(){
        // /*-----------------------------------------------------
        // 指定要素をふわっと表示するライブラリ（フェードのみ）
        // -----------------------------------------------------*/
        // $('.scroll-trigger').each(function(){
        //     var POS = $(this).offset().top;  //fade-inがついている要素の位置
        //     var scroll = $(window).scrollTop();  //スクロール位置
        //     var windowHeight = $(window).height();  //ウィンドウの高さ
            
        //     if (scroll > POS - windowHeight + windowHeight/6){
        //     //$(this).css("opacity","1" );
        //     $(this).addClass('scroll-trigger-on');
        //     } else {
        //     //$(this).css("opacity","0" );
        //             $(this).removeClass('scroll-trigger-on');
        //     }
        // });
            
            
        /*-----------------------------------------------------
        指定要素をふわっと表示するライブラリ（フェード+縦移動）
        -----------------------------------------------------*/
        /*  $('.fade-in-move').each(function(){
            var ptop = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > ptop - windowHeight + 100){
            $(this).addClass('scroll-in-move');
            }
        });
            var scroll = $(window).scrollTop();
            //console.log(scroll);//削除してください。
            if (scroll >= 1){
                $(window).ready(function (){
            var scroll = $(window).scrollTop();
            $('.fade-in-move').addClass('scroll-in-move');
                });
        }*/
        
            
            
        /*-----------------------------------------------------
        グローバルナビゲーション設定
        ------------------------------------------------------*/
        // if ($(window).scrollTop() > 1) {
        //     $('header').addClass('fixed');
        // } else {
        //     $('header').removeClass('fixed');
        // }
        
        // });
        
        
        
        /*■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
        
        HTML読み込み後の処理
        
        ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■*/
        
        /*-----------------------------------------------------
        指定要素をふわっと表示するライブラリ（フェードのみ）
        -----------------------------------------------------*/
        /*$(function(){
        $('.fade-in').each(function(){
            var POS = $(this).offset().top;  //fade-inがついている要素の位置
            var scroll = $(window).scrollTop();  //スクロール一
            var windowHeight = $(window).height();  //ウィンドウの高さ
        
            if (scroll > POS - windowHeight + windowHeight/10){
            $(this).addClass('scroll-in');
            }
        });
        
        
        });*/
        
        
        /*-----------------------------------------------------
        textarea 自動リサイズ
        ------------------------------------------------------*/
        // $(function(){
        // var heightSize = $(window).height();
        // $('.bg_sp').height(heightSize); 
        // });
        
        // $(window).on("resize",function(){
        // var heightSize = $(window).height();
        // $('.bg_sp').height(heightSize); 
        // });
        
        
        
        /*-----------------------------------------------------
        WP過去記事制御
        ------------------------------------------------------*/
        //$(function(){
        //  $("h3.old_post_list").on("click", function() {
        //    $(this).next().slideToggle();
        //  });
        //});
        
        
        /*-----------------------------------------------------
        タブ
        ------------------------------------------------------*/
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





        });