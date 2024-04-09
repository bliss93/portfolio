/*
    파일명 : main.js
    작성자 : 윤서하
    작성일 : 24.03.14
    설  명 : 메인페이지에서 사용된 jqeury (header 빼고)
*/
$(document).ready(function(){
    $('.show .list > ul > li').on('click', function(){
        $('.show .list > ul > li').removeClass('active')
        $(this).addClass('active')
    })
    
    const social_swiper = new Swiper('.rental .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 20, /* 팝업과 팝업 사이 여백 */
        loop: true,

        breakpoints: {
            
            1640: {
                slidesPerView: 'auto', /* 사이즈제한 */
                spaceBetween: 20,
            },
            
        },
        slideToClickedSlide : true,
        
        // autoplay: {  /* 팝업 자동 실행 */
        // delay: 3000,
        // disableOnInteraction: true,
        // },

    });


 
 var tabContainer = $('.tab_cont .swiper-container');
 tabContainer.hide().eq(0).show(); // 처음에 첫번째 컨텐츠만 보여준다.

  $('.tab_menu span').on('click', function(){ // 탭메뉴를 클릭했을때 이벤트 실행
  	var index = $(this).index();
    
    $(this).addClass('active'); 
    // 현재 클릭한 탭메뉴에 active클래스를 붙여준다. active된 요소를 css설정을 하기 위함
    $(this).siblings('span').removeClass('active'); 
    // 현재 클릭한 탭메뉴의 형제인 span들의 active클래스를 지운다.
    tabContainer.hide().eq(index).show();
    // 우선 컨텐츠를 전부 지우고 현재 클릭한 탭메뉴의 컨텐츠를 보여준다.
    slide02.destroy(true, false); //(인스턴스,스타일) true면 삭제, false면 유지
    // 컨텐츠들이 hide/show 되면서 display: block/none 처리가 되기때문에 오류가 발생하는것 같다.
    // 그러므로 여기서 destroy 메서드를 이용하여 slide02를 초기화를 시켜버린다.

    if(index == 1) { // 현재 클릭한 인덱스가 1이면(0,1이므로 slide02는 인덱스 1일때로 설정)
      // 한번 더 변수 설정
      slide02 = new Swiper('.swiper-container.slide02', {
        spaceBetween: 16,
        slidesPerView: 'auto',
        watchOverflow : true,
        slidesOffsetBefore : 15,
        slidesOffsetAfter : 15,
        breakpoints: {
          991 : {
          	spaceBetween: 40,
          },
        },
      	navigation: {
          nextEl: ".slide02 .swiper-button-next",
          prevEl: ".slide02 .swiper-button-prev",
        },   
      });
    };
});
 
출처: https://ay9318.tistory.com/50 [정리코딩:티스토리]

 

   
    
    

    AOS.init({
        offset: 100, // 해당 콘텐츠가 하단에서 몇 px 위로 올라와에 나타나는 효과가 나타날지 셋팅하는 값
        duration: 500, // 애니메이션 효과가 작동되는 시간
        easing: 'ease', // 가속도
    });

})
