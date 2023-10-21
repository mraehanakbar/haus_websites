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
    <>
      <nav className="bg-white sticky top-0 z-10 flex justify-between px-4 lg:px-8 py-2 items-center shadow-md  h-24">
        <div className="ml-10 md:ml-3 lg:ml-10 pb-2">
          <Link to="/">
            <img src={logo} alt="Logo" className="w-36  cursor-pointer" />
          </Link>
        </div>
        <div className="hidden md:flex xl:ml-32 lg:ml-14 md:ml-0 text items-center">
          <Link className="px-1.5 lg:px-3" to="/about">
            TENTANG KAMI
          </Link>

          <Link className="px-1.5 lg:px-3" to="/menu">
            MENU
          </Link>

          <Link className="px-1.5 lg:px-3" to="/lokasi">
            LOKASI TOKO
          </Link>

          <Link className="px-1.5 lg:px-3" to="/bigorder">
            BIG ORDER
          </Link>

          <Link className="px-1.5 lg:px-3" to="/karir">
            KARIR
          </Link>
          <button
            onClick={donwloadAPK}
            className="p-2 bg-purple-main  hidden md:flex hover:bg-[#6e3e7e] rounded-md text-white text-sm xl:ml-12 lg:ml-8 "
          >
            <strong>Download Apps</strong>
          </button>
        </div>

        <div>
          <button
            className={` text-3xl p-2 text-purple-main md:hidden ${
              isDropdownOpen ? "active" : ""
            }`}
            onClick={toggleDropdown}
          >
            <a href="#brand">
              <strong>☰</strong>
            </a>
          </button>
        </div>
      </nav>
      {isDropdownOpen && (
        <div className="fixed py-3 z-50 flex flex-col w-full items-end space-y-2 bg-white bg-opacity-90 font-semibold text-purple-main">
          <Link className="px-7 lg:px-3" to="/about">
            TENTANG KAMI
          </Link>

          <Link className="px-7 lg:px-3" to="/menu">
            MENU
          </Link>

          <Link className="px-7 lg:px-3" to="/lokasi">
            LOKASI TOKO
          </Link>

          <Link className="px-7 lg:px-3" to="/bigorder">
            BIG ORDER
          </Link>

          <Link className="px-7 lg:px-3" to="/karir">
            KARIR
          </Link>
          <button
            onClick={donwloadAPK}
            className="mr-7 px-3 py-2 lg:px-3 bg-purple-main hover:bg-[#6e3e7e] rounded-md text-white "
          >
            <strong>Download Apps</strong>
          </button>
        </div>
      )}
    </>
  );
};

export default NavbarComponent;
