

$(function() {
    $(".tooltip-side-nav").click(function () {
        $(this).addClass("select").parent().siblings().children().removeClass("select");
        console.log($(".tooltip-side-nav"));
        $(this).removeClass("default").parent().siblings().children().addClass("default");

    })
});


$(function() {
    $("a.tooltip-top-nav").click(function () {
        var number=$(this).index('a.btn.tooltip-top-nav');
        $(".tooltip-side-nav").eq(number).addClass("select").parent().siblings().children().removeClass("select");
        $(".tooltip-side-nav").eq(number).removeClass("default").parent().siblings().children().addClass("default");
    })
});

$(function(){
    var one =$("#page1").offset().top;
    var two = $("#page2").offset().top;
    var three = $("#page3").offset().top;
    var four = $("#page4").offset().top;
    var five = $("#page5").offset().top;



        $(window).scroll(function() {
            var this_scrollTop = $(this).scrollTop();
            if(this_scrollTop>=one&& this_scrollTop<two){
                $(".one").addClass("select").parent().siblings().children().removeClass("select");

                $(".one").removeClass("default").parent().siblings().children().addClass("default");
            }
            else if(this_scrollTop>two&& this_scrollTop<three){
                $(".two").addClass("select").parent().siblings().children().removeClass("select");

                $(".two").removeClass("default").parent().siblings().children().addClass("default");
            }else if(this_scrollTop>three&& this_scrollTop<four){
                $(".three").addClass("select").parent().siblings().children().removeClass("select");

                $(".three").removeClass("default").parent().siblings().children().addClass("default");
            }else if(this_scrollTop>four&& this_scrollTop<five){
                $(".four").addClass("select").parent().siblings().children().removeClass("select");

                $(".four").removeClass("default").parent().siblings().children().addClass("default");
            }else if(this_scrollTop>five){
                $(".five").addClass("select").parent().siblings().children().removeClass("select");

                $(".five").removeClass("default").parent().siblings().children().addClass("default");
            }
        });
    });



