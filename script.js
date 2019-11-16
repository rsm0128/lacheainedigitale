(function($) {
	$( document ).ready(function() {
    // Header Menu Tabbed Content
    $('.submenu .tab-btn').on('click', function () {
      var id = $(this).attr('tab-id');
      $('.submenu .tab-btn').removeClass('active');
      $(this).addClass('active');
      $('.submenu .content-item').removeClass('active');
      $('.submenu .content-item[tab-id="' + id + '"]').addClass('active');
    });

    // Home Page Tabbed Content
    $('.tabbed-section .tab-btn').on('click', function () {
      var id = $(this).attr('tab-id');
      $('.tabbed-section .tab-btn').removeClass('active');
      $(this).addClass('active');
      $('.tabbed-section .content-item').fadeOut(300);
      setTimeout(() => {
        $('.tabbed-section .content-item[tab-id="' + id + '"]').fadeIn(300);  
      }, 300);
    });

    // Faq Items Trigger
    $('.faqs .faq').on('click', function () {
      if (!$(this).hasClass('active')) {
        $('.faqs .faq .answer').slideUp(300);
        $('.faqs .faq').removeClass('active');
        $(this).find('.answer').first().slideDown(300);
        $(this).addClass('active');
      } else {
        $('.faqs .faq .answer').slideUp(300);
        $('.faqs .faq').removeClass('active');
      }
    });

    // Mobile Menu Trigger
    $('.hamburger').on('click', function () {
      $(this).toggleClass('is-active');
      $('header .menu-wrapper').toggleClass('active');
    });

    // Single Post Slider
    if ($('.blogs-list.blog-slider').length) {
      $('.blogs-list.blog-slider .container').slick({
        arrows: false,
        dots: true,
        speed: 1500,
        cssEase: 'ease',
        easing: 'linear',
        autoplay: true,
        infinite: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 1,
            }
          },
        ]
      });
      blog_posts_height_adjust();
      $(window).on('resize', function() {
        blog_posts_height_adjust();
      });
    }
  });
  function blog_posts_height_adjust () {
    var max_height = 0;
    $('.blogs-list.blog-slider .single-blog').each(function () {
      if (max_height < $(this).height()) {
        max_height = $(this).height();
      }
    });
    $('.blogs-list.blog-slider .single-blog').each(function () {
      $(this).height(max_height);
    });
  }
})( jQuery );