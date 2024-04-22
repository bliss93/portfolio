/*
    파일명 : contents.js
    작성자 : 윤서하
    작성일 : 24.04.21
    설  명 : 콘텐츠 페이지의 jQuery
*/
$(document).ready(function(){
    

    const content = "1. 봉명동내커피";
    const text = document.querySelector(".content .portfolio ul > li.bong > a > .list01 > strong");
    let i = 0;

    function typing(){
        let txt = content[i++];
        text.innerHTML += txt;
        if (i > content.length) {
            text.textContent = "";
            i = 0;
        }
    }
    setInterval(typing, 200)

    
    
})

$(document).ready(function(){
    

    const content = "2. 성남아트센터";
    const text = document.querySelector(".content .portfolio ul > li.sung > a > .list01 > strong");
    let i = 0;

    function typing(){
        let txt = content[i++];
        text.innerHTML += txt;
        if (i > content.length) {
            text.textContent = "";
            i = 0;
        }
    }
    setInterval(typing, 200)

    
    
})


