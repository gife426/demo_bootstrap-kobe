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
//模态框效果
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


//ajax 提交
$(function () {
    $("#btn").on("click",function () {
        $.post("new.php",{name:$("#username").val(),password:$("#password").val()},function (data) {
            $("#result").text(data);
        }).fail(function () {
            alert("服务器有问题");
        });
        saveData();
    });
});

//WebStorage存储数据
function saveData() {
    var data = new Object();  //创建新的object对象并将需要保存的value设置为其属性
    data.name = document.getElementById("username").value;
    data.password = document.getElementById("password").value;
    var str = JSON.stringify(data);//将字obeject对象转化为json字符串
    sessionStorage.setItem(data.name, str);
    alert("数据已经保存");
}


//暂时未用...待完善
function findData() {
    var find = document.getElementById("find").value;
    var str = sessionStorage.getItem(find);
    var data = JSON.parse(str);//将取回的json字符串转化为object对象
    var result = "姓名：" + data.name + "<br/>"
    result += "邮箱：" + data.email + "<br/>"
    result += "电话：" + data.tel + "<br/>"
    result += "备注：" + data.memo + "<br/>"
    document.getElementById("msg1").innerHTML=result;
}

//jQuery ui功能
//导航条搜索框自动提示功能
$( function() {
    var availableTags = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
    ];
    $( "#autoComplete" ).autocomplete({
        source: availableTags//表示提示来源的数组不能加；
    });
} );
//科比名言dialog效果
$( function() {
    $("#dialogBtn").on("click",function () {
        $( "#dialog" ).dialog();
    })
} );

