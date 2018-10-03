$(document).ready(function() {

	//Mask
	$("#phone_mobile").mask("+79999999999");
	$('.krug, .popup').click(function () {
		setTimeout(function() {
			$("#phone_mobile").mask("+79999999999");
		}, 10);
	});

	//Magnific
	$('.krug, .popup').magnificPopup({
		mainClass: 'mfp-fade',
	});
	$('.youtube-but').magnificPopup({
		items: {
			src : 'https://www.youtube.com/watch?v=M77TerjLphM'
		},
		type: 'iframe',
		mainClass: 'mfp-fade'
	});
	$('.otz-1').magnificPopup({
		items: {
			src : 'https://www.youtube.com/watch?v=PFSzs_deP-M'
		},
		type: 'iframe',
		mainClass: 'mfp-fade'
	});
	$('.otz-2').magnificPopup({
		items: {
			src : 'https://www.youtube.com/watch?v=OrJXQZ_3BOI'
		},
		type: 'iframe',
		mainClass: 'mfp-fade'
	});
	$('.sert-1').magnificPopup({
		items: {
			src : 'img/kerma.jpg'
		},
		type: 'image',
		mainClass: 'mfp-fade'
	});
	$('.sert-2, .sert-3, .sert-4').magnificPopup({
		items: {
			src : 'img/li1.jpg'
		},
		type: 'image',
		mainClass: 'mfp-fade'
	});

	// Menu
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if(scroll > 720){
			$('.menu').addClass('sticky');
			$('.top').addClass('scrolled');
		} else {
			$('.menu').removeClass('sticky');
			$('.top').removeClass('scrolled');
		}
	});

	//Scroll2id
	$('.menu a, .top').mPageScroll2id({
		offset: 50,
		scrollSpeed: 500
	});

	// Scroolly
	var cont = $('.scroll-cont');
	var cont2 = $('.scroll-motion');
	$('.i1').scroolly([
	{
		from: 'con-top - 600',
		to: 'con-top - 300',
		cssFrom: {
			'top': '500px',
		},
		cssTo: {
			'top': '0px',
		},
	}
	], cont);
	$('.i2').scroolly([
	{
		from: 'con-top',
		to: 'con-top + 400',
		cssFrom: {
			'top': '-1000px',
		},
		cssTo: {
			'top': '0px',
		},
	}
	], cont);
	$('.i3').scroolly([
	{
		from: 'con-top',
		to: 'con-top + 600',
		cssFrom: {
			'top': '-1000px',
		},
		cssTo: {
			'top': '0px',
		},
	}
	], cont);
	$('.i4, .i7').scroolly([
	{
		from: 'con-top',
		to: 'con-top + 1200',
		cssFrom: {
			'top': '-1000px',
		},
		cssTo: {
			'top': '0px',
		},
	}
	], cont);
	$('.i5').scroolly([
	{
		from: 'con-top',
		to: 'con-top + 800',
		cssFrom: {
			'top': '200px',
			'left': '-1000px',
		},
		cssTo: {
			'top': '0px',
			'left': '0px',
		},
	}
	], cont);
	$('.i6').scroolly([
	{
		from: 'con-top',
		to: 'con-top + 1000',
		cssFrom: {
			'top': '400px',
			'left': '1000px',
		},
		cssTo: {
			'top': '0px',
			'left': '0px',
		},
	}
	], cont);
	$('.i8').scroolly([
	{
		from: 'con-top',
		to: 'con-top + 1400',
		cssFrom: {
			'top': '400px',
			'left': '1000px',
		},
		cssTo: {
			'top': '0px',
			'left': '0px',
		},
	}
	], cont);

	/* Text near house */

	$('.itext-3').scroolly([
	{
		from: 'con-top + 200',
		to: 'con-top + 300',
		cssFrom: {
			'transform': 'translateY(-0px)',
		},
		cssTo: {
			'transform': 'translateY(-500px)',
		},
	}
	], cont);
	$('.itext-4').scroolly([
	{
		from: 'con-top + 130',
		to: 'con-top + 230',
		cssFrom: {
			'transform': 'translateY(750px)',
		},
		cssTo: {
			'transform': 'translateY(-0px)',
		},
	},
	{
		from: 'con-top + 500',
		to: 'con-top + 600',
		cssFrom: {
			'transform': 'translateY(-0px)',
		},
		cssTo: {
			'transform': 'translateY(-500px)',
		},
	}
	], cont);
	$('.itext-5').scroolly([
	{
		from: 'con-top + 430',
		to: 'con-top + 530',
		cssFrom: {
			'transform': 'translateY(750px)',
		},
		cssTo: {
			'transform': 'translateY(-0px)',
		},
	},
	{
		from: 'con-top + 800',
		to: 'con-top + 900',
		cssFrom: {
			'transform': 'translateY(-0px)',
		},
		cssTo: {
			'transform': 'translateY(-500px)',
		},
	}
	], cont);
	$('.itext-6').scroolly([
	{
		from: 'con-top + 730',
		to: 'con-top + 830',
		cssFrom: {
			'transform': 'translateY(750px)',
		},
		cssTo: {
			'transform': 'translateY(-0px)',
		},
	},
	{
		from: 'con-top + 1200',
		to: 'con-top + 1300',
		cssFrom: {
			'transform': 'translateY(-0px)',
		},
		cssTo: {
			'transform': 'translateY(-500px)',
		},
	}
	], cont);
	$('.itext-7').scroolly([
	{
		from: 'con-top + 1130',
		to: 'con-top + 1230',
		cssFrom: {
			'transform': 'translateY(750px)',
		},
		cssTo: {
			'transform': 'translateY(-0px)',
		},
	},
	{
		from: 'con-top + 1500',
		to: 'con-top + 1600',
		cssFrom: {
			'transform': 'translateY(-0px)',
		},
		cssTo: {
			'transform': 'translateY(-500px)',
		},
	}
	], cont);
	$('.itext-8').scroolly([
	{
		from: 'con-top + 1430',
		to: 'con-top + 1530',
		cssFrom: {
			'transform': 'translateY(750px)',
		},
		cssTo: {
			'transform': 'translateY(-0px)',
		},
	},
	{
		from: 'con-top + 1900',
		to: 'con-top + 2000',
		cssFrom: {
			'transform': 'translateY(-0px)',
		},
		cssTo: {
			'transform': 'translateY(-500px)',
		},
	}
	], cont);

	$(window).scroll(function(){
		var scrollPos = $(document).scrollTop();

		if( scrollPos < 4450 || scrollPos > 5480 ){
			$('.number-1').css({'display':'none'});
		} else {
			$('.number-1').css({'display':'block'});
		}
		if( scrollPos < 5480 || scrollPos > 5780 ){
			$('.number-2').css({'display':'none'});
		} else {
			$('.number-2').css({'display':'block'});
		}
		if( scrollPos < 5780 || scrollPos > 6080 ){
			$('.number-3').css({'display':'none'});
		} else {
			$('.number-3').css({'display':'block'});
		}
		if( scrollPos < 6080 || scrollPos > 6470 ){
			$('.number-4').css({'display':'none'});
		} else {
			$('.number-4').css({'display':'block'});
		}
		if( scrollPos < 6470 || scrollPos > 6750 ){
			$('.number-5').css({'display':'none'});
		} else {
			$('.number-5').css({'display':'block'});
		}
		if( scrollPos < 6750 || scrollPos > 7550 ){
			$('.number-6').css({'display':'none'});
		} else {
			$('.number-6').css({'display':'block'});
		}

		/**/
		if( scrollPos < 4700 || scrollPos > 7550 ){
			$(cont2).css({'display':'none'});
		} else {
			$(cont2).css({'display':'block'});
		}
	});

	/* Sticky */
	cont2.scroolly([
	{
		to: 'con-top',
		css:{
			top:'0',
			bottom: '',
			position: 'absolute',
			display : 'block',
		}
	},
	{
		from: 'con-top',
		to: 'con-bottom - 100el - 150 = vp-top',
		css:{
			top: '0',
			bottom: '',
			position: 'fixed'
		}
	},
	{   
		from: 'con-bottom - 100el - 150 = vp-top',
		css:{
			top: '',
			bottom: '150px',
			position: 'absolute'
		}
	}
	], cont);

	// Аккордеон на вопросы
	function close_accordion_section() {
		$('.accordion .accordion-section-title').removeClass('active');
		$('.accordion .accordion-section-content').slideUp(300).removeClass('open');
	}

	$('.accordion-section-title').click(function(e) {
		var currentAttrValue = $(this).attr('href');

		if($(e.target).is('.active')) {
			close_accordion_section();
		}else {
			close_accordion_section();

			$(this).addClass('active');
			$('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
		}

		e.preventDefault();
	});

	// Yandex maps
	var myMap;
	ymaps.ready(init);
	function init () {
		myMap = new ymaps.Map('ya-map', {
			center: [57.72110349675317,39.84188399241843],
			zoom: 15,
			controls: ['zoomControl', 'fullscreenControl']
		}, {
			searchControlProvider: 'yandex#search'
		},
		myPlacemark = new ymaps.Placemark([57.72110349675317,39.84188399241843], {
			hintContent: 'Коттеджный поселок Толгоболь'
		})
		);
		myMap.geoObjects.add(myPlacemark);
		myMap.behaviors.disable('scrollZoom');

	}

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	/*
	$("form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$("form").trigger("reset");
			}, 100);
		});
		return false;
	});
*/
	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
