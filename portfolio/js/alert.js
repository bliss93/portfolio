/*
    파일명 : contents.js
    작성자 : 윤서하
    작성일 : 24.04.21
    설  명 : 콘텐츠 페이지의 jQuery
*/
$(document).ready(function(){
    
    const content_swiper = new Swiper('.content .swiper', { 
        autoplay: { 
            delay: 3000,
            disableOnInteraction: true,
        },
        loop: true, 
        slidesPerView: 'auto', 
        spaceBetween: 17, 
        slideToClickedSlide : true,
        pagination: { 
		el: '.content .paging', 
		clickable: true,  
		
	    },
    });
    

    AOS.init({
        offset: 100, 
        duration: 500, 
        easing: 'ease', 
    });

})
