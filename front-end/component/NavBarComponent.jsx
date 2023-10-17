import "./Navbar.css";
import logo from "../src/assets/images/logoatas.png";

const NavbarComponent = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="menu">
        <ul>
          <li>
            <a href="#tentang-kami">Tentang Kami</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#lokasi">Lokasi Toko</a>
          </li>
          <li>
            <a href="#karir">Karir</a>
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
