var b = ["http://dr6lcqo3bxtwa.cloudfront.net/binary/2016/10/11/13/1437582013143-p5k4ma/DOD_103739804-1280x720-2765k-1476193270780.mp4", "http://dr6lcqo3bxtwa.cloudfront.net/binary/2016/10/11/14/1437582013143-p5k4ma/Haiti%20MH-1476197649908.mp4",
    "http://dr6lcqo3bxtwa.cloudfront.net/binary/2016/10/11/4/1437582013143-p5k4ma/5858b8d9-ff96-4d24-9945-a06f00135212-1476159930858.mp4", "http://dr6lcqo3bxtwa.cloudfront.net/binary/2016/10/11/10/1437582013143-p5k4ma/10-11-16%20Observer%20Wx-1476182073833.mp4"
]
$(document).ready(function() {
    if ($(window).width() < 750) {
        $(".biantiao").click(function() {
            if ($(this).is(".show")) {
                $(this).siblings(".yincang").hide()
            } else {
                $(".biantiao.show").siblings(".yincang").hide()
                $(".biantiao.show").toggleClass("show")
                var a = $(this).siblings(".yincang").show()
            }
            $(this).toggleClass("show")
        });
    }
    $(".bofangshipin").click(function() {
        $(".bofangshipin").find(".nowplaying").removeClass("nowplaying").addClass("bofanganniu")
        var a = $(".bofangshipin")
        for (var i = 0; i < a.length; i++) {
            if (this === a[i]) {
                $("#bofangkuang>video").attr("src", b[i])
                $("#bofangkuang>video")[0].play()
                $(this).find(".bofanganniu").removeClass("bofanganniu").addClass("nowplaying")
            }
        }
    })

})