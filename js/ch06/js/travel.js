
//아이템 배열 생성 및 아이템 삽입
let itemList = []

let addBtn = document.getElementById("add")

addBtn.addEventListener('click', addList);

function addList(){
    let item = document.getElementById("item").value;

    itemList.push(item); //아이템 추가
    document.getElementById("item").value = "";
    document.getElementById("item").focus();

    showList();
}

//아이템 목록 조회
function showList(){
    //첫번째 아이템 출력
    //document.getElementById("itemList").innerHTML = itemList[0];

    let list = "<ul>";  //목록 리스트 변수
    for(let i=0; i<itemList.length; i++){
        //아이템 배열 출력
        //document.getElementById("itemList").innerHTML = itemList[i];
        //list에 li와 item 연결(누적 더하기)
        list += "<li>" + itemList[i] + "<span class='close' id=" + i + ">X</span></li>"
    }
    list += "</ul>";
    document.getElementById("itemList").innerHTML = list;

    //아이템 삭제
    let removeList = document.querySelectorAll(".close"); // 'X' 선택

    for(let i=0; i<removeList.length; i++){
        removeList[i].addEventListener("click", remove);
    }

    //삭제 함수 정의
    function remove(){
        console.log(this);  //클릭 이벤트가 일어난 대상
        let id = this.getAttribute("id"); //id 값 가져옴
        itemList.splice(id, 1);   //1개 삭제
        
        showList();  //목록 보기
    }
}


