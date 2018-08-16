$(function () {

  $('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: '<span class="slick-prev"></span>',
    nextArrow: '<span class="slick-next"></span>',
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider',
    focusOnSelect: true
  });

  $('.slider-inside').slick({
    infinite: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: '<span class="slick-prev"></span>',
    nextArrow: '<span class="slick-next"></span>',
    asNavFor: '.slider-nav-inside'
  });
  $('.slider-nav-inside').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-inside',
    focusOnSelect: true,
    arrows: false
  });

  $('.slider-inside-kur').slick({
    infinite: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: '<span class="slick-prev"></span>',
    nextArrow: '<span class="slick-next"></span>',
    asNavFor: '.slider-nav-inside-kur'
  });
  $('.slider-nav-inside-kur').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-inside-kur',
    focusOnSelect: true,
    arrows: false
  });

  var myEvents = [
    {
      date: 'Q1 - 2017',
      content: 'Lorem ipsum dolor sit amet'
    },
    {
      date: 'Q2 - 2017',
      content: 'Lorem ipsum dolor sit amet'
    },
    {
      date: 'Q3 - 2017',
      content: 'Lorem ipsum dolor sit amet'
    },
    {
      date: 'Q3 - 2018',
      content: 'Lorem ipsum dolor sit amet'
    },
    {
      date: 'Q3 - 2018',
      content: 'Lorem ipsum dolor sit amet'
    },
    {
      date: 'Q3 - 2018',
      content: 'Lorem ipsum dolor sit amet'
    },
    {
      date: 'Q3 - 2018',
      content: 'Lorem ipsum dolor sit amet'
    },
    {
      date: 'Q3 - 2018',
      content: 'Lorem ipsum dolor sit amet'
    },
    {
      date: 'Q3 - 2018',
      content: 'Lorem ipsum dolor sit amet'
    },
    {
      date: 'Q3 - 2018',
      content: 'Lorem ipsum dolor sit amet'
    }
  ];
  $('#my-timeline').roadmap(myEvents, {
    eventsPerSlide: 4,
    prevArrow: '<i class="material-icons">keyboard_arrow_left</i>',
    nextArrow: '<i class="material-icons">keyboard_arrow_right</i>'
  });

});
