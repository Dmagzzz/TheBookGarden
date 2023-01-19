
 export async function getBooks(input) {
    const result = await fetch("http://openlibrary.org/search.json?q=" + input )
    return result
}

 export async function getBookByIsbn(isbn) {
    const result = await fetch(`http://openlibrary.org/books.json?q=${isbn}`)
    return result
}