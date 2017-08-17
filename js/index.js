$(function () {

    var contentJson = {
        0: ".about-content-intro",
        1: ".about-content-skill",
        2: ".about-content-contact"
    }
    var contentNum = 0;
    $(".rtUp").on("click", prevPage);
    $(".rtDown").on("click", nextPage);
    $(".mini-prev-page").on("click", prevPage);
    $(".mini-next-page").on("click", nextPage);
    $(".rtTool").on("click", showSkillPage);
    $(".mini-show-skill").on("click", showSkillPage);

    function prevPage() {
        contentNum--;
        if (contentNum < 0) {
            contentNum = 0;
            $(contentJson[contentNum]).addClass("shake");
            setTimeout(function () {
                $(contentJson[contentNum]).removeClass("shake");
            }, 400);
            return;
        };
        $(".about-content-row").children().children().hide();
        $(contentJson[contentNum]).fadeIn();
    }

    function nextPage() {
        contentNum++;
        if (contentNum > 2) {
            contentNum = 2;
            $(contentJson[contentNum]).addClass("shake");
            setTimeout(function () {
                $(contentJson[contentNum]).removeClass("shake");
            }, 400);
            return;
        };
        $(".about-content-row").children().children().hide();
        $(contentJson[contentNum]).fadeIn();
    }

    function showSkillPage() {
        console.log("æŠ€èƒ½å±•ç¤º");
        contentNum = 1;
        $(".about-content-row").children().children().hide();
        $(contentJson[contentNum]).fadeIn();
    }

    $(".flip-bigball").on("ontouchstart", function () {
        console.log("1024");
    });
    var lock = true;
    var pagenum = 0;
    $(window).on("scroll", function () {
        var scrollTop = $(window).scrollTop();
        var windowHeight = $(window).height();
        var documentHeight = $(document).height();
        var lastHeight = documentHeight - windowHeight - scrollTop;
        if (lastHeight < 60 && lock) {
            console.log("??200");
            lock = false;
            pagenum++;
            getAndRender(pagenum);
            console.log(lock);
        }
    }).trigger("scroll");

    function getAndRender(pagenum) {
        var feed_id = "#page_" + pagenum;
        var tpl_id = "#feed_template_" + pagenum;
        var tpl_str = $(tpl_id).html();
        var compiled = _.template(tpl_str);
        var url = "data/page" + pagenum + ".json";
        $.get(url, function (data, status) {
            var compiledStr = compiled(data);
            $(feed_id).html(compiledStr);
            lock = true;
            if (data.end) {
                console.log("theEnd");
                setTimeout(function () {
                    lock = false;
                }, 300);
            };
            console.log(lock);
        });
    }
    var leader = 0,
        target = 0;
    $("#toHome").on("click", function () {
        target = 11;
        $("#main_nav li").removeClass("active");
        $(this).addClass("active");
        var Timer = setInterval(function () {
            leader += (target - leader) / 10;
            if (Math.abs(target - leader) < 1) {
                clearInterval(Timer);
                leader = target;
            };
            window.scrollTo(0, leader);
        }, 30);
    });
    $("#toDesign").on("click", function () {
        target = 1080;
        $("#main_nav li").removeClass("active");
        $(this).addClass("active");
        var Timer = setInterval(function () {
            leader += (target - leader) / 10;
            if (Math.abs(target - leader) < 1) {
                clearInterval(Timer);
                leader = target;
            };
            window.scrollTo(0, leader);
        }, 30);
    });
    $("#toAbout").on("click", function () {
        target = 2160;
        $("#main_nav li").removeClass("active");
        $(this).addClass("active");
        var Timer = setInterval(function () {
            leader += (target - leader) / 10;
            if (Math.abs(target - leader) < 1) {
                clearInterval(Timer);
                leader = target;
            };
            window.scrollTo(0, leader);
        }, 30);
    });
    $(window).on("scroll", function () {
        leader = $(window).scrollTop();
        if (leader >= 0 && leader <= 1080) {
            $("#main_nav li").removeClass("active");
            $("#main_nav li").eq(0).addClass("active");
        } else if (leader >= 1080 && leader <= 2160) {
            $("#main_nav li").removeClass("active");
            $("#main_nav li").eq(1).addClass("active");
        } else if (leader >= 2160 && leader <= 3240) {
            $("#main_nav li").removeClass("active");
            $("#main_nav li").eq(2).addClass("active");
        }

    })

})