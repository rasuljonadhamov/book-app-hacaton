import { useState } from "react";
import "./BookList.css";
import { useSearchContext } from "../SearchContext/SearchContext";

import { Link } from "react-router-dom";

const BookList = ({ books }) => {
  const { searchQuery } = useSearchContext();

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1>Book List</h1>
      <ul className="book-list">
        {books.map((book) => (
          <li key={book.id}>
            <Link to={`/books/${book.id}`} books={books}>
              <div className="book-card">
                <img src={book.image} alt={book.title} className="book-image" />
                <h3 className="book-title">{book.title}</h3>
                <p className="book-author">Author: {book.author}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
