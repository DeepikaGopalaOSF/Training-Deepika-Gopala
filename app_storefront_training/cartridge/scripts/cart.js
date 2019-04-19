'use strict';

function initializeEvents() {
  //click to view coupon code - 14706
  $('#click-here-to-code').on('click', function (e) {
    $(this).hide ();
    $('.cart-coupon-code').css('display', 'block');
  });
}

exports.init = function() {
  initializeEvents();
};
