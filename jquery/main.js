

$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $(".cmn-btncircle").fadeIn();
        }
        else{
            $(".cmn-btncircle").fadeOut();
        }
    });

    $("cmn-btncircle").click(function(){
        $("html, body").animate({
            scrollTop : 0
        },500);
        return false;
    })
})