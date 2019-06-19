// アコーディオン
$(function(){

    //.accordion2の中のp要素がクリックされたら
	$('.backnum_box01_item p').click(function(){

		//クリックされた.accordion2の中のp要素に隣接する.accordion2の中の.innerを開いたり閉じたりする。
		$(this).next('.backnum_box01_item .inner').slideToggle();
    $(this).toggleClass("arrow_up");
    $(this).next("panel-head").slideToggle();

		//クリックされた.accordion2の中のp要素以外の.accordion2の中のp要素に隣接する.accordion2の中の.innerを閉じる
		$('.backnum_box01_item p').not($(this)).next('.backnum_box01_item .inner').slideUp();

	});

	// フォームトグル
	$('#show_form').on('click', function(){
		$(".article_form").slideToggle("slow");
	});
});

$(function() {
  $('.center-item').slick({
    dots: false,
    nextArrow: '<img src="img/slick_arrow.png" class="slide-arrow next-arrow"">',
    prevArrow: false,
    infinite: true,
    speed: 450,
    slidesToShow: 1,
    adaptiveHeight: true
  });

  $('.center-item2').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 4,
    nextArrow: '<img src="img/slick_arrow.png" class="slide-arrow backnum_next-arrow">',
    prevArrow: '<img src="img/back_nymber_pre.png" class="slide-arrow backnum_prev-arrow">',
    responsive: [{
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '50px',
          slidesToShow: 1
        }
      }
    ]
  });

  $(function() {
    $(document).ready(function() {
      var w = $(window).width();
      if (w <= 768) {
        $(".area_title").addClass("modal-open-each");
      }
    });
  });

  // バーガーメニュー
  $(function() {
    $('#nav_toggle').click(function() {
      $("#b-menu").toggleClass('open');
      $(".nav-bar").fadeToggle(500);
    });

    $('.sub-manu-taggle').click(function() {
      $(this).find(".sub-manu").slideToggle(500);
    });

    // モーダル
    // 「.modal-open-each」をクリック
    $(document).on('click', '.modal-open-each', function() {
      // オーバーレイ用の要素を追加
      $('body').append('<div class="modal-overlay-each"></div>');
      // オーバーレイをフェードイン
      $('.modal-overlay-each').fadeIn('slow');
      // モーダルコンテンツのIDを取得
      var modal = '#' + $(this).attr('data-target');
      // モーダルコンテンツの表示位置を設定
      modalResize();
      // モーダルコンテンツフェードイン
      $(modal).fadeIn('slow');
      // 「.modal-overlay」あるいは「.modal-close-each」をクリック
      $('.modal-overlay-each, .modal-close-each').off().click(function() {
        // モーダルコンテンツとオーバーレイをフェードアウト
        var modal_target = $(this).attr('data-target')
        $(modal).fadeOut('slow');
        $('.modal-overlay-each').fadeOut('slow', function() {
          // オーバーレイを削除
          $('.modal-overlay-each').remove();
        });
      });
      // リサイズしたら表示位置を再取得
      $(window).on('resize', function() {
        modalResize();
      });
      // モーダルコンテンツの表示位置を設定する関数
      function modalResize() {
        // ウィンドウの横幅、高さを取得
        var w = $(window).width();
        var h = $(window).height();
        // モーダルコンテンツの表示位置を取得
        if (w >= 768) {
          var x = 0;
        }else {
          var x = (w - $(modal).outerWidth(true)) / 2;
        }

        var y = (h - $(modal).outerHeight(true)) / 6;
        // モーダルコンテンツの表示位置を設定
        $(modal).css({
          'left': x + 'px',
          'top': y + 'px'
        });
      }
    });
  });
});

//add

$(function(){
        // #で始まるリンクをクリックしたら実行されます
        $('a[href^="#"]').click(function() {
          // スクロールの速度
          var speed = 400; // ミリ秒で記述
          var href= $(this).attr("href");
          var target = $(href == "#" || href == "" ? 'html' : href);
          var position = target.offset().top;
          $('body,html').animate({scrollTop:position}, speed, 'swing');
          return false;
        });
      });
