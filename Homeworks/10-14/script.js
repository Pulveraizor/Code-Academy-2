// //Parašykite 2 skirtingas funkcijas,
// // kurios apverčia masyvą atvirkštine tvarka.
//
let data = [1, 2, 3, 4];

let reverseArray = arr => arr.reverse();

console.log(reverseArray(data));
console.assert(JSON.stringify(reverseArray(data)) == JSON.stringify([4, 3, 2, 1]));

data = [1, 2, 3, 4];

function reverse2(arr) {
    let result = [];
    for (i = arr.length-1; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result;
}

console.log(reverse2(data));
console.assert(JSON.stringify(reverse2(data)) == JSON.stringify([4, 3, 2, 1]));
//
// // //Parašykite funkciją, kuri grąžiną švarų masyvą.
//
// const dirtyData = [0, 1, false, 2, undefined, '', 3, null, 'b', 5];
//
// function cleanArray (arr) {
//     return arr.filter(function callbackFn (value) {
//         return value;
//     });
// }
//
// console.log(cleanArray(dirtyData));
// console.assert(JSON.stringify(cleanArray(dirtyData)) == JSON.stringify([1, 2, 3]));