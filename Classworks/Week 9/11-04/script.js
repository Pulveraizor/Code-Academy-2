let automobile = new Car(
    'Ford',
    'Mondeo',
    2019
);

console.log(automobile.getIntroduction());
console.log(automobile.getAge());

let automobile2 = new Car(
    'Mazda',
    '626',
    1995
);

console.log(automobile2.getIntroduction());
console.log(automobile2.getAge());

let bike = new Motorcycle('Kawasaki', 'KX65', 2005, 4);
console.log(bike.getIntroduction());
console.log(bike.getAge());
console.log(bike.getWheelsNumber());