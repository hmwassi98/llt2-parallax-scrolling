$(window).on("scroll", parallaxScroll);

function parallaxScroll() {
   const scrolled = $(window).scrollTop();

   setParallax(".layer-1", scrolled, 0.25);
   setParallax(".layer-2", scrolled, 0.5);
   setParallax(".layer-3", scrolled, 0.75);

   setParallax(".rock-1", scrolled, 0.8, 400);
   setParallax(".rock-2", scrolled, 0.6, 200);
   setParallax(".rock-3", scrolled, 0.4, 500);
   setParallax(".rock-4", scrolled, 0.5, 600);
   setParallax(".rock-5", scrolled, 0.7, 600);
   setParallax(".rock-6", scrolled, 0.7, 400);
   setParallax(".rock-7", scrolled, 0.5, 600);
   setParallax(".rock-8", scrolled, 0.2, 200);
   setParallax(".rock-9", scrolled, 0.4, 200);
}

/**
 * @param {string} selector - element class
 * @param {number} scrolled - scroll position
 * @param {number} speed - parallax speed multiplier
 * @param {number} offset - optional base offset
 */
function setParallax(selector, scrolled, speed, offset = 0) {
   const value = offset - scrolled * speed;
   $(selector).css("top", value + "px");
}