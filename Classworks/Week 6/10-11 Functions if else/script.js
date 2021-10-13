// function sum (a, b) {
//     return a + b;
// }
//
// let currySum = function(func) {
//     return function (a) {
//         return function (b) {
//             return fnctn(a, b);
//         }
//     }
// }
//
// console.log(sum(1, 2));
// //currying

//Perrašykite šią “function declaration” būdu parašytą funkciją į “arrow function” (jeigu manote, kad reikia, sutvarkykite funkcijos kūną):


// let cities = ["Vilnius", "Kaunas", "Klaipėda", "Šiauliai", "Panevėžys", "Marijampolė"];
//
// let getFavoriteCity = (name, surname, city) => `${name} ${surname} favorite city is ${city}`;
//
// console.log(getFavoriteCity("Ernestas", "Rutkauskas", cities[5]));


//Parašykite funkciją checkNumber, turinčią vieną parametrą, kuri:
// Patikrins skaičius nuo 1 iki (begalybės - 1)
// Jei skaičius dalijamas iš 3, pamatysime "Skaičius dalijasi iš 3"
// Jei skaičius dalijamas iš 5, pamatysime "Skaičius dalijasi iš 5"
// Jei skaičius dalijamas iš 3 ir 5, pamatysime "Skaičius dalijasi iš 3 ir iš 5"
// Jei skaičius nesidalija iš 3 arba 5, pamatysime Skaičius "Skaičius nesidalija nei iš 3 nei iš 5"
// Iškvietus: console.log(checkNumber(15));
// Rezultatas: "Skaičius dalijasi iš 3 ir iš 5".

function checkNumber (x) {
    if (isNaN(x) === true) {
        console.log('please enter a number')
    } else {
        let byThree = x / 3;
        let byFive = x / 5;
        if (Number.isInteger(byThree) && !Number.isInteger(byFive)) {
            console.log('The number is divisible by 3');
        } else if (Number.isInteger(byFive) && !Number.isInteger(byThree)) {
            console.log('The number is divisible by 5');
        } else if (Number.isInteger(byThree) && Number.isInteger(byFive)) {
            console.log('The number is divisible by 3 and by 5');
        } else {
            console.log('The number is indivisible by either 3 or 5')
        }
    }
}
checkNumber('145552');