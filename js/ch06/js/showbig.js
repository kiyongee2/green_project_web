
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



