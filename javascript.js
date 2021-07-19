let myLibrary = [];

function book(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
};

book.prototype.addBookToLibrary = function() {
  myLibrary.push(this);
};

book.prototype.render = function() {
  let i = myLibrary.length-1;

  const bookLib = document.getElementById('books');
  const div = document.createElement('div');
  const ulist = document.createElement('ul');
  const list = document.createElement('li');
  const readButton = document.createElement('button');

  div.setAttribute('id', this.title);
  div.classList.add('aBook');
  bookLib.appendChild(div.cloneNode(true));

  list.innerHTML = this.title;
  ulist.appendChild(list.cloneNode(true));
  list.innerHTML = this.author;
  ulist.appendChild(list.cloneNode(true));
  list.innerHTML = this.pages;
  ulist.appendChild(list.cloneNode(true));
  list.innerHTML = this.read;
  list.setAttribute('id', 'read' + i );
  ulist.appendChild(list.cloneNode(true));
  document.getElementById(this.title).appendChild(ulist.cloneNode(true));

  readButton.innerHTML = 'Read?';
  readButton.classList.add('readButton');
  readButton.setAttribute('id', i);
  document.getElementById(this.title).appendChild(readButton);
}

function read(){
    let j = myLibrary.length-1;

    const buttonClass = Array.from(document.getElementsByClassName('readButton'));

    buttonClass[j].addEventListener('click', function(e){
      const readText = document.getElementById('read' + j);

      if(myLibrary[j].read == 'read')
        myLibrary[j].read = 'not read';
      else 
        myLibrary[j]. read = 'read';
      readText.innerHTML = myLibrary[j].read;
    });
}

document.getElementById('formButton').addEventListener('click', e => document.getElementById('submitBookForm') == null ? forms(): null);

function forms(){
  const getForm = document.getElementById('form');
  const form = document.createElement('form');
  const label = document.createElement('label');
  const input = document.createElement('input');
  const select = document.createElement('select');
  const option = document.createElement('option');
  const submitBook = document.createElement('button');

  form.setAttribute('id', 'submitBookForm')
  getForm.appendChild(form);
  
  label.innerHTML = 'Title: ';
  label.setAttribute('for', 'title');
  form.appendChild(label.cloneNode(true));
  input.setAttribute('id', 'title');
  form.appendChild(input.cloneNode(true));

  label.innerHTML = 'Author: ';
  label.setAttribute('for', 'author');
  form.appendChild(label.cloneNode(true));
  input.setAttribute('id', 'author');
  form.appendChild(input.cloneNode(true));

  label.innerHTML = 'Pages: ';
  label.setAttribute('for', 'pages');
  form.appendChild(label.cloneNode(true));
  input.setAttribute('id', 'pages');
  form.appendChild(input.cloneNode(true));

  label.innerHTML = 'Read?: ';
  label.setAttribute('for', 'read');
  form.appendChild(label.cloneNode(true));
  option.innerHTML = 'Yes';
  option.setAttribute('value', 'read');
  select.appendChild(option.cloneNode(true));
  option.innerHTML = 'No';
  option.setAttribute('value', 'not read');
  select.appendChild(option.cloneNode(true));
  select.setAttribute('id', 'haveRead');
  form.appendChild(select.cloneNode(true));
  submitBook.innerHTML = 'Submit';
  submitBook.setAttribute('id', 'submitBook');
  submitBook.setAttribute('type', 'button');
  submitBook.setAttribute('value', 'submit');
  form.appendChild(submitBook.cloneNode(true));

  document.getElementById('submitBook').addEventListener('click', function(e){
    const bookTitle = document.getElementById('title').value;
    const bookAuthor = document.getElementById('author').value;
    const bookPages = document.getElementById('pages').value;
    const bookRead = document.getElementById('haveRead').value;

    const newBook = new book(bookTitle, bookAuthor, bookPages, bookRead);
    newBook.addBookToLibrary();
    newBook.render();
    read();
    getForm.removeChild(form);
    });
 };

