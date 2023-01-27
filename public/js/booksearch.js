function renderBook(book) {
    let bookTemplet = `<div class="row mb-2">
    <div class="col-md-8">
      <h4><a href="https://openlibrary.org/${book.key}/${book.title}" target="_blank">${book.title}</a></h4>
    </div>`;

    if (book.isbn && book.isbn[0]) {
        bookTemplet += `<img style="width: 200px" src="https://covers.openlibrary.org/b/isbn/${book.isbn[0]}-M.jpg?default=false" alt="" />`;
    }

    bookTemplet += `<div class="col-md-4">
      <button class="btn btn-sm btn-danger" data-id="${book.isbn && book.isbn[0] ? book.isbn[0] : 'N/A'}">DELETE</button>
    </div>
  </div>`;

    return bookTemplet;
}

searchBtn.addEventListener('click', async function (event) {
    event.preventDefault();

    const input = document.querySelector('#searchInput');
    const bookListContainer = document.getElementById('bookList');

    const response = await fetch("https://openlibrary.org/search.json?q=" + input.value);
    const data = await response.json();
    const books = data.docs;

    books.forEach(book => bookListContainer.innerHTML += renderBook(book));
});



