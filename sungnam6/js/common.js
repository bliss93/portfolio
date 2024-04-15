/*
    파일명 : common.js
    작성자 : 윤서하
    작성일 : 2024.04.01
    설  명 : 모든 페이지에서 작동되는 jqeury (header, footer에서 작동되는 jqeury)
*/


$(document).ready(function(){

    /******************************************** 
       아래로 스크롤하면 header가 숨겨짐 (transform으로)
       위로 스크롤하면 header가 나타남 (transform으로 움직임)
       이전스크롤값(10) - 현재스크롤값(100) : 아래로 스크롤 중
       이전스크롤값(100) - 현재스크롤값(10) : 위로 스크롤 중
       무조건 스크롤을 내리면 header에 fixed 클래스가 들어가야함
     **********************************************/
     let scroll_dir //방향 - 0보다 크면 위로 스크롤
     let scroll_prev //이전 스크롤값
     let scroll_curr //현재 스크롤값
 
     function scroll_chk(){
         scroll_prev = scroll_curr
         scroll_curr = $(window).scrollTop()
         scroll_dir = scroll_prev - scroll_curr
         //console.log(scroll_dir)
         if(scroll_curr > 50){
             $('header').addClass('fixed')
             if(scroll_dir > 0){ //위로스크롤 - 나타나야함
                $('header').attr('style','transform: translate(0, 0)')
                 /*transform: translate(0, -100px); */
             }else{ //아래로스크롤 - 사라져야함.
                 $('header').attr('style','transform: translate(0, -100px)')
                 $('header .gnb > li').removeClass('on')
                 $('header').removeClass('menu_over')
             }
         }else{
             $('header').removeClass('fixed')
             $('header').attr('style','transform: translate(0, 0)')
         }
     }
     scroll_chk()  //처음 로딩됐을때 1번 실행
     $(window).scroll(function(){ //스크롤 할때마다 1번 실행
         scroll_chk() 
     })



    
 
 })//$(document).ready