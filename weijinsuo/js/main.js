$(function () {
    $('[data-toggle="tooltip"]').tooltip({
        container: 'body'
    });
    $(window).on("resize", function () {
        var window_width = $(window).width();
        var isSmallScreen = window_width < 768;
        if (isSmallScreen) {

            $("#main_ad .carousel-img").each(function (index, element) {

                var imgSrc = "img/slide_0" + (index + 1) + "_640X340.jpg";
                $(this).html('<img src="' + imgSrc + '" alt="">')
                    .css({
                        "background-image": "",
                        "height": "auto"
                    })
                    .children(0).css("width", "100%");

            });
        } else {
            $("#main_ad .carousel-img").each(function (index, element) {
                $(this).css({
                    "height": "400px",
                    "background-image": "url('img/slide_0" + (index + 1) + "_2000X410.jpg')"
                }).empty();
            });
        }
    }).trigger("resize");
    $(window).on("resize", function () {
        var liswidth = 30;
        $(".tablist-box").find("li").each(function (index, element) {
            liswidth += $(element).outerWidth(true);
        })
        $(".tablist-box .nav-tabs").css({
            "width": liswidth
        });
        if (liswidth > $(window).width()) {
            $(".tablist-box").css({
                "overflow-x": "scroll"
            });
        } else {
            $(".tablist-box").css({
                "overflow-x": "hidden"
            }).children().css({
                "width": $(".tablist-box").width()
            })
        }
    }).trigger("resize");

    $("#news .glyphicon").on("click",function(){
        $("#news .glyphicon").removeClass("active");
        $(this).addClass("active");
        $(".news-hd").text($(this).data("title"));
    });
    var $carousel = $(".carousel");
    var startX,endX;
    var offset = 80;
    $carousel.on("touchstart",function(e){
        startX = e.originalEvent.touches[0].clientX;
    })
    $carousel.on("touchmove",function(e){
        endX = e.originalEvent.touches[0].clientX;
    })
    $carousel.on("touchend",function(e){
        var distance = Math.abs(startX-endX);
        if(distance > offset){
            $(this).carousel(startX>endX?"next":"prev");
        }
    })
});