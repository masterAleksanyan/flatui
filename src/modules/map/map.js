ymaps.ready(init);

function init () {
    // Создаем карту.
    var myMap = new ymaps.Map("map", {
            center: [47.60, 41.8],
            zoom: 9,
            controls: []
        });

    // Создаем метку.
    var myPlacemark = new ymaps.Placemark([47.60, 41.8], {
        hintContent: 'Собственный значок метки',
        balloonContent: 'Это красивая метка'
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'assets/img/geo_icon.svg',
        // Размеры метки.
        iconImageSize: [41, 56]
    });
    myMap.geoObjects.add(myPlacemark);
}