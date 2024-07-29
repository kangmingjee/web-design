$(function(){

    $(".main>li").hover(function(){
        // $(this).find(".sub").stop().slideDown();
        $(this).children(".sub").stop().slideDown();
    }, function(){
        $(".sub").stop().slideUp();
    })//hover


    // $(".main>li").mouseover(function(){
    //     $(this).children(".sub").stop().slideDown();
    // })//over
    // $(".main>li").mouseout(function(){
    //     $(".sub").stop().slideUp();
    // })//out

    //이미지 슬라이드
    // var n = 0; //0(10)1(left : -100%) 2(left: -200%)

    // setInterval(function(){

    //         n = (n+1) % 3;
    //         if(n == 2){
    //             n=0;
    //         }else{
    //             //n++;
    //             n=n+1;
    //         }

    //             console.log(n);
    //             $(".left_move").animate({left : n *(-100)+"%"} , 500)

    // },3000)//
    // var n = 0; //0(10)1(left : -100%) 2(left: -200%)

    setInterval(function(){
        $(".left_move").animate({left : "-100%"} , 500,function(){

            $(".left_move").append($(".left_move li").eq(0) )
            $(".left_move").css({left: "0"})
        })

                
    },2500)//

    $(".popup").click(function(){
        $(".modal , popup").show();
    })





})//jquery
