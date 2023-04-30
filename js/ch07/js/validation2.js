// 회원 가입 유효성 검사
function checkMember(){
    let form = document.regForm;
    let id = form.uid;
    let pw1 = form.pw1;
    let pw2 = form.pw2;

    let pw_pat1 = /[0-9]+/;
    let pw_pat2 = /[a-zA-Z]+/
    let pw_pat3 = /[~!@#$%^&*()_]+/

    if(id.value.length < 4 || id.value.length > 15){
        alert("아이디는 4~15자까지 가능합니다.");
        id.select();
        return false;
    }else if(pw1.value.length < 8 || !pw_pat1.test(pw1.value) ||
                !pw_pat2.test(pw1.value) || !pw_pat3.test(pw1.value)){
        alert("비밀번호는 영문자, 숫자, 특수문자 포함 8자까지 가능합니다.");
        pw1.select()
        return false;
    }else if(pw1.value != pw2.value){
        alert("비밀번호가 일치하지 않습니다.");
        pw2.select();
        return false;
    }else{
        form.submit();
    }
}
    

