$(function () {
   $('.menu-btn').on('click', function () {
    $('.header__menu-list').toggleClass('header__menu-list--active')
   }) 

  $('.stock-slider').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true
  })
 
  
  $('.services__btn').on('click', function (e) {
    e.preventDefault();
    $('.services__btn').removeClass('services__btn--active')
    $(this).addClass('services__btn--active')

    $('.services__content-item').removeClass('services__content-item--active')
    $($(this).attr('href')).addClass('services__content-item--active');
  })

})