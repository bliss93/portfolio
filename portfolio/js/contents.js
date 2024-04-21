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

    var typingBool = false; 
    var typingIdx=0; 
    
    // 타이핑될 텍스트를 가져온다 
    var typingTxt = $(".message").text(); 
    
    typingTxt=typingTxt.split(""); // 한글자씩 자른다. 
    
    if(typingBool==false){ 
      // 타이핑이 진행되지 않았다면 
       typingBool=true;     
       var tyInt = setInterval(typing,100); // 반복동작 
    } 
         
    function typing(){ 
      if(typingIdx<typingTxt.length){ 
        // 타이핑될 텍스트 길이만큼 반복 
        $(".typing").append(typingTxt[typingIdx]);
        // 한글자씩 이어준다. 
        typingIdx++; 
       } else{ 
         //끝나면 반복종료 
        clearInterval(tyInt); 
       } 
    }  
    

    AOS.init({
        offset: 100, 
        duration: 500, 
        easing: 'ease', 
    });

})

