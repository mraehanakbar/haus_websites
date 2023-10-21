import { useState } from "react";
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
    <nav className="bg-white flex justify-between px-4 lg:px-8 py-2 items-center shadow-md relative h-28">
      <div className="ml-10 pb-2">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-36 cursor-pointer" />
        </Link>
      </div>
      <div className="space-x-2.5">
        <Link className="px-2.5" to="/about">
          TENTANG KAMI
        </Link>

        <Link className="px-2.5" to="/menu">
          MENU
        </Link>

        <Link className="px-2.5" to="/lokasi">
          LOKASI TOKO
        </Link>

        <Link className="px-2.5" to="/bigorder">
          BIG ORDER
        </Link>

        <Link className="px-2.5" to="/karir">
          KARIR
        </Link>
      </div>
      <div>
        <button
          onClick={donwloadAPK}
          className="p-3 bg-purple-main hover:bg-[#6e3e7e] rounded-md text-white "
        >
          <strong>Download Apps</strong>
        </button>
        <button
          className={`hidden ${isDropdownOpen ? "active" : ""}`}
          onClick={toggleDropdown}
        >
          <a href="#brand">
            <strong>☰</strong>
          </a>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <a href="#brand1">Brand 1</a>
              <a href="#brand2">Brand 2</a>
              <a href="#brand2">Brand 2</a>
              <a href="#brand2">Brand 2</a>
              <a href="#brand2">Brand 2</a>
              <a href="#brand2">Brand 2</a>
              {/* Add more brands as needed */}
            </div>
          )}
        </button>
      </div>
    </nav>
  );
};

export default NavbarComponent;
