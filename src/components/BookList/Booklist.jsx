// BookList.jsx
import React from "react";
import { Link } from "react-router-dom";

const BookList = ({ books }) => {
  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <Link to={`/books/${book.id}`} books={books}>
              <div>
                <img src={book.image} alt={book.title} className="book-image" />
                <h3>{book.title}</h3>
                <p>Author: {book.author}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
