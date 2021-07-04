const sections = $("section");
const display = $(".wrapper__content");

const mobileDetect = new MobileDetect(window.navigator.userAgent);
const isMobile = mobileDetect.mobile();

let inScroll = false;

sections.first().addClass("section--active")

const performTransition = sectionEq => {

    if(inScroll == false) {
        inScroll = true;
        const position = sectionEq * -100;

        const currentSection = sections.eq(sectionEq);
        const menuTheme = currentSection.attr("data-sidemenu-theme");
        const sideLink = $(".pagination__link");
        const sideMenu = $(".pagination");

        if (menuTheme == "grey") {
            sideLink.removeClass("pagination__link--colors");
        } else {
            sideLink.addClass("pagination__link--colors");
        }

    display.css({
        transform: `translateY(${position}%)`
    });

    sections.eq(sectionEq).addClass("section--active").siblings().removeClass("section--active");

    setTimeout(() => {
        inScroll = false;
        sideMenu.find(".pagination__item").eq(sectionEq).addClass("pagination__item--active").siblings().removeClass("pagination__item--active");
    }, 1300);
    }
}

const scrollViewport = direction => {
    const activeSection = sections.filter(".section--active");
    const nextSection = activeSection.next();
    const prevSection = activeSection.prev();

    if (direction == "next" & nextSection.length) {
        performTransition(nextSection.index())
    }

    if (direction == "prev" & prevSection.length) {
        performTransition(prevSection.index())
    }
}

$(window).on("wheel", e => {
    const deltaY = e.originalEvent.deltaY;

    if(deltaY > 0) {
        scrollViewport("next");
    }

    if(deltaY < 0) {
        scrollViewport("prev");
    }
});

$(window).on("keydown", e => {

    const tagName = e.target.tagName.toLowerCase();

    if (tagName != "input" & tagName != "textarea") {
        switch (e.keyCode) {
            case 38:
                scrollViewport("prev");
                break;
        
            case 40:
                scrollViewport("next")
                break;
        }
    }
});

$(".wrapper").on("touchmove", e => e.preventDefault());

$("[data-scroll-to]").click(e => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const target = $this.attr("data-scroll-to");
    const reqSection = $(`[data-section-id=${target}]`);

    performTransition(reqSection.index());
});

if (isMobile) {
    // https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
    $("body").swipe( {
        swipe: function (event, direction,) {
        const scroller = viewportScroller();
        let scrollDirection = "";

        if(direction == "up") scrollDirection = "next";
        if(direction == "down") scrollDirection = "prev";

        scroller[scrollDirection] ();
        },
    });
}




