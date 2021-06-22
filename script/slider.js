$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        dots: true,
        initialSlide: 3,
        vertical: true,
    })
    
});

$(document).ready(function(){
    $('.slider__news').slick({
        slidesToShow: 3,
        slideScroll: 1,
        centerMode: true,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        adaptiveHeight: true,
        centerPadding: '40',
        responsive:[
            {
                breakpoint: 1230,
                settings: {
                    slidesToShow: 2,
                    centerMode: true,
               }
           },             {
               breakpoint: 920,
               settings: {
                   slidesToShow: 1,
                   centerMode: true,
              }
          }
        ]
    });
})


