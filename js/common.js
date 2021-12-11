
$(document).ready(function () {
    let menuOpen = false;
    $(".menu-btn").click(function () {
        if (!menuOpen) {
            $(".menu-btn").addClass("open");
            $("nav").css("right", "0");
            menuOpen = true;
        } else {
            $(".menu-btn").removeClass("open");
            menuOpen = false;
            $("nav").css("right", "-100%");
        }
    });
    $(".tab-header li").click(function () {
        var id = this.id;
        $(".tab-header li").removeClass("active");
        $(this).addClass("active");
        $(".address-col").removeClass("active");
        $("." + id).addClass("active");
    });
    $(".contact-main .row>div").heightLine({
        minWidth:768
    });

    $(".who-we-are .conatiner>div").heightLine();
});