$(function() {
    // w17のアコーディオン
    $('.question-item').click(function() {
        var $answer = $(this).find('.answer');
        if ($answer.hasClass('open')) {
            $answer.removeClass('open');
            $answer.slideUp();
            $(this).find('.fas').removeClass('.fas fa-chevron-up');
            $(this).find('.fas').addClass('.fas fa-chevron-down');
        } else {
            $answer.addClass('open');
            $answer.slideDown();
            $(this).find('.fas').removeClass('.fas fa-chevron-down');
            $(this).find('.fas').addClass('.fas fa-chevron-up');
        }
    });
    // w11アコーディオン
    $('.flow2').click(function() {
        var $textbox = $(this).find('.flow2-textbox');
        if ($textbox.hasClass('open')) {
            $textbox.removeClass('open');
            $textbox.slideUp();
            $(this).find('.fas').removeClass('.fas fa-chevron-up');
            $(this).find('.fas').addClass('.fas fa-chevron-down');
        } else {
            $textbox.addClass('open');
            $textbox.slideDown();
            $(this).find('.fas').removeClass('.fas fa-chevron-down');
            $(this).find('.fas').addClass('.fas fa-chevron-up');
        }
    });

    // トップページへの移動ボタン
    $(window).scroll(function() {
        if ($(this).scrollTop() > 70) {
            $('.page_top').fadeIn();
        } else {
            $('.page_top').fadeOut();
        }
    });
    $('.page_top').click(function() {
        $('body, html').animate({ scrollTop: 0 }, 500);
        return false;
    });

    // お問い合わせのスクロール
    $('.inquiry[href^="#"]').click(function() {
        //スクロールのスピード
        var speed = 500;
        //リンク元を取得
        var href = $(this).attr("href");
        //リンク先を取得
        var target = $(href == "#" || href == "" ? 'html' : href);
        //リンク先までの距離を取得
        var position = target.offset().top;
        //スムーススクロール
        $("html, body").animate({ scrollTop: position }, speed, "swing");
        return false;
    });
});
