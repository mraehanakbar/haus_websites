import { useState } from 'react';
import './Navbar.css'
import logo from '../src/assets/images/logoatas.png'

const NavbarComponent = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="menu">
        <ul>
        <li className={`dropdown ${isDropdownOpen ? 'active' : ''}`} onClick={toggleDropdown}>
            <a href="#brand">
              <strong>Brands &#9662;</strong>
            </a>
            {isDropdownOpen && (
              <div className="dropdown-content">
                <a href="#brand1">Haus!</a>
                <a href="#brand2">Ganjel Roti</a>
                <a href="#brand2">Pedes Cyin</a>
                <a href="#brand2">Hot Oppa</a>
              </div>
            )}
          </li>
          <li><a href="#lokasi">Lokasi Toko</a></li>
          <li><a href="#big-order">Big Order Menu</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#tentang-kami">Tentang Kami</a></li>
          <li><a href="#karir">Karir</a></li>
          <li><button href="#download-apps"><strong>Download Apps</strong></button></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarComponent;
