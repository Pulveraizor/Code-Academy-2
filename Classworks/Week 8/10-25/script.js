//Turite HTML dokumentą, kuriame yra pateiktas vienas div su id=”main”.
//
// UŽDUOTIS: Sukurti jam (jo vidui) tokį markup naudojant JavaScipt:

// <h2> tag’as su tekstu;
//
// <p> tag’as su tekstu;
//
// <ul> tag’as, kurio viduje yra 5 <li> su paveiksliukais;
//
// <p> tag’as su tekstu.

let main = document.querySelector('#main'),
    headline = document.createElement('h2'),
    paragraph = document.createElement('p'),
    uList = document.createElement('ul'),
    listItem = document.createElement('li');

headline.textContent = 'This is H1';

main.appendChild(headline);
main.appendChild(paragraph);

let lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab blanditiis consectetur consequatur, corporis dolore dolores eligendi enim et exercitationem fugiat inventore ipsam perspiciatis porro quam, quis reiciendis rem rerum temporibus.'

paragraph.textContent = lorem;

function getNewLiElement (tag, link, number) {
    for (i = 1; i <= number; i++) {
        let element = document.createElement(tag),
            image = document.createElement('img');
        image.src = link;
        element.appendChild(image);
        uList.appendChild(element);
    }
}

main.appendChild(uList);

getNewLiElement('li', 'https://via.placeholder.com/140x100', 5);

let paragraph2 = document.createElement('p');

paragraph2.textContent = lorem;

main.appendChild(paragraph2);