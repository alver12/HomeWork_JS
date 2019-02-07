
    ////////////////////////////////
///////////////TEST 1 - CALC///////////////////   
//////////////////////////////////////

var a;
var b;
var c;
var rez;
var num1;
var exit = false;
calc();
function calc(){
    var a = prompt ("Введите первое значение");
    console.log (a);
    // debugger;
    while (!check(a)){
        if (a===null){
            return;
        }else{
        alert ('Введите цифру!');
        a = prompt ("Введите первое значение");
        console.log (a);
        }
    }
    console.log (a);

    var b = prompt ("Введите второе значение");
    console.log (b);
    while (!check(b)){
        if (b===null){
            return;
        }else{
        alert ('Введите цифру!');
        b = prompt ("Введите второе значение");
        console.log (b);
        }
    }
    var c = prompt ("Введите необходимое значение: +, -, *, /");
    console.log (c);
    // debugger;
    
    while(['+','-','*','/'].indexOf(c) === -1){
        if (c===null){
            document.write("Вы вышли из калькулятора <br/>");
            return;
        }else{
        alert ('Введите знак!');
        c = prompt ("Введите знак");
        console.log (c);
        } 
    }
    switch(c) {
    case '+': 
        rez = a+b;
        document.write ("Результат:"+rez);
        break; 
    case '-': 
        rez = a-b;
        document.write ("Результат:"+rez);
        break; 
    case '*': 
        rez = a*b;
        document.write ("Результат:"+rez);
        break; 
    case '/':
        rez = a/b;
        document.write ("Результат:"+rez);
        break;  
    }
}

function check(num1) {
    var result = false; 
    if(isNaN(num1)){ 
     console.log(num1);
     //document.write(num1 + " is not a number <br/>");
     } else if(num1 === null){ 
         console.log(num1);
         document.write("Вы вышли из калькулятора <br/>");
      }else if(typeof num1 === 'undefined'){ 
         //document.write(num1 + " undefined <br/>");
         console.log(num1);
      }else if(num1===""){
        //document.write(num1 + "is empty <br/>");
        console.log(num1);
      }else{
          //document.write(num1 + " is a number <br/>");
          console.log(num1);
          result = true;
     }
     return result;
 }


    ////////////////////////////////
///////////////TEST 2 - MAP///////////////////   
//////////////////////////////////////

var mass = [1, 3, 5];

function math(item){
    return item*4;
}

function map(foo, arr){
    var mass1 = [];
    for (i=0; i<arr.length; i++){
    mass1.push(foo(arr[i]));
    }
return mass1;
} 
var a = map (math, mass);
console.log (a);

