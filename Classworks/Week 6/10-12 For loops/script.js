// Naudodami for, while, doWhile ciklus parašykite
// visus lyginius skaičiuos nuo 2 iki 10;

for (i = 2; i <= 10; i++ ) {
    if (i % 2 == 0) {
        console.log('for ', i);
    }
}
let x = 2;
while (x <= 10) {
    if (x % 2 == 0) {
        console.log('while ', x);
    }
    x++;
}
x = 2;

do {
    if (x % 2 == 0) {
        console.log('do while ', x);
    }
    x++;
} while (x <= 10);

//Parašykite funkciją, pavadintą getLaugh(),
// kuri turi vieną parametrą, skaičių, kuris žymi
// sugrįžtančių „ha“ skaičių.
// patarimas: gali prireikti for ciklo (loop)!

// function getLaugh (repeat) {
//     let laugh = 'ha';
//     let result = '';
//     for (i = 1; i <= repeat; i++) {
//          result += laugh;
//     }
//     console.log(result);
// }
//
// getLaugh(8);

//Parašykite funkciją (arrow function),
// pavadintą getHighestNumber, kurios tikslas
// yra leisti vartotojui, kaip argumentus nurodyti
// bet kokius skaičius ir grąžinama bus didžiausias
// skaičius iš visų nurodytų.
//
// Surasti didžiausia skaičių butina panadojus ciklą
//
//
// let getHighestNumber = (...num) => {
//     let numArray = [...num];
//     let largest = numArray[0] || null;
//     let number = null;
//     for (let i = 0; i < numArray.length; i++) {
//         number = num[i];
//         largest = Math.max(largest, number);
//     }
//     return largest;
// }
// console.log(getHighestNumber(11,15,73))
// console.assert(getHighestNumber(34,7,8,55,6,56,7,9,52) == 56);

//Panaudojant ciklus parodykitė tokias reikšmes:
// 111222333444555666777888999
// 11 12 13 21 22 23 31 32 33

let result = '';
    for (i = 1; i <= 9; i++) {
        result += i.toString().repeat(3);
    }

console.log(result);
console.assert(result == '111222333444555666777888999');

result = '';

for (i = 1; i <= 3; i++) {
    for (x = 1; x <= 3; x++) {
        result += i.toString() + x.toString() + ' ';
    }
}
result = result.trimRight();

console.log(result);
console.assert(result == '11 12 13 21 22 23 31 32 33');

