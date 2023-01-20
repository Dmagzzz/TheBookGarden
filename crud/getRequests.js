const fetch = require('node-fetch');

async function getBooks(input) {
    const result = await fetch("https://openlibrary.org/search.json?q=" + input);
    const books = await result.json();
    return books;
}

async function getBookByIsbn(isbn) {
    const result = await fetch(`http://openlibrary.org/books.json?q=${isbn}`);
    return result;
}

module.exports = {
    getBooks,
    getBookByIsbn,
};