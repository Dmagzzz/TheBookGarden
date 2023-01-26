// async function getBooks(input) {
//     // const input = searchInput.textContent;
//     const result = await fetch("https://openlibrary.org/search.json?q=" + input);
//     const books = await result.json();
//     return books;
// }

// const { doc } = require("prettier");



// async function getBookByIsbn(isbn) {
//     const result = await fetch(`http://openlibrary.org/books.json?q=${isbn}`);
//     return result;
// }

// const searchInput = document.getElementById('searchInput');
// const searchBtn = document.getElementById('searchBtn');

// const myBooks = JSON.parse(localStorage.getItem("myBooks")) || [];

// display data on screen 
searchBtn.addEventListener('click', async function(event) {
    event.preventDefault();
    
    const test = document.querySelector('.hello');
    const input = document.querySelector('#searchInput');
    console.log(input?.value, "look here");
    console.log(event?.target, "event");
    
        const result = await fetch("https://openlibrary.org/search.json?q=" + input.value);
        const books = await result.json();
        test.innerHTML = JSON.stringify(books);
    

    // if(searchInput.value) {
    //    const searchedBook = await getBooks(searchInput.value);

    // //    const newBook = {
    // //     title: searchedBook.docs[0].title,
    // //     author: searchedBook.docs[0].author_name,
    // //    };

    // const bookArr = Object.entries(searchedBook.docs[0]);

    // const values = Object.values(searchedBook.docs[0])
    // console.log('thesse values', values);

    //     Object.entries(values).forEach((entry) => {
    //         const [key, value] = entry;
    //         // console.log("ENTRIES!!!!", `${key}: ${value}`);
    //     });
       
    //   const booklist = document.querySelector("#booklist")
    //   searchedBook.docs.forEach(book => {
        
    //   const myDiv = document.createElement("div")
    //     myDiv.textContent = book.title
    //     booklist.append(myDiv)
    //     console.log("Look here", booklist)
    //   });

    // //    console.log(bookArr);

    // //     console.log("look here", searchedBook.docs[0]);
    // //     for(let i = 0; i < searchedBook.docs[i]; i++)
    // //     console.log("result", searchedBook.docs[i]);
    
    // } else {
    //     return ('Failed to Load Books!');
    // } 
});



