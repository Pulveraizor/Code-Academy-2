//[21:28] Kirilas ČalkinDOM navigacija
//
//
// Sukurkite HTML dokumentą su lentele (table) ir forma (form). Dokumentu turi būti žemiau aptartos žymos (angl. tags) ir jų atributai.
//
//
//
// Suraskite ir konsolėje atvaizduokite:
//
//
//
// Lentelę su id = "age-table".

let ageTable = document.getElementById('age-table');

console.log(ageTable);

// Pirmasis <td> toje lentelėje (su id “age”).

let age = document.querySelector('#age > td')

console.log(age);

// Visus <label> elementus lentelės viduje (jų turėtų būti 3).

let label = document.querySelectorAll('label');

console.log(label);

// Pirmasis įvestį (<input>) į formą.

let firstInput = document.querySelector('input');

console.log(firstInput);

// Paskutinę įvestį (<input>) į formą.

let lastInput = document.querySelector('form > input:last-of-type');

console.log(lastInput);




