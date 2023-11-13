import "./footer.css";
import logo from "../../assets/images/logoatas.png";
import playstore from "../../assets/images/googleplay.png";
import vektor from "../../assets/images/Vector.png";
import instagram from "../../assets/images/Instagram.png";
import tiktok from "../../assets/images/Tiktok.png";
import linkedin from "../../assets/images/Linkedin.png";

const donwloadAPK = () => {
  window.open(
    "https://play.google.com/store/apps/details?id=com.ibn.haus_mobile_app&hl=en-ID"
  );
};

const linkLinkedin = () => {
  window.open(
    "https://www.linkedin.com/company/pt-inspirasi-bisnis-nusantara-haus-indonesia/mycompany/"
  );
};

const linkTiktok = () => {
  window.open("https://www.tiktok.com/@haus.indonesia");
};

const linkInstagram = () => {
  window.open("https://www.instagram.com/haus.indonesia/");
};

const FooterComponent = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="logofooter">
          <img src={logo} alt="logo" />
          <p className="pt">PT. INSPIRASI BISNIS NUSANTARA</p>
          <div className="email-footer">
            <p>
              <img src={vektor} alt="" /> hello@haus.co.id
            </p>
          </div>
          <p>
            <strong>Follow Us</strong>
          </p>
          <div className="follow">
            <img
              src={instagram}
              alt="instagram"
              onClick={linkInstagram}
              className="footerinstagram"
            />
            <img
              src={tiktok}
              alt="tiktok"
              onClick={linkTiktok}
              className="footertiktok"
            />
            <img
              src={linkedin}
              alt="linkedin"
              onClick={linkLinkedin}
              className="footerlinkedin"
            />
          </div>
        </div>
        <div className="mid-footer">
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
            <img src={playstore} alt="playstore" onClick={donwloadAPK} />
            <br />
          </div>
        </div>
        <div className="lokasi">
          <p>
            <strong>Lokasi Kami</strong>
          </p>
          <p>Taman Meruya Ilir, Jl. Safir I Blok E6 No. 27</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5023034653254!2d106.74862968821648!3d-6.197263677779562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f7c3885e7399%3A0xc7bdecffc78174f2!2sHAUS*21%20Meruya!5e0!3m2!1sid!2sid!4v1697947882837!5m2!1sid!2sid"
            width="400"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
