$('.first__btn').click(function(){
    $('.hide__block').show(400);
  });
  
  $('.hide__btn').click(function(){
    $('.hide__block').hide(400)
  });
  
  $('.second__btn').click(function(){
    $('.hide__block-second').show(400);
  });
  
  $('.hide__btn-second').click(function(){
    $('.hide__block-second').hide(400)
  });

  $('.map__newYork').click(function(){
    $('.new-york').toggle(300);
  });
  
  $('.hong-kong').click(function(){
    $('.map-hong-kong').toggle(300);
  });

$('.burger').click(function(){
  $('.nav__body').toggle(300).css({'display': 'flex'});
  $('.line__bug1').toggleClass('line__first');
  $('.line__bug2').toggleClass('line__second');
  $('.line__bug3').toggleClass('line__third');
});

$('.post__item').click(function(){
  $('.form__block').show(300)
});

$('.fa-sign-out-alt').click(function(){
  $('.form__block').hide(300);
})

