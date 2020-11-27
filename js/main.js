var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },
  effect: "coverflow",
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});

ymaps.ready(init);
function init(){
   var myMap = new ymaps.Map("map", {
    center: [7.890703, 98.294772],
     zoom: 17
   });
   // первый вариант создания геометки
    // myGeoObject = new ymaps.GeoObject({
    //    // Описание геометрии.
    //    geometry: {
    //      type: "Point",
    //      coordinates: [7.890703, 98.294772]
    //     },
    //     properties: {
    //       // Контент метки.
    //       iconContent: 'Hilton Phuket',
    //       hintContent: 'DoubleTree by Hilton Phuket Banthai Resort'
    //   }
    // }, {
    //    // Опции.
    //    // Иконка метки будет растягиваться под размер ее содержимого.
    //   preset: 'islands#blackStretchyIcon',
    //  });
    //  myMap.geoObjects.add(myGeoObject);
    // второй вариант создания геометки
     myMap.geoObjects.add(new ymaps.Placemark([7.890703, 98.294772], {
      balloonContent: '<strong>DoubleTree by Hilton Phuket Banthai Resort</strong>',
      hintContent: 'DoubleTree by Hilton Phuket'
    }, {
      preset: 'islands#dotIcon',
      iconColor: '#735184',
    }));
}
