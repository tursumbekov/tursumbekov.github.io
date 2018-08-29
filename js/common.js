$(function() {

  // $('.dropzone-area').dropzone({ url: "/file/post" });
  // Dropzone.options.myDropzone= {
  //   url: 'upload.php',
  //   autoProcessQueue: false,
  //   uploadMultiple: true,
  //   parallelUploads: 5,
  //   maxFiles: 1,
  //   maxFilesize: 1,
  //   acceptedFiles: 'image/*',
  //   addRemoveLinks: true,
  //   init: function() {
  //     dzClosure = this; // Makes sure that 'this' is understood inside the functions below.
  //
  //     // for Dropzone to process the queue (instead of default form behavior):
  //     document.getElementById("submit-all").addEventListener("click", function(e) {
  //       // Make sure that the form isn't actually being sent.
  //       e.preventDefault();
  //       e.stopPropagation();
  //       dzClosure.processQueue();
  //     });
  //
  //     //send all the form data along with the files:
  //     this.on("sendingmultiple", function(data, xhr, formData) {
  //       formData.append("firstname", jQuery("#firstname").val());
  //       formData.append("lastname", jQuery("#lastname").val());
  //     });
  //   }
  // }

  $('.magnific-link').magnificPopup({
    removalDelay: 300,
    mainClass: 'mfp-fade'
  });

  $('.close-button').on('click', function () {
    $.magnificPopup.close();
  });

  var declOfNum = (function(){
    var cases = [2, 0, 1, 1, 1, 2];
    var declOfNumSubFunction = function(titles, number){
      number = Math.abs(number);
      return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
    };
    return function(_titles) {
      if ( arguments.length === 1 ){
        return function(_number){
          return declOfNumSubFunction(_titles, _number);
        }
      } else {
        return declOfNumSubFunction.apply(null, arguments);
      }
    }
  })();

  $('#main-form').on('change', function () {
    var name = $('#name').val() ? $('#name').val() : 'Имя Фамилия';
    var petName = $('#pet_name').val() ? $('#pet_name').val() : 'Имя';
    var city = $('#city').val() ? $('#city').val() : 'Город';
    var age = $('#age').val() ? $('#age').val() : 'Возраст';
    var sex = $('.radio-sex input[type="radio"]:checked').val();
    var checkedAchiv = +$('.achievements input[type="radio"]:checked').val();

    var customTitle;
    var customDesc;

    if (checkedAchiv === 20) {
      $('.custom-radio-content').slideDown();
      customTitle = $('#custom-title').val();
      customDesc = $('#custom-desc').val();
    } else {
      $('.custom-radio-content').slideUp();
    }
    if (age % 12 === 0) {
      var year = age / 12;
      var end = '';
      if (year === 1) {
        end = 'год';
      } else if (year > 1 && year < 5) {
        end = 'года';
      } else {
        end = 'лет';
      }
      age = age / 12 + ' ' + end;
    } else {
      var countMonths = declOfNum(['Месяц', 'Месяца', 'Месяцев']);
      age = age + ' ' + countMonths(age);
    }
    var data = {
      boy: [
        petName + ' СДЕЛАЛ ПЕРВЫЙ ШАГ В БУДУЩЕЕ\n<br>' +
        name + ' (' + age + ' из г. ' + city + ') начал ходить. Исследователь не сидит на месте — впереди миллионы новых открытий.',
        petName + ' ОТМЕЧАЕТ ГОДИК\n<br>' +
        name + ' (' + age + ' из г. ' + city + ') устраивает праздник по случаю своего первого дня рождения и приглашает Вас DD.MM.2018 в HH.ММ в Место!',
        petName + ' ОТПРАВИЛСЯ В КРУГОСВЕТНОЕ ПУТЕШЕСТВИЕ\n<br>' +
        name + ' (' + age + ', из г. ' + city + ') прополз детскую. Путешественник не намерен останавливаться — его ждет весь мир! \n',
        petName + ' ПОКОРИЛ КАЗНЕТ!\n<br>' +
        name + ' (' + age + ' из г. ' + city + ') стал самым популярным юным казахстанцем, активно познающим мир.',
        petName + ' СОВЕРШИЛ ОТКРЫТИЕ В ОБЛАСТИ МЕТАФИЗИКИ\n<br>' +
        name + ' (' + age + ', из г. ' + city + ') открыл Первый Закон Объятий: как бы далеко малыш ни уползал, мама всегда с ним.\n',
        petName + ' БЛИСТАЛ НА ПОДИУМЕ!\n<br>' +
        name + ' (' + age + ' из г. ' + city + ') — настоящий модник, и сегодня все взгляды на детской площадке были обращены на него.',
        petName + ' УДИВИЛ МИРОВУЮ ОБЩЕСТВЕННОСТЬ\n<br>' +
        name + ' (' + age + ' из г. ' + city + ') сегодня сам съел приготовленную мамой кашу. Новость в семье не имеет прецедентов.',
        petName + ' — НОВЫЙ ВАН ГОГ!\n<br>' +
        name + ' (' + age + ' из г. ' + city + ') сегодня нарисовал маму. Картина обещает стать мировым шедевром!',
        petName + ' ГОТОВИТСЯ В ПРЕЗИДЕНТЫ\n<br>' +
        name + ' (' + age + ', из г. ' + city + ') произнес первое слово, и ему безоговорочно повинуется вся семейная общественность. \n',
        petName + ' В КНИГЕ РЕКОРДОВ ГИННЕСА\n<br>' +
        name + ' (' + age + ' из г. ' + city + ') может попасть в Книгу Рекордов Гиннеса как самый юный кулинар на планете!',
        petName + ' — НОВЫЙ ЧЕМПИОН! \n<br>' +
        name + ' (' + age + ', из г. ' + city + ') побил рекорд в познании мира. Имя (количество) раз прополз комнату. Домашний Олимп взят!\n',
        petName + ' ВЛЮБЛЕН\n<br>' +
        name + ' (' + age + ' из г. ' + city + ') по-настоящему влюблен. Предметом любви стал самый прекрасный человек — мама!',
        petName + ' ОТМЕЧАЕТ ПЕРВУЮ ВАЖНУЮ ДАТУ\n<br>' +
        name + ' (35 дней, из г. ' + city + ') вот-вот станет большим человеком. Миллионы людей поздравляют Имя и родителей! \n',
        petName + ' ОТКРЫЛ СЕКРЕТ СЧАСТЬЯ\n<br>' +
        name + ' (' + age + ' из г. ' + city + ') доказал, что счастье спрятано в маленьких ручках, веселой улыбке и озорных глазках!',
        petName + ' ВПЕРВЫЕ ВЗЯЛ В РУКИ ЛОЖКУ\n<br>' +
        name + ' (' + age + ', из г. ' + city + ') взял в руки ложку, тем самым выразив свое твердое намерение кушать самостоятельно!\n',
        petName + ' СОЗДАЛ ПЕРВЫЙ LOOK\n<br>' +
        name + ' (' + age + ', из г. ' + city + ') сегодня сам оделся. Стилисты в шоке: какая игра света, какие фактуры!!!\n',
        petName + ' ВПЕРВЫЕ СЕЛ НА ГОРШОК\n<br>' +
        name + ' (' + age + ', из г. ' + city + ') совершил совершенно взрослый поступок, решив сесть на горшок.\n',
        petName + ' МЕТИТ НА ПРЕМИЮ GRAMMY\n<br>' +
        name + ' (' + age + ' из г. ' + city + ') готовится к музыкальному олимпу. Сегодня он 2 часа гремел новыми погремушками.',
        petName + ' ВПЕРВЫЕ СЕЛ НА ВЕЛОСИПЕД\n<br>' +
        name + ' (' + age + ', из г. ' + city + ') оседлал велосипед и отправился в путешествие. \n',
        petName + ' ' + customTitle + '<br>' +
        name + ' (' + age + ', из г. ' + city + ') ' + customDesc,
      ],
      girl: [
        petName + ' СДЕЛАЛА ПЕРВЫЙ ШАГ В БУДУЩЕЕ\n<br>' +
        name + ' (' + age + ', из г. ' + city + ') начала ходить. Исследовательница не сидит на месте — впереди миллионы новых открытий. \n',
        petName + ' ОТМЕЧАЕТ ГОДИК\n<br>' +
        name + ' (' + age + ' из г. ' + city + ') устраивает праздник по случаю своего первого дня рождения и приглашает Вас DD.MM.2018 в HH.ММ в Место!',
        petName + ' ОТПРАВИЛАСЬ В КРУГОСВЕТНОЕ ПУТЕШЕСТВИЕ\n<br>' +
        name + ' (' + age + ', из г. ' + city + ') проползла детскую. Путешественница не намерена останавливаться — ее ждет весь мир! \n',
        petName + ' ПОКОРИЛА КАЗНЕТ!\n<br>' +
        name + ' (' + age + ' из г. ' + city + ') стала самой популярной юной казахстанкой, активно познающей мир.',
        petName + ' СОВЕРШИЛА ОТКРЫТИЕ В ОБЛАСТИ МЕТАФИЗИКИ\n<br>' +
        name + ' (' + age + ', из г. ' + city + ') открыла Первый Закон Объятий: как бы далеко малышка ни уползала, мама всегда с ней.\n',
        petName + ' БЛИСТАЛА НА ПОДИУМЕ!\n<br>' +
        name + ' (' + age + ', из г. ' + city + ') — настоящая модница, и сегодня все взгляды на детской площадке были обращены на нее.\n',
        petName + ' УДИВИЛА МИРОВУЮ ОБЩЕСТВЕННОСТЬ\n<br>' +
        name + ' (' + age + ', из г. ' + city + ') сегодня сама съела приготовленную мамой кашу. Новость в семье не имеет прецедентов. \n',
        petName + ' — НОВЫЙ ВАН ГОГ!\n<br>' +
        name + ' (' + age + ' из г. ' + city + ') сегодня нарисовала маму. Картина обещает стать мировым шедевром!',
        petName + ' ГОТОВИТСЯ В ПРЕЗИДЕНТЫ\n<br>' +
        name + ' (' + age + ', из г. ' + city + ') произнесла первое слово, и ей безоговорочно повинуется вся семейная общественность\n',
        petName + ' В КНИГЕ РЕКОРДОВ ГИННЕСА\n<br>' +
        name + ' (' + age + ' из г. ' + city + ') может попасть в Книгу Рекордов Гиннеса как самый юный кулинар на планете!',
        petName + ' — НОВЫЙ ЧЕМПИОН! \n<br>' +
        name + ' (' + age + ', из г. ' + city + ') побила рекорд в познании мира. Имя (количество) раз проползла комнату. Домашний Олимп взят!\n',
        petName + ' ВЛЮБЛЕНА\n<br>' +
        name + ' (' + age + ' из г. ' + city + ') по-настоящему влюблена. Предметом любви стал самый прекрасный человек — мама!',
        petName + ' ОТМЕЧАЕТ ПЕРВУЮ ВАЖНУЮ ДАТУ\n<br>' +
        name + ' (35 дней, из г. ' + city + ') вот-вот станет большим человеком. Миллионы людей поздравляют Имя и родителей! \n',
        petName + ' ОТКРЫЛА СЕКРЕТ СЧАСТЬЯ\n<br>' +
        name + ' (' + age + ', из г. ' + city + ') доказала, что счастье спрятано в маленьких ручках, веселой улыбке и озорных глазках!\n',
        petName + ' ВПЕРВЫЕ ВЗЯЛА В РУКИ ЛОЖКУ\n<br>' +
        name + ' (' + age + ', из г. ' + city + ') взяла в руки ложку, тем самым выразив свое твердое намерение кушать самостоятельно!\n',
        petName + ' СОЗДАЛА ПЕРВЫЙ LOOK\n<br>' +
        name + ' (' + age + ' из г. ' + city + ') сегодня сама оделась. Стилисты в шоке: какая игра света, какие фактуры!!!',
        petName + ' ВПЕРВЫЕ СЕЛА НА ГОРШОК\n<br>' +
        name + ' (' + age + ', из г. ' + city + ') совершила совершенно взрослый поступок, решив сесть на горшок.\n',
        petName + ' МЕТИТ НА ПРЕМИЮ GRAMMY\n<br>' +
        name + ' (' + age + ', из г. ' + city + ') готовится к музыкальному олимпу. Сегодня она 2 часа гремела новыми погремушками.\n',
        petName + ' ВПЕРВЫЕ СЕЛА НА ВЕЛОСИПЕД\n<br>' +
        name + ' (' + age + ', из г. ' + city + ') оседлала велосипед и отправилась в путешествие. \n',
        petName + ' ' + customTitle + '<br>' +
        name + ' (' + age + ', из г. ' + city + ') ' + customDesc,
      ]
    };
    $('.news-content').html(data[sex][checkedAchiv - 1]);
  });

});
