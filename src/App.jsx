import { Route, Routes } from "react-router-dom";
import BookList from "./components/BookList/Booklist.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import BookDetails from "./components/BooksDetails/BookDetails.jsx";

function App() {
  const booksData = [
    {
      title: "Ahmad Ohun",
      author: "Tohir Malik",
      id: 1,
      image: "https://picsum.photos/200/300",
    },
    {
      title: "Otkan kunlar",
      author: "Donish Ahmad",
      id: 2,
      image:
        "https://play-lh.googleusercontent.com/gaFQVhxP7dIygJvUnFYWT1k1QP2_8UB_sBbCum3WdpN9kkbuLiNZ9FHXB5LzEpldMw",
    },
    {
      id: 3,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      image:
        "https://via.placeholder.com/200x300.png?text=To+Kill+a+Mockingbird",
    },
    {
      id: 4,
      title: "1984",
      author: "George Orwell",
      image: "https://via.placeholder.com/200x300.png?text=1984",
    },
    {
      id: 5,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      image: "https://via.placeholder.com/200x300.png?text=The+Great+Gatsby",
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<BookList books={booksData} />} />
          <Route
            path="/books/:id"
            element={<BookDetails books={booksData} />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
