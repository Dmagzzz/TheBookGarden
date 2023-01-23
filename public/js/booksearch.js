async function getBooks(input) {
    const result = await fetch("https://openlibrary.org/search.json?q=" + input);
    const books = await result.json();
    return books;
}

async function getBookByIsbn(isbn) {
    const result = await fetch(`http://openlibrary.org/books.json?q=${isbn}`);
    return result;
}

const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('click', async function(event) {
    event.preventDefault();
    if(searchInput.value) {
       const searchedBook = await getBooks(searchInput.value);
        console.log("look here", searchedBook);
    } else {
        return ('Failed to Load Books!');
    } 
});

function renderBooks() {

}