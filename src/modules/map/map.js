//if($('#map').length){
  ymaps.ready(function(){
    let map = document.querySelectorAll('.map');
    if(map.length){
      for(let i=0; i<map.length; i++){
        let cor = map[i].attributes['data-cor'].value.split(',');
        let center = map[i].attributes['data-center'].value.split(',');
        let zoom = map[i].attributes['data-zoom'].value;
        let icon = map[i].attributes['data-icon'].value;

        init(map[i], cor, center, zoom, icon);
      }
    }
  });
  
  function init (map, cor, center, zoom, icon) {
    // Создаем карту.
    var myMap = new ymaps.Map(map, {
            center: center,
            zoom: zoom,
            controls: []
        });

    // Создаем метку.
    var myPlacemark = new ymaps.Placemark(cor, {
        hintContent: 'Собственный значок метки',
        balloonContent: 'Это красивая метка'
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'assets/img/'+icon,
        // Размеры метки.
        iconImageSize: [41, 56]
    });
    myMap.geoObjects.add(myPlacemark);
  }
//}