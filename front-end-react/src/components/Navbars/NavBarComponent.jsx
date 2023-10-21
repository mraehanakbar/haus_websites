import { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/images/logoatas.png";
import { Link } from "react-router-dom";

const donwloadAPK = () => {
  window.open(
    "https://play.google.com/store/apps/details?id=com.ibn.haus_mobile_app&hl=en-ID"
  );
};

const NavbarComponent = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="menu">
        <ul>
          <li>
            <Link to="/about">TENTANG KAMI</Link>
          </li>
          <li>
            <Link to="/menu">MENU</Link>
          </li>
          <li>
            <Link to="/lokasi">LOKASI TOKO</Link>
          </li>
          <li>
            <Link to="/bigorder">BIG ORDER</Link>
          </li>
          <li>
            <Link to="/karir">KARIR</Link>
          </li>
          <li>
            <button onClick={donwloadAPK}>
              <strong>Download Apps</strong>
            </button>
          </li>
        </ul>
        <button
          className={`dropdown ${isDropdownOpen ? "active" : ""}`}
          onClick={toggleDropdown}
        >
          <a href="#brand">
            <strong>☰</strong>
          </a>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <a href="/menu">MENU</a>
              <a href="/lokasi">LOKASI TOKO</a>
              <a href="/bigorder">BIG ORDER</a>
              <a href="/karir">KARIR</a>
              <button onClick={donwloadAPK}>
                <strong>Download Apps</strong>
              </button>
            </div>
          )}
        </button>
      </div>
    </nav>
  );
};

export default NavbarComponent;
