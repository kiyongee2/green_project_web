// 이미지 바꾸기
let bigPic = document.querySelector("#cup");  
let smallPics = document.querySelectorAll(".small");
console.log(smallPics.length);

//smallPics[0].onclick = showBig;
for(let i=0; i<smallPics.length; i++){
    smallPics[i].onclick = showBig;
}

function showBig(){
    bigPic.setAttribute("src", this.src);
}

// 상세 설명 보기
let viewBtn = document.getElementById("view");
let detail = document.getElementById("detail");

let sw = true; //상태 변수 - 전역

/*viewBtn.onclick = function(){
    if(sw){
        detail.style.display = "block";
        viewBtn.innerText = "상세 설명 닫기"
        sw = false;
    }
    else{
        detail.style.display = "none";
        viewBtn.innerText = "상세 설명 보기"
        sw = true;
    }
}*/

viewBtn.addEventListener('click', function(){
    if(sw){
        detail.style.display = "block";
        viewBtn.innerText = "상세 설명 닫기"
        sw = false;
    }
    else{
        detail.style.display = "none";
        viewBtn.innerText = "상세 설명 보기"
        sw = true;
    }
});

