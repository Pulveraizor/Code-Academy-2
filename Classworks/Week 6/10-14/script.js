//Pabandykime atlikti 5 masyvo (Array) operacijas.
//
//
//
//
//
// Sukurkite masyvą (Array) styles su elementais „Jazz“ ir „Blues“.
//
// Masyvo (Array) pabaigoje pridėkite „Rock-n-Roll“.
//
// Viduryje esančią reikšmę pakeiskite „Classics“.
//
// Panaikinkite pirmą masyvo (Array) elementą ir parodykite jį.
//
// Pridėkite į masyvo pradžią „Rap“ ir „Reggae“ į masyvą.

//Rezultatai:
// Jazz, Blues
// Jazz, Blues, Rock-n-Roll
// Jazz, Classics, Rock-n-Roll
// Jazz
// Classics, Rock-n-Roll
// Rap, Reggae, Classics, Rock-n-Roll

// let styles = [
//     'Jazz',
//     'Blues'
// ];
//
// console.log(styles);
// styles.push('Rock-n-Roll');
// console.log(styles);
// styles.splice(1, 1,'classics');
// console.log(styles);
// console.log(styles.slice(0,1));
// styles.splice(0, 1,);
// console.log(styles);
// styles.unshift('Rap', 'Reggae');
// console.log(styles);


//Sukurkite funkciją getMaxSubSum(arr),
// kuri sugrąžins masyvo (Array) visų
// įvestų skaičių, kurie yra didesni nei 0 sumą.


// let arr = [11, -2, 34, 45, 19, 6];
//
// function getMaxSubSum(arr) {
//     let result = 0;
//     for (i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             result += arr[i];
//         }
//     } return result;
// }
//
// console.log(getMaxSubSum(arr));
// console.assert(getMaxSubSum(arr) == 115);


//
// (3, 'a') => ['a', 'a', 'a']
// (4, 'b') => ['b', 'b', 'b', 'b']

// function triple (rep, value) {
//     return Array(rep).fill(value);
// }
//
// console.log(triple(3, 'a'));
// console.assert(triple(3, 'a') == ['a', 'a', 'a']);
// console.log(triple(4, 'b'));
// console.assert(triple(4, 'b') == ['b', 'b', 'b', 'b']);


let arr1 = [1, 2, 3, 4];
let arr2 = [1, 2, 3, 4];
let arr3 = [1, 2, 3, 5];
let arr4 = [1, 2, 3, 4, 5];


function isEqual (firstArr, secondArr) {
    if (firstArr.length !== secondArr.length) {
        return false
    } else {
        for (i = 0; i < firstArr.length; i++) {
            if (firstArr[i] !== secondArr[i]) {
                return false
            }
        } return true
    }
}

console.log(isEqual(arr1, arr2));
console.assert(isEqual(arr1, arr2) == true);
console.log(isEqual(arr1, arr3));
console.assert(isEqual(arr1, arr3) == false);
console.log(isEqual(arr1, arr4));
console.assert(isEqual(arr1, arr4) == false);
console.log(isEqual(arr3, arr4));
console.assert(isEqual(arr3, arr4) == false);
console.log(isEqual(arr4, arr4));
console.assert(isEqual(arr4, arr4));