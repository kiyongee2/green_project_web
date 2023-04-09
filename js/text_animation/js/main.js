
window.onload = function(){
    let text = document.querySelector("h1");

    //window 객체 이벤트 임(주의!!)
    window.addEventListener('scroll', function(){
        //스크롤의 위치 - Y좌표
        let value = this.window.scrollY;  
        console.log("scrollY", value);

        if(value > 300){
            //forwards는 상태 유지
            text.style.animation = "back 1s ease-out forwards";
        }
        else{
            text.style.animation = "slide 1s ease-out";
        }
    });
}
