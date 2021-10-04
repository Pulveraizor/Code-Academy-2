// let  first = prompt('please insert the first number'),
//     second = prompt('please insert the second number'),
//     sum = parseInt(first) + parseInt(second);
// console.log(sum);
//
//
// document.write('the sum is', ' ', sum);

let first = (Math.random() * 10).toFixed(2),
    second = (Math.random() * 10).toFixed(2),
    third = (Math.random() * 10).toFixed(2),
    fourth = (Math.random() * 10).toFixed(2),
    fifth = (Math.random() * 10).toFixed(2);
console.log(first, second, third, fourth, fifth);
console.log('The highest value is ', Math.max(first, second, third, fourth, fifth), ' and the lowest value is ', Math.min(first, second, third, fourth, fifth));
