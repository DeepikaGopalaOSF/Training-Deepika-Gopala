'use strict'

$(document).ready(function(){
        //click to view coupon code - 14706
        $('#click-here-to-code').on('click', function (e) {
            //console.log("hello");
           $(this).hide();
           $(".cart-coupon-code").css("display","block");
       })
})


