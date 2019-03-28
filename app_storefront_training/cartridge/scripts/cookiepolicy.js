'use strict';

/**
 * @private
 * @function
 * @description Binds events to the cart page (edit item's details, bonus item's actions, coupon code entry)
 */
function initializeEvents() {
    $('.cookiepolicy').on("click" ,function(e){
        document.cookie = "dw_cookies_accepted=1;path=/";
        $(this).hide();
    });
}

exports.init = function () {
    initializeEvents();
};



