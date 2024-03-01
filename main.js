// 1)

let number = 10;
if(number % 2 && number == !0);
    console.log("Число является четным и не равно нулю");


// 2)

let d = 30;
if(d >= 10 ?? d <= 100){
    console.log("Число принадлежит диапазону от 10 - 100");
}else{
    console.log("Число не принадлежит диапазону от 10 - 100");
}


// 3)

let b = 44;
if(b % 2 ?? b >= 10){
    console.log("Число не является четным и больше 10");
}else{
    console.log("Число является четным и больше 10");
}


// 5)

alert(null || 2 || undefined); //2 = true, работает как (false || true || false)
alert(null || 2 && 3 || 4); //3,  первым выполнится 2 && 3 = 3. Получаем на выходе null || 3 || 4 = 3, так как 3 стоит первее 4
alert(!null || 2); //true, потому что !null = true и переменная 2 = true 
alert(!undefined || 0); //true, потому что !undefined = true, а 0 = false
let x;
alert(x ?? 5); //5, потому что переменной x не задали значение


// 6)

let array = ["frontend", "javascript", 5, "metalabs", true];
array[3] = 'MetaLabs';
array[5] = 'student';
console.log(array);
console.log(array.length);

