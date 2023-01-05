(function ($) {
    "use strict";

    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 48,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    $("body").scrollspy({
        target: "#mainNav",
        offset: 54,
    });

    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
            $(".btn-top").css("display", "block");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
            $(".btn-top").css("display", "none");
        }
    };
    navbarCollapse();
    $(window).scroll(navbarCollapse);
})(jQuery);

let modalId = $("#gallery");

$(document).ready(function () {
    $("#trinket-link").on("click", () => {
        var list = loadFile('../assets/trinkets.json');
        var trinkets = JSON.parse(list);
        var num = Math.floor((Math.random() * 1200) + 1);
        $("#trinket-text").html(trinkets[num]);
        $("#trinket-modal").modal("show");
    });
});

function csvToObjs(string) {
    const lines = data.split(/\r\n|\n/);
    let [headings, ...entries] = lines;
    headings = headings.split(",");
    const objs = [];
    entries.map((entry) => {
        obj = entry.split(",");
        objs.push(Object.fromEntries(headings.map((head, i) => [head, obj[i]])));
    });
    return objs;
}

function loadFile(filePath) {
    var result = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filePath, false);
    xmlhttp.send();
    if (xmlhttp.status == 200) {
        result = xmlhttp.responseText;
    }
    return result;
}
