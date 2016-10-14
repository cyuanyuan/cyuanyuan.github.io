$(document).ready(function() {
    $("#hanbao").click(function() {
        $(".zhengti").css("transform", "translate(270px,0)");
        $(".enabled").addClass("disabled").removeClass("enabled");
        $(".yincang").css("transform", "translate(0,0)");
        $(this).css("z-index", "-1");
        $("#hanbao").css("transition-duration", "0s");
        $(".disabled").click(function() {
            $(".zhengti").css("transform", "translate(0,0)");
            $(".disabled").addClass("enabled").removeClass("disabled");
            $(".yincang").css("transform", "translate(-270px,0)");
            $("#hanbao").css("z-index", "1");
            $("#hanbao").css("transition-duration", "1s");
        })
    });
    $(".liulanqi").mouseenter(function() {
        if ($("#liulanqi_rongqi").width() > 999) {
            $(this).find(".jianjie").css("opacity", "1");
            var dizhi = $(this).find(".browser_img img").attr("src");
            var a = dizhi.substr(0, dizhi.length - 7);
            var b = dizhi.substr(-4);
            dizhi = a + b;
            $(this).find(".browser_img img").attr("src", dizhi);
            $(this).siblings().css("width", "15%")
            $(this).css("width", "40%");

        }
    });

    $(".liulanqi").mouseleave(function() {
        if ($("#liulanqi_rongqi").width() > 999) {
            $(this).find(".jianjie").css("opacity", "0")
            var dizhi = $(this).find(".browser_img img").attr("src");
            var a = dizhi.substr(0, dizhi.length - 4);
            var b = dizhi.substr(-4);
            var c = "_ia" + b;
            dizhi = a + c;
            $(this).find(".browser_img img").attr("src", dizhi);
            $(".liulanqi").css("width", "20%");
        }
    });
    $(window).resize(function() {
        if ($(this).width() < 951 && !$(".liulanqi").is(".small")) {
            $(".liulanqi").css("width", "100%")
            $(".liulanqi").find(".jianjie").css("opacity", "1")
            $(".liulanqi").addClass("small")
        }
        if ($(this).width() > 950 && $(".liulanqi").is(".small")) {
            $(".liulanqi").removeClass("small")
            $(".liulanqi").find(".jianjie").css("opacity", "0")
        }
    })
})