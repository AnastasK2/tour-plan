var menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', function () {
  console.log(
    "Клик по кнопке меню"
  );
  document.querySelector(".navbar-bottom").classList.toggle("navbar-bottom--visible");
});

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

