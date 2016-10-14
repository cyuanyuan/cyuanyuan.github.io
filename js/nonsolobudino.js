$(document).ready(function() {
    var aa = (function() {
        if (xpos[2] == 0) {
            xpos[0] = 0;
            xpos[1] = 100;
            xpos[2] = 200;
        } else {
            xpos[0] = xpos[0] - 100;
            xpos[1] = xpos[1] - 100;
            xpos[2] = xpos[2] - 100;
        }
        $(".yuandian span").css("color", "lightblue")
        if (xpos[0] == 0) {
            $($(".yuandian span")[0]).css("color", "blue")
        }
        if (xpos[1] == 0) {
            $($(".yuandian span")[1]).css("color", "blue")
        }
        if (xpos[2] == 0) {
            $($(".yuandian span")[2]).css("color", "blue")
        }

        $(".diyizhang").css("transform", "translateX(" + xpos[0] + "%)");
        $(".dierzhang").css("transform", "translateX(" + xpos[1] + "%)");
        $(".disanzhang").css("transform", "translateX(" + xpos[2] + "%)");
    })
    var xpos = [0, 100, 200]
    setInterval(aa, 5000);
    $(".yuandian span").click(function() {
        if (this.id == "a") xpos = [0, 100, 200]
        else if (this.id == "b") xpos = [-100, 0, 100]
        else if (this.id == "c") xpos = [-200, -100, 0]
        $(".diyizhang").css("transform", "translateX(" + xpos[0] + "%)");
        $(".dierzhang").css("transform", "translateX(" + xpos[1] + "%)");
        $(".disanzhang").css("transform", "translateX(" + xpos[2] + "%)");
        $(".yuandian span").css("color", "lightblue")
        if (xpos[0] == 0) {
            $($(".yuandian span")[0]).css("color", "blue")
        }
        if (xpos[1] == 0) {
            $($(".yuandian span")[1]).css("color", "blue")
        }
        if (xpos[2] == 0) {
            $($(".yuandian span")[2]).css("color", "blue")
        }
    })

})