
// ヘッダー

var nav_pos = $(".header-top").offset().top;
var nav_height = $(".header-top").outerHeight();
$(window).scroll(function () {
    if ($(this).scrollTop() > nav_pos) {
        $(".header-top").addClass("fixed");
        $("main").css("padding-top", nav_height);
    } else {
        $(".header-top").removeClass("fixed");
        $("main").css("padding-top", 0);
    }
});



// バーガーボタン

$('.burger-btn').on('click',function(){
//.burger-btnをクリックすると
    $('.burger-btn').toggleClass('close');
    //.burger-btnにcloseクラスを付与(ボタンのアニメーション)
    $('.drawer').toggleClass('open');
    //.drawerにopenクラスを付与
});

// sp全画面メニューのドロップダウンメニュー

$('.opener').on('click',function(){
//.openerをクリックすると
    $('.drawer__sub__list').toggleClass('open');
    //.burger-btnにcloseクラスを付与(ボタンのアニメーション)
});



// pcヘッダーのドロップダウンメニュー

// ⭐️ click → hoverにすると効かない
$('.gnav__list__btn').on('click',function(){
    //.openerをクリックすると
    $('.gnav__sub__list').toggleClass('open');
    //.burger-btnにcloseクラスを付与(ボタンのアニメーション)
});
  
// ⭐️ 効かない
// $('.gnav__list__btn').hover(
//     function() {
//       //クラス名「open」を付与する
//       $(gnav__sub__list).addClass('open');
//       //hoverが外れた場合
//     }, function() {
//       //クラス名「open」を取り除く
//       $(gnav__sub__list).removeClass('open');
//     }
// );



// mv スクロールボタン

// ⭐スクロールせずにリンク先に飛んでしまう
// a[href^=#] を .mv a[href^=#] や #scrollにしても改善なし

$(function(){
    // #で始まるa要素をクリックした場合に処理
    $('a[href^=#]').click(function(){
        // 移動先を0px調整する。0を30にすると30px下にずらすことができる。
        var adjust = 0;
        // スクロールの速度（ミリ秒）
        var speed = 400;
        // アンカーの値取得 リンク先（href）を取得して、hrefという変数に代入
        var href= $(this).attr("href");
        // 移動先を取得 リンク先(href）のidがある要素を探して、targetに代入
        var target = $(href == "#" || href == "" ? 'html' : href);
        // 移動先を調整 idの要素の位置をoffset()で取得して、positionに代入
        var position = target.offset().top + adjust;
        // スムーススクロール linear（等速） or swing（変速）
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
    });
});




var EffectH = 100;
$(window).on('scroll load', function() {
  var scTop = $(this).scrollTop();
  var scBottom = scTop + $(this).height();
  var effectPos = scBottom - EffectH;
  $('.js-motion').each( function() {
    var thisPos = $(this).offset().top;
    if ( thisPos < effectPos ) {
      $.when(
        $(this).addClass("show")
      ).done(function() {
        $(this).delay(500).queue(function(){
          $(this).addClass("done")
        })
      });
    }
  });
});







// pagetopボタン

// ⭐topページ以外で効かない

$('.page-top').click(function () {
    $('body,html').animate({scrollTop: 0}, 700);
    return false;
});



// ScrollReveal

$(function(){
    ScrollReveal().reveal('.slide-in',{
        distance: '40px',
        origin: 'left',
        delay: 300,
        duration: '800',
        viewFactor: '0.3'
    });

    // スマホで表示されない
    ScrollReveal().reveal('.slide-in-bottom',{
        distance: '20px',
        origin: 'bottom',
        delay: 200,
        duration: '400',
        viewFactor: '0',
        mobile: true
    });
});

    




