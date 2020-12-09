$(document).ready(function () {
  var menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', function () {
  console.log(
    "Клик по кнопке меню"
  );
  document.querySelector(".navbar-bottom").classList.toggle("navbar-bottom--visible");
});
//слайдер с фото отеля
var hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
  effect: "coverflow",
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});
//слайдер с отзывами
var reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});
//яндекс карта
// ymaps.ready(init);
// function init(){
//    var myMap = new ymaps.Map("map", {
//     center: [7.890703, 98.294772],
//      zoom: 17
//    });
//    // первый вариант создания геометки
//     // myGeoObject = new ymaps.GeoObject({
//     //    // Описание геометрии.
//     //    geometry: {
//     //      type: "Point",
//     //      coordinates: [7.890703, 98.294772]
//     //     },
//     //     properties: {
//     //       // Контент метки.
//     //       iconContent: 'Hilton Phuket',
//     //       hintContent: 'DoubleTree by Hilton Phuket Banthai Resort'
//     //   }
//     // }, {
//     //    // Опции.
//     //    // Иконка метки будет растягиваться под размер ее содержимого.
//     //   preset: 'islands#blackStretchyIcon',
//     //  });
//     //  myMap.geoObjects.add(myGeoObject);
//     // второй вариант создания геометки
//      myMap.geoObjects.add(new ymaps.Placemark([7.890703, 98.294772], {
//       balloonContent: '<strong>DoubleTree by Hilton Phuket Banthai Resort</strong>',
//       hintContent: 'DoubleTree by Hilton Phuket'
//     }, {
//       preset: 'islands#dotIcon',
//       iconColor: '#735184',
//     }));
// }

//модальное окно
  var modalButton = $('[data-toggle=modal]');
  var closeModalButton = $('.modal__close');
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);
  function openModal (){
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.addClass('modal__overlay--visible');
    modalDialog.addClass('modal__dialog--visible');
  }
  function closeModal (event){
    event.preventDefault();
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
  }
  //обработка форма
  $(".form").each(function (){
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "Name must be more 2 symbols"
        },
        mail: {
          required: "Please enter your email address",
          mail: "Your email address must be in the format of name@domain.com"
        },
        phone: {
          required: "Please enter your phone number",
        }
      },
    });
  });

  $('.phone').mask('+7(000) 000-00-00');
  AOS.init();
});