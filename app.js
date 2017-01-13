//侧边导航点击切换效果
$(function () {
    $(".tooltip-side-nav").click(function () {
        $(this).addClass("select").parent().siblings().children().removeClass("select");
        console.log($(".tooltip-side-nav"));
        $(this).removeClass("default").parent().siblings().children().addClass("default");

    })
});

//顶部导航条切换同时侧边导航条切换
$(function () {
    $("a.tooltip-top-nav").click(function () {
        var number = $(this).index('a.btn.tooltip-top-nav');//index()方法中的参数要指代清楚，要不返回的是0
        $(".tooltip-side-nav").eq(number).addClass("select").parent().siblings().children().removeClass("select");
        $(".tooltip-side-nav").eq(number).removeClass("default").parent().siblings().children().addClass("default");
    })
});
//侧边导航条滚动切换效果
$(function () {
    var one = $("#page1").offset().top;
    var two = $("#page2").offset().top;
    var three = $("#page3").offset().top;
    var four = $("#page4").offset().top;
    var five = $("#page5").offset().top;


    $(window).scroll(function () {
        var this_scrollTop = $(this).scrollTop();
        if (this_scrollTop >= one && this_scrollTop < two) {
            $(".one").addClass("select").parent().siblings().children().removeClass("select");

            $(".one").removeClass("default").parent().siblings().children().addClass("default");
        }
        else if (this_scrollTop > two && this_scrollTop < three) {
            $(".two").addClass("select").parent().siblings().children().removeClass("select");

            $(".two").removeClass("default").parent().siblings().children().addClass("default");
        } else if (this_scrollTop > three && this_scrollTop < four) {
            $(".three").addClass("select").parent().siblings().children().removeClass("select");

            $(".three").removeClass("default").parent().siblings().children().addClass("default");
        } else if (this_scrollTop > four && this_scrollTop < five) {
            $(".four").addClass("select").parent().siblings().children().removeClass("select");

            $(".four").removeClass("default").parent().siblings().children().addClass("default");
        } else if (this_scrollTop > five) {
            $(".five").addClass("select").parent().siblings().children().removeClass("select");

            $(".five").removeClass("default").parent().siblings().children().addClass("default");
        }
    });
});

$(function (){
    $("#myModal").on("show.bs.modal",function (e) {
        var button=$(e.relatedTarget);
        var recipient=button.data("whatever");
        var modal=$(this);
        modal.find(".modal-title").text("Hello"+recipient);
        modal.find(".modal-body input").val(recipient);
    });
    $("#myModal").on("hide.bs.modal",function () {
        alert("未完成确定离开界面吗？")
    });


});

