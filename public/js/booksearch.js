async function getBooks(input) {
    // const input = searchInput.textContent;
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

const myBooks = JSON.parse(localStorage.getItem("myBooks")) || [];


searchBtn.addEventListener('click', async function(event) {
    event.preventDefault();
    if(searchInput.value) {
       const searchedBook = await getBooks(searchInput.value);

    //    const newBook = {
    //     title: searchedBook.docs[0].title,
    //     author: searchedBook.docs[0].author_name,
    //    };

    const bookArr = Object.entries(searchedBook.docs[0]);

    const values = Object.values(searchedBook.docs[0])
    console.log('thesse values', values);

        Object.entries(values).forEach((entry) => {
            const [key, value] = entry;
            // console.log("ENTRIES!!!!", `${key}: ${value}`);
        });
       

       console.log(bookArr);

        console.log("look here", searchedBook.docs[0]);
        for(let i = 0; i < searchedBook.docs[i]; i++)
        console.log("result", searchedBook.docs[i]);
    
    } else {
        return ('Failed to Load Books!');
    } 
});

function renderBooks() {

}