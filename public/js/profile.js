const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#book-name').value.trim();
  const book_author = document.querySelector('#book-author').value.trim();
  const description = document.querySelector('#book-desc').value.trim();
  

  if (name && book_author && description && is_read) {
    const response = await fetch(`/api/booksearch`, {
      method: 'POST',
      body: JSON.stringify({ name, book_author, description, is_read }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/booksearch');
    } else {
      alert('Failed to create book');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/booksearch/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/booksearch');
    } else {
      alert('Failed to delete book');
    }
  }
};

document
  .querySelector('.new-book-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.book-list')
  .addEventListener('click', delButtonHandler);
