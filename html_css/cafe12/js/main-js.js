//배경 이미지 show
window.onload = function(){
    let picture = ["images/header1.jpg", "images/header2.jpg", "images/header3.jpg"]
    let p_idx = 0

    showPicture()

    function showPicture(){
        let img = document.querySelector("#pic")
        img.src = picture[p_idx]
        p_idx += 1
        if(p_idx == picture.length)
            p_idx = 0;
        setTimeout(showPicture, 3000);
    }

    //디지털 시계
    let watch = setInterval(myWatch, 1000);

    function myWatch(){
        const date = new Date();  //날짜와 시간 객체 생성
        let now = date.toLocaleString();  //한글로 표기
        document.getElementById("demo").innerHTML = now;
    }
}
