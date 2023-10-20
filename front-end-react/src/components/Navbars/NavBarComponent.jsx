import "./Navbar.css";
import logo from "../../assets/images/logoatas.png";
import { Link } from "react-router-dom";

const donwloadAPK = () => {
  window.open(
    "https://play.google.com/store/apps/details?id=com.ibn.haus_mobile_app&hl=en-ID"
  );
};

const NavbarComponent = () => {
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
      </div>
    </nav>
  );
};

export default NavbarComponent;
