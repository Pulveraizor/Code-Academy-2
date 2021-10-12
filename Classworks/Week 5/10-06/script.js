// Parašykite funkciją min(a, b), kuri grąžina mažiausiai iš dviejų skaičių a ir b

// Pvz.:

// min(2, 5) == 2
//
// min(3, -1) == -1
//
// min(1, 1) == 1

function min(num1, num2) {
    if (num1 < num2) {
        return num1;
    } else if (num1 > num2) {
        return num2;
    } else if (num1 == num2) {
        return 'Skaiciai lygus';
    }
    else {
        return 'Iveskite skaicius';
    }
}

console.log(min(5, '6'));

(function (x) {
    console.trace(x)
})(7);

let min2 = (num1, num2) => {
    if (num1 < num2) {
        return num1;
    } else if (num1 > num2) {
        return num2;
    } else if (num1 == num2) {
        return 'Skaiciai lygus';
    }
    else {
        return 'Iveskite skaicius';
    }
}
console.log(min2(5, '6'));

let sumDigits = num => {
    num = num.toString();
    return num.length === 0 ? 0 : +num[0] + sumDigits(num.slice(1));
}

console.log(sumDigits(4321));

// function + Arrow
// Parašykite „JavaScript“ funkciją, kuri grąžina apverstą parametrą.

// 123 => 321
//
// abc => cba

function getReversed (x) {
    let str = x.toString();
    return str.reverse();
}

function reversedNum(num) {
    return num.toString().split('').reverse().join('')
}

console.log(reversedNum(123));

let reversedNumArrow = num => num.toString().split('').reverse().join('');

console.log(reversedNumArrow('abc'));