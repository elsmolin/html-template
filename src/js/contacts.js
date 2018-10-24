const contacts = () => {
  if ($('#map').length > 0) {
    ymaps.ready(init);

    function init() {
      // Создаем карту.
      const myMap = new ymaps.Map("map", {
        center: [55.001773, 82.851843],
        zoom: 14,
        // controls: []
      }, {
        searchControlProvider: 'yandex#search'
      });

      // Стилизуем контент на иконке
      // const MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      //   '<div style="color: #FFFFFF; font-weight: bold; text-align: center; width: 36px;">$[properties.iconContent]</div>'
      // );

      // Создаем точку на карте
      const point = new ymaps.Placemark([55.001773, 82.851843], {
        hintContent: 'Собственный значок метки',
        balloonContentHeader: 'Метка № 1',
        balloonContentBody: 'Не мысля гордый свет забавить,</br>' +
          'Вниманье дружбы возлюбя,</br>' +
          'Хотел бы я тебе представить</br>' +
          'Залог достойнее тебя,',
        // iconContent: '15'
      },{
        // iconLayout: 'default#imageWithContent',
        // iconLayout: 'default#image',
        // iconImageHref: '../img/icon-placemark.png',
        // iconImageSize: [30, 42],
        // iconImageOffset: [-15, -42],
        // iconContentOffset: [0, 10],
        // iconContentLayout: MyIconContentLayout,
      });

      // Добавляем точку на карту
      myMap.geoObjects.add(point);
    }
  }
}

export default contacts