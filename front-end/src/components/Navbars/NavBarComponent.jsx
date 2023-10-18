import "./Navbar.css";
import logo from "../../assets/images/logoatas.png";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="menu">
        <ul>
          <li>
            <Link to="/about">TENTANG KAMI</Link>
          </li>
          <li>
            <Link to="#menu">MENU</Link>
          </li>
          <li>
            <Link to="#lokasi">LOKASI TOKO</Link>
          </li>
          <li>
            <Link to="/bigorder">BIG ORDER</Link>
          </li>
          <li>
            <Link to="/karir">KARIR</Link>
          </li>
          <li>
            <button href="#download-apps">
              <strong>Download Apps</strong>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarComponent;
