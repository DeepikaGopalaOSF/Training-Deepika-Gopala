'use strict'

$(document).ready(function(){
        //click to view coupon code - 14706
        $('.radiobutton').on('click', function (e) {
            
           
            if($(this).val() == "1"){
                 $(".billme-content").show();
                 $(".creditcard-content").hide();
            }else{
                $(".creditcard-content").show();
                $(".billme-content").hide();
            }
       })
})
