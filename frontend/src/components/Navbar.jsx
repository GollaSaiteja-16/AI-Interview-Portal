import "./Navbar.css";
import { FaBell, FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <div className="navbar">

      <div className="search-box">
        <FaSearch />
        <input
          type="text"
          placeholder="Search interviews..."
        />
      </div>

      <div className="navbar-right">

        <div className="notification">
          <FaBell />
          <span className="badge">3</span>
        </div>

        <div className="profile">
          <img
            src="https://i.pravatar.cc/50"
            alt="profile"
          />

          <div>
            <h4>Teja Sai</h4>
            <p>AI Candidate</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Navbar;