let names = [
    'Petras',
    'Brigita',
    'Jonas',
    'Sigita',
    'Benas',
    'Tomas',
    'Jurga',
    'Elena',
];

names = names.sort( () => .5 - Math.random());

console.log(names);

const userTitle = document.createElement('h1');

userTitle.innerText = 'Users:';

document.body.prepend(userTitle);

const ulElement = document.createElement('ul');

document.body.prepend(ulElement);