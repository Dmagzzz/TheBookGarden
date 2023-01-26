searchBtn.addEventListener('click', async function(event) {
    event.preventDefault();
    
    const test = document.querySelector('.hello');
    const input = document.querySelector('#searchInput');

    const result = await fetch("https://openlibrary.org/search.json?q=" + input.value);
    const books = await result.json();
    const renderBook = books.docs;
    console.log(books)
    console.log(renderBook, "look herree")

   
    for(i = 0; i < renderBook.length; i++) {
    
        const theBook = {
            title: renderBook[i].title,
            author: renderBook[i].author_name[0],
            isbn: renderBook[i].isbn[0],
            description: renderBook[i].first_sentence[0],
        }
         console.log("this is the book", theBook)
         const jsonBook = JSON.stringify(theBook);
    // console.log(input?.value, "look here");
    // console.log(event?.target, "event");
    
    
    
        
        // test.innerHTML = JSON.stringify(books);
        // const title = document.createElement('p');
        // console.log("Title", books.docs[i].title);
        test.append(jsonBook);
        
       

    }

});



