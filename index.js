function fetchBooks() {
// return error for CORS resolved by following
// https://community.airtable.com/t/cors-policy-error-when-trying-to-fetch-api-no-access-control-allow-origin-header/29720
// and accessing the demo server at
// https://cors-anywhere.herokuapp.com/corsdemo 
  return fetch('https://cors-anywhere.herokuapp.com/https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => renderBooks(json))
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
