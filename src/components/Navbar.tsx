import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the CSS for styling

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/profile" className="navbar-link">
            Profile
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/favorites" className="navbar-link">
            Favorites
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/my-recipes" className="navbar-link">
            My Recipes
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
