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
              <img src={vektor} alt="" /> halo@haus.co.id
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
          <p>Gedung Sastra Graha Lantai 2, Jalan Raya Perjuangan No 21, Kebon Jeruk, Jakarta Barat 11530</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.90946736197765!2d106.76576966433358!3d-6.190718729354608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f71af90bdcd7%3A0x79b9b3028466eed3!2sJl.%20Perjuangan%20Blok%20B%20No.21%2C%20RT.1%2FRW.10%2C%20Kb.%20Jeruk%2C%20Kec.%20Kb.%20Jeruk%2C%20Kota%20Jakarta%20Barat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2011530!5e0!3m2!1sid!2sid!4v1699882129565!5m2!1sid!2sid"
            width="400"
            height="150"
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
