let h1 = document.createElement('h1');
h1.innerText = `The window height is ${window.innerHeight} and the width is ${window.innerWidth} pixels`;
document.body.appendChild(h1);

function reportWindowSize() {
    h1.innerText = `The window height is ${window.innerHeight} and the width is ${window.innerWidth} pixels`;
}
window.onresize = reportWindowSize;


// usikurkite objektų konstruktorių naudojant new pavadinimu Book,
// kuris galės kurti objektus,
// kurie turės šias savybes (properties): name, author, year ir metodus (naudojant prototype),
// kurių vienas parašys pavadinima ir autorių, o kitas parodys knygos amžių (senumą).

function Book(name, author, year) {
    this.name = name;
    this.author = author;
    this.year = year;
}

Book.prototype.getNameAndAuthor = function () {
    return `${this.name} ${this.author}`;
}
Book.prototype.getYear = function () {
    return this.year;
}
Book.prototype.getAge = function () {
    return (new Date).getFullYear() - this.year;
}

let books = [
    new Book('The Hobbit', 'J. R. R. Tolkien', 1937),
    new Book('Harry Potter and the Philosophers Stone', 'J. K. Rowling', 1997),
    new Book('The Little Prince', 'Antoine de Saint-Exupéry', 1943)
];

books.push(new Book('Dream of the Red Chamber', 'Cao Xueqin', '18th century'));
console.log(books);
for (let a of books) {
    console.log(`${a.getNameAndAuthor} ${a.getYear} ${a.getAge}`);
}