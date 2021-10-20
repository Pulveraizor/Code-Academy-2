// Testuosime šį masyvą
let numbers = [5, 1, 7, 2, -9, 8, 2, 7, 9, 4, -5, 2, -6, -4, 6];
// 1. Parašykite funkciją arrDoubled, kuri sukuria ir grąžina naują masyvą, kurio elementai padauginti iš 2;
function arrDoubled (arr) {
  return arr.map(value => value * 2);
}
console.log('arrDoubled', arrDoubled(numbers));

// 2. Parašykite funkciją arrMultiplied, kuri sukuria ir grąžina naują masyvą, kurio elementai padauginti iš argumentu nurodyto skaičiaus

function arrMultiplied (arr, multiplier) {
  return arr.map(value => value * multiplier);
}
console.log('arrMultiplied', arrMultiplied(numbers, 5));

// 3. Parašykite funkciją arrCountTwos, kuri suskaičiuoja dvejetus masyve

function arrCountTwos (arr) {
  let result = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == 2) {
      result.push(arr[i]);
    }
  } return result.length;
}

console.log('arrCountTwos', arrCountTwos(numbers));

// 4. Parašykite funkciją arrIndexOfFirst, kuri grąžintu pirmo surasto, argumentu nurodyto skaičiaus, indeksą masyve. Jei skaičius nerastas funkcija turi grąžinti -1.

function arrIndexOfFirst (arr, number) {
  let result = -1;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == number) {
      result = arr.indexOf(number);
    }
  } return result;
}

console.log('arrIndexOfFirst', arrIndexOfFirst(numbers, -9));

// 5. Parašykite funkciją arrIndexOfLast, kuri grąžintu paskutinio surasto, argumentu nurodyto skaičiaus, indeksą masyve. Jei skaičius nerastas funkcija turi grąžinti -1.

function arrIndexOfLast (arr, number) {
  return arr.lastIndexOf(number);
}
console.log('arrIndexOfLast', arrIndexOfLast(numbers, 2));

// 6. Parašykite funkciją reverseNumbers, kuri pakeis skaičius vietomis taip, kad pirmas skaičius taps paskutiniu, antras piešpaskutiniu, o buvęs paskutinis taps pirmu, priešpaskutinis bus antru.
// Pvz.: Turime skaičius 32243;
// Iškvietus funkciją rezultata bus: 34223

function reverseNumbers (num) {
  let result = num.toString().split('').reverse().join('');
  return parseInt(result);
}

console.log('reverseNumbers', reverseNumbers(32243));

// 7. Parašykite  funkciją, kuri kaip argumentą priims skaičių masyvą ir suras atitinkamai mažiausią ir didžiausią skaičių bei juos grąžins.
// Pvz.: Turime masyvą: [8,5,4,2,7,1,9]
// Iškvietus funkciją rezultata bus: "Mažiausas: 1, Didžiausas: 9"

let numbers2 = [8,5,4,2,7,1,9];

function lowestHighest (arr) {
  return `Mažiausas: ${Math.min(...arr)}, Didžiausas: ${Math.max(...arr)}`;
}

console.log('lowestHighest', lowestHighest(numbers2));

// 8. Parašykite  funkciją checkForLetters, kuri priims du argumentus: Pirmas argumentas bus sakinys (arba žodžiai (-is)) ir antras argumentas bus raidė (kaip string). Funkcija turės suskaičiuoti kiek pirmu agrumentu nurodytame sakinyje/žodžiuose(-yje) yra antru argumentu nurodytų raidžių ir gražinti tų raidžių sumą su sakiniu pvz.: “Raidė “v” sakinyje rasta 4 kartus”.

let poem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, animi aspernatur beatae cupiditate doloremque ducimus, enim fuga itaque non obcaecati porro quas quia repellat sapiente ullam unde vel vitae voluptatum?';

function checkForLetters (sentence, symbol) {
  let result = sentence.split('').filter(a => a == symbol).length;
  return `Raide '${symbol}' sakinyje buvo rasta ${result} kartus`;
}
console.log('checkForLetters:', checkForLetters(poem, 'c'));

// 9. Parašykite funckiją, kuri ras visus skaičius esančius msyve ir gražins juos kaip atsikrą masyvą. Naujame masyve visi skaičiai bus surikiuoti nuo mažiausio iki didžiausio.

let arr2 = [8, 'Hello', 'click', 'u', 7, 4, 'a', 'a', 3, 6, "chair", ,10, 1];

function extractNumbers (arr) {
  return arr.filter(a => typeof a === 'number').sort((a, b) => a - b);
}
// Iškvietus funkciją rezultatas bus: [1,3,4,6,7,8,10];

console.log('extractNumbers', extractNumbers(arr2));

// 10. Sukurkite funkciję checkIfAllSmaller(arr, max), BE MASYVO METODŲ, kuri patikrintų ar visi skaičiai masyve yra didesni negu perduota reikšmė max;
// Pvz.: Turime masyvą: let arr1 = [2, 7, 6, 9, 5];
// Iškvietus funkciją checkIfAllSmaller(arr1, 5) rezultata bus: False

let arr1 = [2, 7, 6, 9, 5];

function checkIfAllSmaller (arr, max) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] <= max) {
      return false;
    }
  } return true;
}
console.log('checkIfAllSmaller', checkIfAllSmaller(arr1, 5));

// 11. Parašykite funkciją filteredByLetter, kuri turi du parametrus: 1. masyvas; 2. raidė. Funkcija sukuria ir grąžina naują masyvą, kuriame yra visi masyvo, nurodyto kaip pirmas
// parametras elemntai, kuriuose galima rasti antru paramatetru nurodytą raidę. Testuosime šį masyvą

let citiesOfLithuania = [
  'Vilnius',
  'Kaunas',
  'Klaipėda',
  'Šiauliai',
  'Panevėžys',
  'Alytus',
  'Marijampolė',
  'Mažeikiai',
  'Jonava',
  'Utena',
];

function filteredByLetter (arr, symbol) {
  let result = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i].includes(symbol)) {
      result.push(arr[i]);
    }
  } return result;
}
console.log('filteredByLetter', filteredByLetter(citiesOfLithuania, 'us'));

// 12. Parašykite penkias funkcijas:
// - calculateValue()
// - addition()
// - subtraction()
// - multiplication()
// - division()

// Pagridinė funkcija bus calculateValue(num1, num2, action), kuri priims tris argumentus: a) num1 - skaičius;b) num2 - skaičius; c) action - (matematinis veiksmas kaip string pvz. “substraction”). Būtina, kad funckija validuotų ar num1 ir num2 yra skaičiai.

// Priklausomai trečio argumento (action), su pirmais dviem (num1 ir num2) bus atliekamas matematinis veiksmas ir kviečiama viena iš keturių funkcijų, kurios priims du argumentus (num1 ir num2) ir grąžins atlikta veiksmą.

// Pastaba: šios funkcijos: addition(), subtraction(), multiplication(), division() turi būti kviečiamas calculateValue() viduje, o aprašomos išorėje.

let addition = (num1, num2) => num1 + num2;
let substraction = (num1, num2) => num1 - num2;
let multiplication = (num1, num2) => num1 * num2;
let division = (num1, num2) => num1 / num2;

function calculateValue(num1, num2, action) {
  if (isNaN(num1 || num2)) {
    return 'please enter a valid number';
  } else {
    return action(num1, num2);
  }
}

console.log('calculateValue', calculateValue(5, 3, substraction));