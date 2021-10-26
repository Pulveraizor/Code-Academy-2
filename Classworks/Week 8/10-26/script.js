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
nav.appendChild(navList);


//5 <li> elements for <nav>:
for (i = 1; i <= 5; i ++) {
    let element = document.createElement('li');
    navList.appendChild(element);
}

let navItem1 = document.querySelector('li');
navItem1.innerText = 'Home';

let navItem2 = document.querySelector('li:nth-of-type(2)');
navItem2.innerText = 'About';

let navItem3 = document.querySelector('li:nth-of-type(3)');
navItem3.innerText = 'Options';

let navItem4 = document.querySelector('li:nth-of-type(4)');
navItem4.innerText = 'History';

let navItem5 = document.querySelector('li:last-of-type');
navItem5.innerText = 'Contact us';

//HEADER END

// 3 <section> elements:
for (i = 1; i <= 3; i ++) {
    let element = document.createElement('section');
    main.appendChild(element);
}

let section_1 = document.querySelector('section');
section_1.classList.add('slider');

let sliderImages = [
    'https://lh3.googleusercontent.com/proxy/KT5wNwxaR0XCvs_2O2wrusnoMbuoMm209o5eLLShzRKJTXT0f2P5RiNNSZLL91IFNuctvMdg9TJ23DL1e-EMXXqxdciJuoEXuEXtzXETYWNEvOUk9Kzy0b_AoUwjJ5XTsvaowuljzQ',
    'https://divaofthemoment.com/wp-content/uploads/2016/01/slider-home-v5-background.jpg',
    'https://i.pinimg.com/originals/0f/34/c5/0f34c5d0796f2c96ec945bfc01365006.jpg'
]

let image1 = document.createElement('img'),
    image2 = document.createElement('img'),
    image3 = document.createElement('img');

image2.style.display = 'none';
image3.style.display = 'none';

    image1.src = sliderImages[0];
    image2.src = sliderImages[1];
    image3.src = sliderImages[2];

    section_1.appendChild(image1);
    section_1.appendChild(image2);
    section_1.appendChild(image3);

setInterval(() => {
        if (image1.style.display === 'block') {
            image1.style.display = 'none';
            image2.style.display = 'block';
            image3.style.display = 'none';
        }
        else if (image2.style.display === 'block') {
            image1.style.display = 'none';
            image2.style.display = 'none';
            image3.style.display = 'block';
        } else {
        image1.style.display = 'block';
        image2.style.display = 'none';
        image3.style.display = 'none';
    }
}, 2000)

function clock () {
    let fullDate = new Date();
    let hours = (fullDate.getHours() < 10 ? '0' : '') + fullDate.getHours(),
        minutes = (fullDate.getMinutes() < 10 ? '0' : '') + fullDate.getMinutes(),
        seconds = (fullDate.getSeconds() < 10 ? '0' : '') + fullDate.getSeconds();
    let time = `${hours} : ${minutes} : ${seconds}`;

    section_2.innerText = time;
}

let section_2 = document.querySelector('section:nth-child(2)');
section_2.classList.add('clock');

setInterval(clock, 1000);

let section_3 = document.querySelector('section:last-child')
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

submit.addEventListener('click', (event) => {

    let username = document.querySelector('#inputName').value,
        email = document.querySelector('#inputEmail').value,
        message = document.querySelector('#inputMsg').value;

    if (username == null || username == '') {
        alert('Please type in your name');
    } else if (email == null || email == '') {
        alert('Please type in your email address');
    } else if (message == null || message == '') {
        alert('Please type in your message');
    } else {
        submit.innerHTML = 'Your message was sent successfully';
    }
    event.preventDefault();
})

let footer = document.createElement('footer');
footer.innerText = '© Code Academy';
document.body.append(footer);