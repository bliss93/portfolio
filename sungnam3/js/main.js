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

 

   
    
    

    AOS.init({
        offset: 100, // 해당 콘텐츠가 하단에서 몇 px 위로 올라와에 나타나는 효과가 나타날지 셋팅하는 값
        duration: 500, // 애니메이션 효과가 작동되는 시간
        easing: 'ease', // 가속도
    });

})
