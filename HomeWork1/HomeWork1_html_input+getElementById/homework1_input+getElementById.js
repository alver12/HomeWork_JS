
function colors(){
    let color;
    color = prompt('Enter color: black, red, white, silver, gold');
    console.log('color:', color);
    if (color === 'black') {
        // phonePrice += 10;
        document.getElementById('pict').innerHTML = '<img src="https://cdn.comfy.ua/media/catalog/product/cache/4/thumbnail/395x554/9df78eab33525d08d6e5fb8d27136e95/a/p/apple_iphone_7_plus_256gb_black.jpg">';
        document.getElementById('color').blur();
    } else if (color === 'red') {
        // phonePrice += 20;
        document.getElementById('pict').innerHTML = '<img src="https://topgoods.com.ua/images/320x320/5d/4a/712895.jpeg">';
        document.getElementById('color').blur();
    } else if (color === 'white') {
        // phonePrice += 20;
        document.getElementById('pict').innerHTML = '<img src="https://www.unicode.kz/image/cache/data/iphone_6_silver-500x500.jpg">';
        document.getElementById('color').blur();
    } else if (color === 'silver') {
        // phonePrice += 20;
        document.getElementById('pict').innerHTML = '<img src="https://www.re-store.ru/upload/resize_cache/iblock/fc1/494_340_17f5c944b3b71591cc9304fac25365de2/fc16600eaa4bd91f7770d927c4ce554a.jpg">';
        document.getElementById('color').blur();
    } else if (color === 'gold') {
        // phonePrice += 20;
        document.getElementById('pict').innerHTML = '<img src="https://www.up-store.ru/upload/iblock/df9/df9e201d443fbc5bc5842f19bf024b4a.jpg">';
        document.getElementById('color').blur();
    } else if (color === null){
        // document.write ('Вы вышли из программы. Обновите приложение');
        document.getElementById('pict').innerHTML = 'Вы вышли из программы';
        document.getElementById('color').blur();
    } else{
        alert ('Не верно указан цвет. Укажите из предлагаемого перечня');
    }
}

function memorys(memory){
    console.log('memory:', memory);
    let price = 0;
    if (memory === 64) {
        price = 300;
    } else if (memory === 128) {
        price = 500;
    } else if (memory === 512) {
        price = 800;
    } else if (memory === 1000) {
        price = 1200;
    }
    document.getElementById('prc').innerHTML = 'Цена выбранной модели: ' + price + '$';
    document.getElementById('memory').blur();
}