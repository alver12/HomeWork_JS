var memories = [64, 128, 512, 1000];
var colors = ['black', 'red', 'white', 'silver', 'gold']; // *
var img;
var price = 300;
var memory;
var isMemorySucces = false;
var isColorSucces = false;
 
while (!isMemorySucces) {
  memory = prompt('Enter memory (Gb): 64, 128, 512, 1000');
  if (memory === null) {
    alert ('Exit!');
    break;
  }
  for (var i = 0; i < memories.length; i++) {
      console.log(i, memories[i]);
    if (memories[i] === +memory) {
        isMemorySucces = true;
        break;
    }
  }
  while (!isColorSucces) {
    color = prompt('Enter color: black, red, white, silver, gold');
    if (color === null) {
      alert ('Exit!');
      break;
    }
    for (var i = 0; i < colors.length; i++) {
        console.log(i, colors[i]);
      if (colors[i] === color) {
          isColorSucces = true;
          break;
      }
    }
  }
}

if (color === 'black'){
    img = 'https://cdn.comfy.ua/media/catalog/product/cache/4/thumbnail/395x554/9df78eab33525d08d6e5fb8d27136e95/a/p/apple_iphone_7_plus_256gb_black.jpg';
    if(memory === '64' ){
        price *= 1.1;
        document.write("<img src='" + img + "'>");
        document.write('<h1>PRICE: ' + price + '$</h1>');
    } else if (memory === '128'){
        price *= 1.2;
        document.write("<img src='" + img + "'>");
        document.write('<h1>PRICE: ' + price + '$</h1>');
    } else if (memory === '512'){
        price *= 1.3;
        document.write("<img src='" + img + "'>");
        document.write('<h1>PRICE: ' + price + '$</h1>');
    } else if (memory === '1000'){
        price *= 1.4;
        document.write("<img src='" + img + "'>");
        document.write('<h1>PRICE: ' + price + '$</h1>');
    } 
    } else if (color === 'red'){
        img = 'https://topgoods.com.ua/images/320x320/5d/4a/712895.jpeg';  
        if(memory === '64' ){
            price *= 1.2;
            document.write("<img src='" + img + "'>");
            document.write('<h1>PRICE: ' + price + '$</h1>');
        } else if (memory === '128'){
            price = 420;
            document.write("<img src='" + img + "'>");
            document.write('<h1>PRICE: ' + price + '$</h1>');
        } else if (memory === '512'){
            price = 520;
            document.write("<img src='" + img + "'>");
            document.write('<h1>PRICE: ' + price + '$</h1>');
        } else if (memory === '1000'){
            price = 620;
            document.write("<img src='" + img + "'>");
            document.write('<h1>PRICE: ' + price + '$</h1>');
        } 
    } else if (color === 'white'){
        img = 'https://www.unicode.kz/image/cache/data/iphone_6_silver-500x500.jpg';  
        if(memory === '64' ){
            price = 340;
            document.write("<img src='" + img + "'>");
            document.write('<h1>PRICE: ' + price + '$</h1>');
        } else if (memory === '128'){
            price = 440;
            document.write("<img src='" + img + "'>");
            document.write('<h1>PRICE: ' + price + '$</h1>');
        } else if (memory === '512'){
            price = 540;
            document.write("<img src='" + img + "'>");
            document.write('<h1>PRICE: ' + price + '$</h1>');
        } else if (memory === '1000'){
            price = 640;
            document.write("<img src='" + img + "'>");
            document.write('<h1>PRICE: ' + price + '$</h1>');
        } 
    }else if (color === 'silver'){
        img = 'https://www.re-store.ru/upload/resize_cache/iblock/fc1/494_340_17f5c944b3b71591cc9304fac25365de2/fc16600eaa4bd91f7770d927c4ce554a.jpg';  
        if(memory === '64' ){
            price = 350;
            document.write("<img src='" + img + "'>");
            document.write('<h1>PRICE: ' + price + '$</h1>');
        } else if (memory === '128'){
            price = 450;
            document.write("<img src='" + img + "'>");
            document.write('<h1>PRICE: ' + price + '$</h1>');
        } else if (memory === '512'){
            price = 550;
            document.write("<img src='" + img + "'>");
            document.write('<h1>PRICE: ' + price + '$</h1>');
        } else if (memory === '1000'){
            price = 650;
            document.write("<img src='" + img + "'>");
            document.write('<h1>PRICE: ' + price + '$</h1>');
        } 
    }else if (color === 'gold'){
        img = 'https://www.up-store.ru/upload/iblock/df9/df9e201d443fbc5bc5842f19bf024b4a.jpg';  
        if(memory === '64' ){
            price = 300;
            document.write("<img src='" + img + "'>");
            document.write('<h1>PRICE: ' + price + '$</h1>');
        } else if (color === 'gold' && memory === '128'){
            price = 400;
            document.write("<img src='" + img + "'>");
            document.write('<h1>PRICE: ' + price + '$</h1>');
        } else if (color === 'gold' && memory === '512'){
            price = 500;
            document.write("<img src='" + img + "'>");
            document.write('<h1>PRICE: ' + price + '$</h1>');
        } else if (color === 'gold' && memory === '1000'){
            price = 600;
            document.write("<img src='" + img + "'>");
            document.write('<h1>PRICE: ' + price + '$</h1>');
        } 
    } else{
    document.write("Exit");
}
console.log("img src='" + img + "'");   

 
console.log(memory);