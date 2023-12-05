import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
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
        />
        <button className="search-btn">Qidirish</button>
      </div>
    </nav>
  );
};

export default Navbar;
