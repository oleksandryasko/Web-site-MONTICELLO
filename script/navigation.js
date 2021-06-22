$(window).scroll(function() {
    if ($(window).scrollTop() > 400) {
      $('.navigation').addClass('nav__scroll');
    } else {
      $('.navigation').removeClass('nav__scroll')
    }
});

$('.js-scroll-trigger').click(function(){
  let scrollName = $(this).attr('data-scroll'),
      scrollElem = $(scrollName);
      scrollTop = scrollElem.offset().top;

      $('html, body').animate({
  scrollTop: scrollTop
}, 1000)
});

$('.item2').click(function(){
  $('.circle1').removeClass('active__circle');
  $('.circle3').removeClass('active__circle');
  $('.circle4').removeClass('active__circle');
  $('.circle2').addClass('active__circle');
});

$('.item1').click(function(){
  $('.circle2').removeClass('active__circle');
  $('.circle3').removeClass('active__circle');
  $('.circle4').removeClass('active__circle');
  $('.circle1').addClass('active__circle');
});

$('.item3').click(function(){
  $('.circle1').removeClass('active__circle');
  $('.circle2').removeClass('active__circle');
  $('.circle4').removeClass('active__circle');
  $('.circle3').addClass('active__circle');
});

$('.item4').click(function(){
  $('.circle1').removeClass('active__circle');
  $('.circle2').removeClass('active__circle');
  $('.circle3').removeClass('active__circle');
  $('.circle4').addClass('active__circle');
});

$('.fa-angle-down').click(function(){
  $('.circle1').removeClass('active__circle');
  $('.circle4').removeClass('active__circle');
  $('.circle3').removeClass('active__circle');
  $('.circle2').addClass('active__circle');
});

$('#slick-slide-control02').click(function(){
  $('.navigation').addClass('nav__scroll');
});


