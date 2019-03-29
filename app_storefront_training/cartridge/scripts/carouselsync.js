'use strict';


$(document).ready(function(){
   
    $(".carousel-sync-for").slick({
        arrows:false,
        asNavFor:".carousel-sync-nav", 
        autoplay:true,
        infinite:true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $(".carousel-sync-nav").slick({ 
       autoplay:true,
       centerMode: true,
       infinite:true,
       slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
              breakpoint: 1208,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true
              }
            },
            {
              breakpoint: 780,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });
})
