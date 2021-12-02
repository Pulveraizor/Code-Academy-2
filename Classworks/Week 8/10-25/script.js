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
    uList = document.createElement('ul');

headline.textContent = 'This is H2';

main.appendChild(headline);
main.appendChild(paragraph);

let lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab blanditiis consectetur consequatur, corporis dolore dolores eligendi enim et exercitationem fugiat inventore ipsam perspiciatis porro quam, quis reiciendis rem rerum temporibus.'

paragraph.textContent = lorem;

function createNewElement (tag, number, content, appendTo) {
    if (typeof tag !== 'string') {
        console.log('The tag has to be a string');
    } else if (isNaN(number)) {
        console.log('Please enter a valid number');
    } else {
        for (i = 1; i <= number; i++) {
            let element = document.createElement(tag);
            if (tag === 'img'){
                element.src = content;
            }
            element.append(content);
            appendTo.appendChild(element);
        }
    }
}



main.appendChild(uList);

createNewElement('img', 5, 'https://via.placeholder.com/140x100', uList);

createNewElement('p', 1, lorem, main);






