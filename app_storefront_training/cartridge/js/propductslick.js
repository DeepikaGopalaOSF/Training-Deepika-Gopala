'use strict';

/**
 * @private
 * @function
 * @description Binds events to the cart page (edit item's details, bonus item's actions, coupon code entry)
 */
function initializeEvents() {
    $("#slick-carousel").slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        mobileFirst:true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 768,
              settings: {
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });
}

exports.init = function () {
    initializeEvents();
};
