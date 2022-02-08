document.addEventListener('DOMContentLoaded', loadAllBooks());

let all = document.querySelector('#all');
let viewModalBody = document.querySelector('#viewdetails div.modal-body');
let deleteModalBody = document.querySelector('#deletebook div.modal-body');


function loadAllBooks() {
  fetch('../Src/retrieve.php').then(
    function (response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      response.json().then(function (data) {
        all.innerHTML = '';
        for (let book of data) {
          let tr = document.createElement('tr');
          tr.setAttribute('id', book.isbn);
          let th = document.createElement('th');
          th.setAttribute('data-type', 'isbn');
          th.innerText = book.isbn;
          let title = document.createElement('td');
          title.setAttribute('data-type', 'title');
          title.innerText = book.title;
          let author = document.createElement('td');
          author.setAttribute('data-type', 'author');
          author.innerText = book.author;
          let action = document.createElement('td');
          action.setAttribute('data-type', 'action');
          action.setAttribute('class', 'mt-5');
          let btnView = document.createElement('button');
          btnView.setAttribute('class', 'btn btn-primary');
          btnView.setAttribute('data-btn-type', 'view');
          btnView.setAttribute('data-bs-toggle', 'modal');
          btnView.setAttribute('data-bs-target', '#viewdetails');
          btnView.innerHTML = '<i class="fas fa-eye"></i>';
          btnView.addEventListener('click', function () {viewDetails(book.isbn);});
          let btnUpdate = document.createElement('button');
          btnUpdate.setAttribute('class', 'btn btn-secondary');
          btnUpdate.setAttribute('data-btn-type', 'update');
          btnUpdate.setAttribute('data-bs-toggle', 'modal');
          btnUpdate.setAttribute('data-bs-target', '#updatebook');
          btnUpdate.innerHTML = '<i class="far fa-edit"></i>';
          btnUpdate.addEventListener('click', function() {updateBook(book.isbn);});
          let btnDelete = document.createElement('button');
          btnDelete.setAttribute('class', 'btn btn-danger');
          btnDelete.setAttribute('data-btn-type', 'delete');
          btnDelete.setAttribute('data-bs-toggle', 'modal');
          btnDelete.setAttribute('data-bs-target', '#deletebook');
          btnDelete.innerHTML = '<i class="far fa-trash-alt"></i>';
          btnDelete.addEventListener('click', function() {deleteBook(book.isbn);});
          all.append(tr);
          tr.append(th);
          tr.append(title);
          tr.append(author);
          tr.append(action);
          action.append(btnView);
          action.append(btnUpdate);
          action.append(btnDelete);
        }
      }
      );
    }
  )
    .catch(function (err) {
      console.log('Fetch Error :-S', err);
    });
}

function viewDetails(isbn) {
  fetch(`../Src/retrieveSingle.php?isbn=${isbn}`).then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      response.json().then(function(book) {
        let isbnView = document.querySelector('#isbnView');
        isbnView.innerText = book.isbn;
        let titleView = document.querySelector('#titleView');
        titleView.innerText = book.title;
        let authorView = document.querySelector('#authorView');
        authorView.innerText = book.author;
        let genreView = document.querySelector('#genreView');
        genreView.innerText = book.genre;
        let yearView = document.querySelector('#yearView');
        yearView.innerText = book.year;
        }
      );
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}

function addBook() {
  let author = document.getElementById('author').value;
  let title = document.getElementById('title').value;
  let genre = document.getElementById('genre').value;
  let year = document.getElementById('year').value;
  let isbn = document.getElementById('isbn').value;

  let req = new XMLHttpRequest();
  let data = new FormData();
  data.append('author', author);
  data.append('title', title);
  data.append('genre', genre);
  data.append('year', year);
  data.append('isbn', isbn);
  req.addEventListener('load', function() {loadAllBooks()});
  req.open("POST", '../Src/create.php');
  req.send(data);
}

function deleteBook(isbn) {
  let deleteBtn = document.getElementById('submitDelete');
  deleteModalBody.innerHTML = `Are you sure you want to <strong>delete</strong> book with ISBN <strong>${isbn}</strong>?`;

  deleteBtn.addEventListener('click', function () {
    let req = new XMLHttpRequest();
    let data = new FormData();
    data.append('isbn', isbn);
    req.addEventListener('load', function() {loadAllBooks()});
    req.open("POST", '../Src/delete.php');
    req.send(data);
  })
}

function updateBook(isbn) {
  let book = null;
  function reqListener() {
    book = JSON.parse(this.response);

    let isbnUpdate = document.querySelector('#isbnUpdate');
    isbnUpdate.setAttribute('value', book.isbn);
    let titleUpdate = document.querySelector('#titleUpdate');
    titleUpdate.setAttribute('value', book.title);
    let authorUpdate = document.querySelector('#authorUpdate');
    authorUpdate.setAttribute('value', book.author);
    let genreUpdate = document.querySelector('#genreUpdate');
    genreUpdate.setAttribute('value', book.genre);
    let yearUpdate = document.querySelector('#yearUpdate');
    yearUpdate.setAttribute('value', book.year);
  }

  let req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", `../Src/retrieveSingle.php?isbn=${isbn}`);
  req.send();
  console.log('update request for' + isbn);

  let submitUpdate = document.getElementById('submitUpdate');
  submitUpdate.addEventListener('click', function () {
    let req = new XMLHttpRequest();
    let data = new FormData();
    data.append('id', book.id);
    data.append('author', authorUpdate.value);
    data.append('title', titleUpdate.value);
    data.append('genre', genreUpdate.value);
    data.append('year', yearUpdate.value);
    data.append('isbn', isbnUpdate.value);
    req.addEventListener('load', function() {loadAllBooks()});
    req.open("POST", '../Src/update.php');
    req.send(data);
    console.log('updated');
  })
}