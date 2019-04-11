'use strict'

$(document).ready(function(){
        $('.radiobutton').on('click', function (e) {          
            if($(this).val() == "1"){
                 $(".billme-content").hide();
                 $(".creditcard-content").show();
            }else{
                $(".creditcard-content").hide();
                $(".billme-content").show();
            }
       })

       $(".input-textarea").on('keyup',function(e){
              $("span.commentCount").text( $(this).val().length );
      })
})
