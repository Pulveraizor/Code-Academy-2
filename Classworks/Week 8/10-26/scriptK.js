
let sliderImages = [
    'https://divaofthemoment.com/wp-content/uploads/2016/01/slider-home-v5-background.jpg',
    'https://i.pinimg.com/originals/0f/34/c5/0f34c5d0796f2c96ec945bfc01365006.jpg',
    'https://i.pinimg.com/564x/9d/c1/63/9dc16311b623164894673456d865abc7.jpg',
]
for (let key in sliderImages) {
    let image = document.createElement('img');
    image.style.display = 'none';
    image.src = sliderImages[key];
    image.id = 'img-' + key;
    section_1.appendChild(image);
}
let imgElements = section_1.querySelectorAll('img');
let imgIndex = 0;
function slide() {
    for (let img of imgElements) {
        img.style.display = 'none';
    }
    let currentIndex = imgIndex++ % imgElements.length;
    imgElements[currentIndex].style.display = 'block';
    console.log(imgElements[currentIndex]);
}
setInterval(slide, 2000);
Profile picture of Kirilas Čalkin.Message by Kirilas Čalkin
Kirilas Čalkin19:00
Benas
JavaScript
//Sukurkite HTML dokumentą, kuris <body> dalyje turės tris žymas, t.y. <header>, <main>, <footer>.
//
// <header> dalyje bus navigacijos meniu su 5 nuorodomis, kuris bus “Responsive” (mobilioje versjoje turi būti “toggler” mygtukas, kurį paspaudus atsiranda meniu).
//
// <main> dalyje bus trys <section>:
//
// Pirmas <section> turės pilno pločio ir aukčio “slider” foną, kuriame bus trys paveikslėliai, kurie keisis kas 2 sekundės;
//
// Antras <section> turės pilno pločio ir ne mažesnę nei 300px aukščio laikrodį (laikas rodomas kaip tekstas), kuriame bus matomos dabartinės valandos, minutės ir sekundės (atsinaujins realiu laiku);
//
// Trečias <section> turės kontaktų formą, kurią užpildžius, po ja pasirodys žinutė, kurioje nurodoma, kad forma užpildyta sėkmingai.
let main = document.createElement('main');
document.body.prepend(main);
// HEADER START
let header = document.createElement('header');
document.body.prepend(header);
let nav = document.createElement('nav');
header.appendChild(nav);
let burger = document.createElement('div');
burger.classList.add('burger');
burger.innerText = '☰';
nav.appendChild(burger);
burger.addEventListener('click', () => {
    if (navList.style.display === 'none') {
        navList.style.display = 'block';
    } else {
        navList.style.display = 'none';
    }
})
let navList = document.createElement('ul');
navList.classList.add('nav-list');
// navList.classList.add('d-none');
nav.appendChild(navList);
navList.style.display = window.getComputedStyle(navList).display;
let menuItems = [
    'Home',
    'About',
    'Options',
    'History',
    'Prices',
    'Contact us',
];
//5 <li> elements for <nav>:
for (let m of menuItems) {
    let element = document.createElement('li');
    element.innerText = m;
    navList.appendChild(element);
}
//HEADER END
let section_1 = document.createElement('section');
section_1.classList.add('slider');
let sliderImages = [
    'https://divaofthemoment.com/wp-content/uploads/2016/01/slider-home-v5-background.jpg',
    'https://i.pinimg.com/originals/0f/34/c5/0f34c5d0796f2c96ec945bfc01365006.jpg',
    'https://i.pinimg.com/564x/9d/c1/63/9dc16311b623164894673456d865abc7.jpg',
];
for (let key in sliderImages) {
    let image = document.createElement('img');
    image.style.display = 'none';
    image.src = sliderImages[key];
    image.id = 'img-' + key;
    section_1.appendChild(image);
}
let imgElements = section_1.querySelectorAll('img');
let imgIndex = 0;
function slide() {
    for (let img of imgElements) {
        img.style.display = 'none';
    }
    let currentIndex = imgIndex++ % imgElements.length;
    imgElements[currentIndex].style.display = 'block';
    // console.log(imgElements[currentIndex]);
}
setInterval(slide, 2000);
main.appendChild(section_1);
function clock () {
    let fullDate = new Date();
    let hours = (fullDate.getHours() < 10 ? '0' : '') + fullDate.getHours(),
        minutes = (fullDate.getMinutes() < 10 ? '0' : '') + fullDate.getMinutes(),
        seconds = (fullDate.getSeconds() < 10 ? '0' : '') + fullDate.getSeconds();
    let time = `${hours} : ${minutes} : ${seconds}`;
    section_2.innerText = time;
}
let section_2 = document.createElement('section');
section_2.classList.add('clock');
setInterval(clock, 1000);
main.appendChild(section_2);
let section_3 = document.createElement('section');
section_3.classList.add('contacts');
let form = document.createElement('form');
let labelName = document.createElement('label');
form.append(labelName);
labelName.innerText = 'Your Name:'
let inputName = document.createElement('input');
inputName.setAttribute('id', 'inputName');
form.append(inputName);
let labelEmail = document.createElement('label');
form.append(labelEmail);
labelEmail.innerText = 'Your Email address:';
let inputEmail = document.createElement('input');
inputEmail.setAttribute('id', 'inputEmail');
form.append(inputEmail);
let labelMsg = document.createElement('label');
form.append(labelMsg);
labelMsg.innerText = 'Type in your message:';
let inputMsg = document.createElement('textarea');
inputMsg.setAttribute('id', 'inputMsg');
form.append(inputMsg);
let submit = document.createElement('button');
form.append(submit);
submit.innerText = 'Send';
section_3.appendChild(form);
// let usernameElement = document.querySelector('#inputName'),
//     emailElement    = document.querySelector('#inputEmail'),
//     messageElement  = document.querySelector('#inputMsg');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let username = inputName.value,
        email    = inputEmail.value,
        message  = inputMsg.value;
    if (username == null || username == '') {
        alert('Please type in your name');
    } else if (email == null || email == '') {
        alert('Please type in your email address');
    } else if (message == null || message == '') {
        alert('Please type in your message');
    } else {
        submit.innerHTML = 'Your message was sent successfully';
        submit.disabled = true;
    }
});
main.appendChild(section_3);
let footer = document.createElement('footer');
footer.innerText = '© Code Academy';
document.body.append(footer);