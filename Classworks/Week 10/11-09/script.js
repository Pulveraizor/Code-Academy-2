window.addEventListener('DOMContentLoaded', appendPosts);

let table = document.createElement('table'),
    tBody = document.createElement('tbody');


table.style.border = 'solid black 2px';
table.style.borderCollapse = 'collapse';
table.style.textAlign = 'center';
document.body.prepend(table);
table.appendChild(tBody);


function getPosts() {
    return new Promise(function(resolve) {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => resolve(data))
    })
}

function appendPosts() {

    let tRow = document.createElement('tr');
    tRow.style.border = 'solid black 2px';
    tBody.appendChild(tRow);

    let headers = ['id', 'userId', 'title', 'body'];

    for (let index of headers) {
        let tHead = document.createElement('th');
        tHead.style.border = 'solid black 2px';
        tHead.textContent = index;
        tRow.appendChild(tHead)
    }

    getPosts().then(posts => {
        for (let post of posts) {
            let tRow = document.createElement('tr');
            tRow.style.border = 'solid black 2px';
            tBody.appendChild(tRow);

            let records = [post.userId, post.id, post.title, post.body];
            for (let record of records) {
                let tData = document.createElement('td');
                tData.style.border = 'solid black 2px';
                tData.textContent = record;
                tRow.appendChild(tData);
            }
        }
    })
}