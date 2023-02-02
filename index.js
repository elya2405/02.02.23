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

// дюймы в см
function getCm(cm) {
  return cm * 2.54;
}
let li = getCm(30);
console.log(li);
