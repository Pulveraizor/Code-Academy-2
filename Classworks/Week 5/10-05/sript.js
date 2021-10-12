// Muzikinės grupės turi specialius pavadinimus pagal žmonių skaičių grupėje. Pvz., „kvartetas“ yra muzikinė grupė, kurią sudaro keturi muzikantai.
//
//     Parašykite sąlyginių teiginių seriją (else...if statements), kuri:
//
//
//
//     Atspausdins consolėje "ne grupė" jei muzikantų yra mažiau ar lygu 0;
//
// Atspausdins consolėje "solo" jei muzikantų yra 1;
//
// Atspausdins consolėje "duetas" jei muzikantų yra 2;
//
// Atspausdins consolėje "trio" jei muzikantų yra 3;
//
// Atspausdins consolėje "kvartetas" jei muzikantų yra 4;
//
// Atspausdins consolėje "didelė grupė" jei muzikantų yra daugiau nei 4.

// Įsitikinkite, kad išbandėte savo kodą su skirtingomis vertėmis.

//     Pvz., Jeigu muzikantų yra 3, tada "trio" turi būti atspausdinama consolėje.

// let musicians = 11;
//
//  if (musicians == 1) {
//     console.log('Solo')
// } else if (musicians == 2) {
//     console.log('Duetas')
// } else if (musicians == 3) {
//     console.log('Trio')
// } else if (musicians == 4) {
//     console.log('Kvartetas')
// } else if (musicians > 4) {
//     console.log('didelė grupė')
// } else {
//      console.log('Ne grupe')
// };

function sumDigits(num) {
    num = num.toString();
    return num.length === 0 ? 0 : +num[0] + sumDigits(num.slice(1));
}

console.log(sumDigits(4321));

let num = '4321';
console.log(num.slice(1));