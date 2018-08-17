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

	$('.news-slider').slick({
		infinite: true,
		slidesToShow: 1,
		adaptiveHeight: true,
		prevArrow: '<span class="slick-prev"></span>',
		nextArrow: '<span class="slick-next"></span>'
	});

	$('.location-slider-wrap').slick({
		infinite: true,
		slidesToShow: 1,
    variableWidth: true,
    adaptiveHeight: true,
    centerMode: true,
		prevArrow: '<span class="slick-prev"></span>',
		nextArrow: '<span class="slick-next"></span>'
	});

	$('.photo-slider-wrap').slick({
		infinite: true,
		slidesToShow: 1,
    variableWidth: true,
    adaptiveHeight: true,
    centerMode: true,
		prevArrow: '<span class="slick-prev"></span>',
		nextArrow: '<span class="slick-next"></span>'
	});

	$('.partners-slider').slick({
		infinite: true,
		slidesToShow: 3,
		prevArrow: '<span class="slick-prev"></span>',
		nextArrow: '<span class="slick-next"></span>',
    responsive: [
      {
        breakpoint: 728,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      },
    ]
	});

});
