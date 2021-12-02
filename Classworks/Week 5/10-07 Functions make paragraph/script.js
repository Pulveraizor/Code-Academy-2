// // Parašykite  „JavaScript“ funkciją "makeParagraph", kuri priima kaip parametrus: fono spalvą, teksto spalvą, tekstą ir įrašo pastraipą atitinkamais stiliais, naudodama document.write() metodą.
// //     P.S
// // Panaudokite "default" parametrų reikšmes
//
// // function alphabetOrder (str) {
// //     return str.toString().split('').sort().join('');
// // }
// // console.log(alphabetOrder(10478));
// //
// // console.assert(alphabetOrder(10478) == 01478);
//
// //Parašykite „JavaScript“ funkciją, kuri priima eilutę kaip parametrą ir grąžina ilgiausią eilutės žodį.
//
// function longestWord (sentence) {
//     let words = sentence.toString().split(' ');
//     let longestWord = words.sort(function(a, b) {
//         return b.length - a.length;
//     })
//     return longestWord[0];
// }
// console.assert(longestWord('This is my newest fabulous testing sentence') == 'fabulous');
//
// //
// //let max = findSpecificWord('Lorem ipsum, dolor sit amet consectetur', 'max');
// // let min = findSpecificWord('Lorem ipsum, dolor sit amet consectetur', 'min');
// // console.log(max);
// // console.log(min);
// // console.assert(max == 'consectetur');
// // console.assert(min == 'sit');
//
// // function findSpecificWord (sentence, condition) {
// //     if (condition == 'max') {
// //         let words = sentence.toString().split(' ');
// //         let longestWord = words.sort(function(a, b) {
// //             return b.length - a.length;
// //         })
// //         return longestWord[0];
// //     } else if (condition == 'min') {
// //         let words = sentence.toString().split(' ');
// //         let shortestWord = words.sort(function(a, b) {
// //             return a.length - b.length;
// //         })
// //         return shortestWord[0];
// //     } else {
// //         console.log('Please enter a valid condition (min or max)');
// //     }
// // }
// //
// // let max = findSpecificWord('Lorem ipsum, dolor sit amet consectetur', 'max');
// // let min = findSpecificWord('Lorem ipsum, dolor sit amet consectetur', 'min');
// //
// // console.assert(min == 'sit');
// // console.assert(max == 'consectetur');
//
//
// // function joinStuff () {
// //     return ([...arguments].join(''));
// // }
// // console.log(joinStuff(1,5,6,7,8, 'abc'));
// // console.assert(joinStuff(1,5,6,7,8) == 15678);
//
// //Parašykite  „JavaScript“ funkciją "makeParagraph", kuri priima kaip parametrus: fono spalvą, teksto spalvą, tekstą ir įrašo pastraipą atitinkamais stiliais, naudodama document.write() metodą.
// // P.S
// // Panaudokite "default" parametrų reikšmes
//
// function makeParagraph (bgColor, fontColor, content) {
//     let paragraph = document.createElement('p'),
//         text = document.createTextNode(content);
//     paragraph.appendChild(text);
//     paragraph.style.backgroundColor = bgColor;
//     paragraph.style.color = fontColor;
//     document.body.appendChild(paragraph);
// }
// makeParagraph('orange', 'gray',
//     'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
//     'Asperiores distinctio doloribus');
//
// console.assert(document.body.children.length == 1);
// console.assert('p' in document.body.children);

// let a = 0;
// let b = 'aloha';
// let c = 15;
//
// console.log(c/a);
//
// let arr = [];
// arr[1] = 1;
// arr[3] = 33;
//
// console.log(arr)

// let a = new Array("a","b");
// let a = [ "a", "b" ];
// let a = "a,b".split(",");

// let a = ( "a", "b" );
// console.log(a);
//
for (i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
};
//
// let obj = {
//     "0": 1,
//     0: 2
// }
//
// console.log(obj["0"] + obj[0]);

// function User() {}
//     User.prototype = {admin: false};
//     let user = new User();
//     User.prototype = {admin: true};
//     console.log(user.admin);
//
//     let f = function g() {
//         return 23;
//     };
//
//     console.log(typeof g());

// let a = {} "a", "b" };
//
//     console.log(a);
//
    let x = 5;

    console.log(++x);
//
    console.log(20e-1['toString'](2));