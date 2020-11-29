// script.js

$('.burger-btn').on('click',function(){//.burger-btnをクリックすると
    $('.burger-btn').toggleClass('close');
    //.btn_triggerにcloseクラスを付与(ボタンのアニメーション)
    $('.開閉メニューのクラス').toggleClass('open');
    //.開閉メニューのクラスにopenクラスを付与
});