import "./footer.css";
import logo from '../src/assets/images/logoatas.png'
import playstore from '../src/assets/images/googleplay.png'
import appstore from '../src/assets/images/appstore.png'
import vektor from '../src/assets/images/Vector.png'
import map from '../src/assets/images/mpa.png'
import instagram from '../src/assets/images/instagram.png'
import tiktok from '../src/assets/images/tiktok.png'
import linkedin from '../src/assets/images/linkedin.png'

const FooterComponent = () => {
  return (
    <footer >
      <div className="footer-content">
        <div className="logo">
          <img src={logo} alt="logo" />
          <p className="pt">PT. INSPIRASI BISNIS NUSANTARA</p>
          <p> <img src={vektor} alt="" />   hello@haus.co.id</p>
          <p><strong>Follow Us</strong></p>
          <div className="follow">
            <img src={instagram} alt="instagram" />
            <img src={tiktok} alt="tiktok" />
            <img src={linkedin} alt="linkedin" />
          </div>
        </div>
        <div className="brand">
          <p><strong>Brand</strong></p>
          <p>Haus! Indonesia</p>
          <p>Ganjel Roti</p>
          <p>Pedes Cyin</p>
          <p>Hot Oppa</p>
        </div>
        <div className="app">
          <p><strong>HAUS! APP</strong></p>
          <p><strong>Download App</strong></p>
          <br />
          <img src={playstore} alt="playstore" />
          <br />
          <img src={appstore} alt="appstore" />
        </div>
        <div className="lokasi">
          <p><strong>Lokasi Kami</strong></p>
          <p>Taman Meruya Ilir, Jl. Safir I Blok E6 No. 27</p>
          <img src={map} alt="maps" />
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
