function myName() {
  console.log("elya ");
}

myName();

function myFavouriteColor() {
  console.log("black");
}
myFavouriteColor();

function myNumber() {
  console.log(700133094);
}
myNumber();

function myBirthday() {
  console.log("May");
}

myBirthday();

function myMomName() {
  console.log("Asel");
}
myMomName();

function myFriend() {
  console.log("ajar");
}

myFriend();

function myInstagram() {
  console.log("elkoyyy");
}

myInstagram();

function favouriteFood() {
  console.log("mom food");
}

favouriteFood();

function thisYear() {
  console.log("rabbit");
}

thisYear();

function area(width, height) {
  let result = width * height;
  return result; // должен быть в конце функции return=возвращать
}

let a = area(5, 5);
let b = area(6, 6);

if (a <= b) {
  console.log("yes it does");
} else {
  console.log("no it doesn't");
}

function getUSD(kgs) {
  return kgs * 87.5;
}

let example1 = getUSD(100);
let example2 = getUSD(150);
console.log(example1);
console.log(example2);

function getFarenheit(c) {
  return c * 1.8 + 32;
}

let example3 = getFarenheit(28);
console.log(example3);

// мили в км
function getKilometer(km) {
  return km * 1.609;
}

let mill = getKilometer(30);
console.log(mill);

// дюймы в сантиметры
function getCm(cm) {
  return cm * 2.54;
}
let li = getCm(30);
console.log(li);

// тема циклы
let i = 1;
console.log(i);

i = 2;
console.log(i);

i = i + 1; // можем использовать * / + - (1 * 1 +1 / 1 так тоже можно)
console.log(i);

i += 1; // сокращенная версия (можно изменять -=, *=, /=)
console.log(i);

i++; // к число всегда добавляет 1, можно исползовать только ++,--
console.log(i);

//let num = 1; // цикл
//while (num <= 10) {
//console.log(num);
//num++; // num += 2 считает нечетные числа
//}

let num = 50; // если надо вывести нечетные числа нужно написать в let=нечетное, если четное let=четное
while (num <= 100) {
  console.log(num);
  num += 2;
}

let number = 10; // считает от 10 до 1
while (number >= 1) {
  console.log(number);
  number--;
}

// цикл при помощи for
for (let a = 1; a <= 10; a++) {
  console.log(a);
}

for (let b = 10; b >= 1; b--) {
  console.log(b);
}

let car1Fuel = 10;
let car2Fuel = 15;
let fuel = 50;

let distance = "";
for (let i = 0; i <= fuel; i += car1Fuel) {
  distance += "-";
}
console.log(distance);

distance = "";
for (let i = 0; i <= fuel; i += car2Fuel) {
  distance += "-";
}

console.log(distance);

// задача Фибоначчи

function fibonacci(num) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= num; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}
console.log(fibonacci(6));
