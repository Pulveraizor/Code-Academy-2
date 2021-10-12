function makeParagraph (bgColor = 'gray', fontColor = 'white', content = 'Text') {
    let paragraph = document.createElement('p'),
        text = document.createTextNode(content);
    paragraph.appendChild(text);
    paragraph.style.backgroundColor = bgColor;
    paragraph.style.color = fontColor;
    document.body.appendChild(paragraph);
}
makeParagraph('orange', 'gray',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
    'Asperiores distinctio doloribus');

makeParagraph();

console.assert(document.body.children.length == 2);
console.assert(document.getElementsByTagName('p').length >= 1);