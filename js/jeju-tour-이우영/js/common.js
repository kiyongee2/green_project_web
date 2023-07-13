$(document).ready(function(){
    // 모바일 환경에서 메뉴 및 닫기를 구현한 함수
    $(".mMenu").click(function(){
        $("header nav").slideDown("fast");
        $("header .closePop").show();
		$("body").bind('touchmove', function(e){e.preventDefault()});
    });
    $("header .closePop").click(function(){
        $("nav").slideUp("fast");
        $("body").unbind('touchmove');
    });
    // 모바일 환경에서 내용을 숨기고 나타내는 함수
    $(".btn_more a").click(function(){
        if($(this).parent().parent().find("p").css("display") == "none"){
            $(this).parent().parent().find("p").css("display", "block");
            $(this).parent().parent().find(".schedule").css("display", "block");
            $(this).text("접기");
        }
        else{
            $(this).parent().parent().find("p").css("display", "none");
            $(this).parent().parent().find(".schedule").css("display", "none");
            $(this).text("더보기");
        }
    });
    // 모바일 환경에서 상호작용 후 환경이 바뀌면 생기는 오류 방지 함수
    $(window).resize(function(){
        // 창의 크기를 담아둘 변수
        let width_size = window.innerWidth;
        // 모바일 환경 이외의 상황일때
        if(width_size > 800){
            $("#contents p").css("display", "block");
            $(".schedule").css("display", "block");
            $("nav").css("display", "block");
            $(".closePop").css("display", "none");
        }
        // 모바일 환경일때
        else{
            $("#contents p").css("display", "none");
            $(".schedule").css("display", "none");
            $("nav").css("display", "none");
        }
    });
});