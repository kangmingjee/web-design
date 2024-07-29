$(function(){
    $(".main > li").mouseover(function(){
        $(this).find(".sub").stop().slideDown();
    })

    $(".main > li").mouseout(function(){
        $(".sub").stop().slideUp();
    })

    var n = 0;
    setInterval(function(){
        if(n == 3){
            n = 0;
        }
        else{
            n++;
        }
        console.log(n)
        $(".tmove").animate({top : n * (-400) + "px"}, 500);

    },3000)

    $(".contents h2").click(function(){
        $(".contents h2").removeClass("on");
        $(this).addClass("on");
        $(".contents ul").hide();
        $(this).next().css({display : "flex"})
    }) //

    $(".p_click").click(function(){
        $(".pop").show();
    })//
    $(".close").click(function(){
        $(".pop").hide();
    })//


}) 