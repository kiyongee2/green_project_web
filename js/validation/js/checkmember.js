function checkMember(){
    var form = document.regForm;  //폼 이름
    var id = form.mid;      //mid 값
    var pwd = form.passwd;  //passwd 값
    var pwd2 = form.passwd2;  //passwd 값
    var name = form.name;   //name 값
  
    //비밀번호 정규 표현식 설정
    var pwd_pat1 = /[0-9A-Za-z]/;  //영문자, 숫자 
    var pwd_pat2 = /[~!@#$%^&*]/;  //특수문자
  
    if(id.value.length < 4 || id.value.length > 15){
      alert("아이디는 4자 ~ 15자까지 가능합니다.");
      id.select();
      return false;
    }
    else if(pwd.value.length < 8 || !pwd_pat1.test(pwd.value) 
        || !pwd_pat2.test(pwd.value)){
      alert("패스워드는 영문자, 숫자, 특수문자 포함 8자 이상 가능합니다.");
      pwd.select();
      return false;
    }
    else if(pwd.value != pwd2.value){
      alert("비밀번호가 일치하지 않습니다.");
      pwd2.select()
      return false;
    }
    else if(name.value == ""){
      alert("이름은 필수 입력 항목입니다.");
      name.focus();
      return false;
    }
    else{
      form.submit();   //전송
    }
  }
  