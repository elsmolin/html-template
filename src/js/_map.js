export const mapDefault = () => {
  if ($('#main-map').length) {
    var mapInterval = setInterval(function () {
      if (ymaps) {
        ymaps.ready(function () {
          var myMap = new ymaps.Map('main-map', {
            center: [55.752011, 37.785728],
            zoom: 17
          }, {
            searchControlProvider: 'yandex#search'
          })

          var BalloonHTML = `
            <div class="static-map_balloon">
              <div class="static-map_carousel-wrapper">
                <div class="main-carousel_btn">
                  <button class="btn_reset slick_btn -prev- js-slick-prev -default- icon-arrow" type="button"></button>
                  <button class="btn_reset slick_btn -next- js-slick-next -default- icon-arrow" type="button"></button>
                </div>
                <div class="static-map_carousel slick_init js-slick" data-slick="balloon">
                  {% for img in properties.imgs %}
                    <div class="static-map_carousel-item" style="background-image:url(./img/{{img}});"></div>
                  {% endfor %}
                </div>
              </div>
              <div class="col-12">
                <div class="w-100 btn_reset text_p -xl- -with_icon- -bold-">
                  <span class="icon-address"></span>
                  {{properties.address}}
                </div>
                <a href="tel:+{{properties.phone}}" class="w-100 text_p -xl- -with_icon- -bold-">
                  <span class="icon-phone"></span>
                  +{{properties.phone}}
                </a>
                <div class="w-100 text_p -xl- -with_icon-">
                  <span class="icon-clock"></span>
                  {{properties.time}}
                </div>
              </div>
            </div>
          `

          // Создание макета содержимого балуна.
          // Макет создается с помощью фабрики макетов с помощью текстового шаблона.
          var BalloonContentLayout = ymaps.templateLayoutFactory.createClass(BalloonHTML, {

            // Переопределяем функцию build, чтобы при создании макета начинать
            // слушать событие click на кнопке-счетчике.
            build: function () {
              // Сначала вызываем метод build родительского класса.
              BalloonContentLayout.superclass.build.call(this);
              // А затем выполняем дополнительные действия.
              // $('#count').html(counter);
              setTimeout(() => {
                // console.log($('#main-map .static-map_balloon').length);
              }, 400);
              this.onCounterClick()
            },

            // Аналогично переопределяем функцию clear, чтобы снять
            // прослушивание клика при удалении макета с карты.
            clear: function () {
              // Выполняем действия в обратном порядке - сначала снимаем слушателя,
              // а потом вызываем метод clear родительского класса.
              BalloonContentLayout.superclass.clear.call(this);
            },

            onCounterClick: elijah.slickDefault
          });
          var myPlacemark = new ymaps.Placemark([55.751411, 37.785728], {
            address: 'ул. Бориса Богаткова, 206',
            phone: '7 (913) 746-06-19',
            time: 'пн-пт: 10:00-21:00  сб-вс: 10:00-18:00',
            imgs: ['product.png', 'product.png', 'product.png']
          }, {
            iconLayout: 'default#image',
            // Опции.
            // Своё изображение иконки метки.
            // iconImageHref: 'img/placemark.png',
            iconImageHref: 'img/placemark.png',
            // Размеры метки.
            iconImageSize: [19, 25],
            // iconImageSize: [48, 57],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-8, -25],
            // iconImageOffset: [-24, -47],
            // preset: 'islands#darkBlueDotIcon',
            balloonMaxWidth: 370,
            balloonMinWidth: 370,
            // openBalloonOnClick: false,
            // balloonOpenBalloonOnClick: false,
            balloonContentLayout: BalloonContentLayout,
            // Запретим замену обычного балуна на балун-панель.
            // Если не указывать эту опцию, на картах маленького размера откроется балун-панель.
            balloonPanelMaxMapArea: 0
          });
          var myPlacemark2 = new ymaps.Placemark([55.752500, 37.787728], {
            address: 'ул. Бориса Богаткова, 206',
            phone: '7 (913) 746-06-19',
            time: 'пн-пт: 10:00-21:00  сб-вс: 10:00-18:00',
            imgs: ['product.png', 'product.png', 'product.png']
          }, {
            iconLayout: 'default#image',
            // Опции.
            // Своё изображение иконки метки.
            // iconImageHref: 'img/placemark.png',
            iconImageHref: 'img/placemark-check.png',
            // Размеры метки.
            // iconImageSize: [19, 25],
            iconImageSize: [48, 57],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            // iconImageOffset: [-8, -25],
            iconImageOffset: [-24, -47],
            // preset: 'islands#darkBlueDotIcon',
            balloonMaxWidth: 370,
            balloonMinWidth: 370,
            // openBalloonOnClick: false,
            // balloonOpenBalloonOnClick: false,
            balloonContentLayout: BalloonContentLayout,
            // Запретим замену обычного балуна на балун-панель.
            // Если не указывать эту опцию, на картах маленького размера откроется балун-панель.
            balloonPanelMaxMapArea: 0
          });


          // myPlacemark.events.add('balloonopen', function(e) {
          //   // myMap.geoObjects.each(function(e) {
          //   //   // var thisPlacemark = e.get('target')
          //   // })
          //   // console.log('click')
          //   // console.log(e.get('type'))
          //   var thisPlacemark = e.get('target');
          //   thisPlacemark.options.set('iconImageHref', 'img/placemark-check.png');
          //   thisPlacemark.options.set('iconImageSize', [48, 57]);
          //   thisPlacemark.options.set('iconImageOffset', [-24, -47]);
          //   // console.log({
          //   //   thisPlacemark
          //   // })
          //   // console.log({
          //   //   obje: myMap.geoObjects
          //   // })
          // })
          myMap.geoObjects.add(myPlacemark)
          myMap.geoObjects.add(myPlacemark2)
        });

        clearInterval(mapInterval)
      }
    }, 400);
  }
};