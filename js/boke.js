function windowScrollPercentage() {
    var a = $(window).scrollTop()
    var b = $(document).height() - $(window).height()

    return a / b * 100;
}

function zhengwenScrollPercentage() {
    var a = $(".zhengwen").scrollTop()
    var b = $(".zhengwen")[0].scrollHeight - 100 - $(".zhengwen").height()

    return a / b * 100;
}

$(document).ready(function() {
    $(".hanbao").click(function() {
        if (!$(".hanbao").is(".open")) {
            $(".buju").css("transform", "translate(-350px,0)")
            $(".youbiantiao").show()
            $(".youbiantiao").css("transform", "translate(0,0)")

        } else {
            $(".youbiantiao").hide()
            $(".youbiantiao").css("transform", "translate(350px,0)")
            $(".buju").css("transform", "translate(0,0)")
        }
        $(".hanbao span").toggleClass("fa-bars").toggleClass("fa-times")
        $(".hanbao").toggleClass("open")
    });

    $(".zhengwen").scroll(function() {
        if ($(window).width() > 1022) {
            $(".zongse").css("width", zhengwenScrollPercentage() + "%")
        }
    })
    $(window).scroll(function() {
        if ($(this).width() < 1022) {
            $(".zongse").css("width", windowScrollPercentage() + "%")
        }
    })
});