// 자바스크립트 - classList 객체 사용
/*let toggleBtn = document.querySelector('.navbar_toggleBtn');
let menu = document.querySelector('.navbar_menu');

toggleBtn.addEventListener('click', function(){
    menu.classList.toggle('active');
})*/

//제이쿼리 사용
$(function(){
    //메뉴 버튼 보이기/숨기기
    $(".navbar_toggleBtn").click(function(){
        $(".navbar_menu").toggle("active");
    });

    $(window).resize(function(){
        if(parseInt($('nav').css('width')) > 768){
            $('.navbar_menu').css('display', 'flex');
        } 
    });
})