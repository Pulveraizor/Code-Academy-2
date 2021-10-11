function makeParagraph (bgColor, fontColor, content) {
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

console.assert(document.body.children.length == 1);
console.assert('p' in document.body.children);