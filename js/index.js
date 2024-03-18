$(window).on('load', function () {
  slider();  
})

function slider(){
  $(".slider").each(function(index){
      let $this = $(this);
      let swiper = undefined;
      let slideNum =  $this.find('.swiper-slide').length //슬라이드 총 개수
      let slideInx = 0; //현재 슬라이드 index
      
      //디바이스 체크
      let oldWChk = window.innerWidth > 768 ? 'pc' : 'mo';
      sliderAct();
      $(window).on('resize', function () {
          let newWChk = window.innerWidth > 768 ? 'pc' : 'mo';
          if(newWChk != oldWChk){
              oldWChk = newWChk;
              sliderAct();
          }
      })

      function sliderAct(){
          //슬라이드 인덱스 클래스 추가
          $this.addClass(`slider${index}`);

          //슬라이드 초기화 
          if (swiper != undefined){ 
              swiper.destroy();
              swiper = undefined;
          }

          //slidesPerView 옵션 설정
          let viewNum = oldWChk == 'pc' ? 5 : 2;
          //loop 옵션 체크
          let loopChk = slideNum > viewNum;

          swiper = new Swiper(`.slider${index} .wrap`, {
              slidesPerView: viewNum,
              initialSlide :slideInx,
              spaceBetween: 1,
              slidesPerGroup: 1,
              loop: loopChk,
              on: {
                  activeIndexChange: function () {
                      slideInx = this.realIndex; //현재 슬라이드 index 갱신
                  }
              },
          });
      }
  });
}