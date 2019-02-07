
var color = prompt ('Enter color: black, red, white, silver, gold');
var img;
var memory;
var price = 0;
console.log (color); 
if (color == 'black'){
    img = document.write ("<img src='https://cdn.comfy.ua/media/catalog/product/cache/4/thumbnail/395x554/9df78eab33525d08d6e5fb8d27136e95/a/p/apple_iphone_7_plus_256gb_black.jpg'>");  
} else if (color == 'red'){
    img = document.write ("<img src='https://topgoods.com.ua/images/320x320/5d/4a/712895.jpeg'>");  
} else if (color == 'white'){
    img = document.write ("<img src='https://www.unicode.kz/image/cache/data/iphone_6_silver-500x500.jpg'>");  
} else if (color == 'silver'){
    img = document.write ("<img src='https://www.re-store.ru/upload/resize_cache/iblock/fc1/494_340_17f5c944b3b71591cc9304fac25365de2/fc16600eaa4bd91f7770d927c4ce554a.jpg'>");  
} else if (color == 'gold'){
    img = document.write ("<img src='https://www.up-store.ru/upload/iblock/df9/df9e201d443fbc5bc5842f19bf024b4a.jpg'>");  
} else if (color == null){
    alert ('You exit from program');  
} else {
    alert ('We have not this color! Update the program and try again');
}
setTimeout(function() {
    if  (img=true){
            memory = prompt ('Enter memory (Gb): 64, 128, 512, 1000');
            console.log (memory);    
            if (memory == 64) {
                    price = 300;
                    document.write ('Price: ' + price + '$');
                } else if (memory == 128) {
                    price = 500;
                    document.write('Price: ' + price + '$');
                } else if (memory == 512) {
                    price = 800;
                    document.write('Price: ' + price + '$');
                } else if (memory == 1000) {
                    price = 1200;
                    document.write('Price: ' + price + '$');
                }else if (memory == null){
                        alert ('You exit from program');  
                } else{
                    document.write ('There is no such memory!');
            }
        }
}, 3000)


