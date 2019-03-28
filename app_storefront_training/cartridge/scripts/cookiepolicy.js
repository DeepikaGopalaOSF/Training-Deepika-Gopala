'use strict';

$(document).ready(function(){
    $('body').on("click" , ".cookiepolicy",function(e){
        document.cookie = "dw_cookies_accepted=1;path=/";
        $(this).hide();
    });
})