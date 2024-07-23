$(function(){

    //메뉴
})

$(".main>li").hober(function(){
    $(this).children(".sub").stop().slideDown()
}, function(){
    $(this).find(".sub").stop().slideUp()



// var n=0; //012
// setInterval(function(){
//     if(n == 2){
//         n=0;
//     }else{
//         n++;
//     }

//     $(".left_move").animate({"left" : n * (-800) + "px"} ,500);


// },3000)//setInterval


setInterval(function(){
    (".left_move").animate({left : "-800px"},500,function(){
        $(".left_move").append($ (".left_move li").eq(0) );
        $(".left_move").css({left : "0"});
    })//animate
},3000) //setinterval


//팝업
$(".p_click").click(function(){
    $(".popup").show()
})//

$(".close")click(function(){
        $(".popup").hide();
})


})//jq end


