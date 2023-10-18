import "./footer.css";
import logo from "../../assets/images/logoatas.png";
import playstore from "../../assets/images/googleplay.png";
import appstore from "../../assets/images/appstore.png";
import vektor from "../../assets/images/Vector.png";
import map from "../../assets/images/mpa.png";
import instagram from "../../assets/images/instagram.png";
import tiktok from "../../assets/images/tiktok.png";
import linkedin from "../../assets/images/linkedin.png";

const FooterComponent = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="logofooter">
          <img src={logo} alt="logo" />
          <p className="pt">PT. INSPIRASI BISNIS NUSANTARA</p>
          <p>
            <img src={vektor} alt="" /> hello@haus.co.id
          </p>
          <p>
            <strong>Follow Us</strong>
          </p>
          <div className="follow">
            <img src={instagram} alt="instagram" />
            <img src={tiktok} alt="tiktok" />
            <img src={linkedin} alt="linkedin" />
          </div>
        </div>
        <div className="brand">
          <p>
            <strong>Brand</strong>
          </p>
          <p>Haus! Indonesia</p>
          <p>Ganjel Roti</p>
          <p>Pedes Cyin</p>
          <p>Hot Oppa</p>
        </div>
        <div className="app">
          <p>
            <strong>HAUS! APP</strong>
          </p>
          <p>
            <strong>Download App</strong>
          </p>
          <br />
          <img src={playstore} alt="playstore" />
          <br />
          <img src={appstore} alt="appstore" />
        </div>
        <div className="lokasi">
          <p>
            <strong>Lokasi Kami</strong>
          </p>
          <p>Taman Meruya Ilir, Jl. Safir I Blok E6 No. 27</p>
          <img src={map} alt="maps" />
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
