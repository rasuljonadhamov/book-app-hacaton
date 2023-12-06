// BookDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";

const BookDetails = ({ books }) => {
  const { id } = useParams();

  // Find the book with the matching id
  const selectedBook = books.find((book) => book.id === parseInt(id));

  if (!selectedBook) {
    return <div>Book not found</div>;
  }

  const { title, author, image } = selectedBook;

  return (
    <div>
      <h2>{title}</h2>
      <p>Author: {author}</p>
      <img src={image} alt={title} className="book-image" />
    </div>
  );
};

export default BookDetails;
