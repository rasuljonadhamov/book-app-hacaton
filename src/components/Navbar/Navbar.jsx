import { Link } from "react-router-dom";
import { useSearchContext } from "../SearchContext/SearchContext.jsx";
import "./Navbar.css";

const Navbar = () => {
  const { searchQuery, setSearchQuery } = useSearchContext();

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    console.log(searchQuery);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">Book Store</Link>
      </div>
      <ul className="navbar__links">
        <li>
          <Link to="/books">Bosh sahifa </Link>
        </li>
        <li>
          <Link to="/about">Mualliflar</Link>
        </li>
      </ul>

      <div className="navbar-search">
        <input
          type="search"
          className="site-search"
          placeholder="Kitob nomini kiriting"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <button className="search-btn" onClick={handleSearch}>
          Qidirish
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
