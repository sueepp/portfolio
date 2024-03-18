
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  }, 
  autoplay: {
    delay : 3000
  },
  loop: true,
  freeMode: true,
});

// menu slide
$('button').click(function(){
  var $this = $(this);
  var index = $this.index();
  
  $this.addClass('active');
  $this.siblings('button.active').removeClass('active');
  
  var $outer = $this.closest('.inner');
  var $current = $outer.find(' > .tabs > .tab.active');
  var $post = $outer.find(' > .tabs > .tab').eq(index);
  
  $current.removeClass('active');
  $post.addClass('active');
  // 위의 코드는 탭메뉴 코드입니다.
  
  $('.slider').slick('setPosition');
});

$('.slider').slick({
slidesToShow: 4,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 4000,
loop: true,
arrows: false,
dots: false,
focusOnSelect: true,
pauseOnHover: true,
responsive: [{
  breakpoint: 960,
  settings: {
    slidesToShow: 4
  }
}, {
  breakpoint: 768,
  settings: {
    slidesToShow: 4
  }
}]
});

//GNB
$(function() {
  $('#gnb .dep2').hide();
  $('#gnb>li').hover(function() {
    $(this).find('.dep2').stop().slideDown();
  }, function() {
    $(this).find('.dep2').stop().slideUp();
  });
});


