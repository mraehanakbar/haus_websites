import { NavbarComponent, FooterComponent } from "../../components";
import orderimage from "../../assets/images/bigorder.png";
import contentimage from "../../assets/images/callus.png";
import vektor from "../../assets/images/vector.png";
import pin from "../../assets/images/pin.png";
import flyer from "../../assets/images/flyerbigorder.jpg";
import iconback from "../../assets/images/iconbackground.png";
import "./bigorder.css";

const downloadFlyer = () => {
  const link = document.createElement("a");
  link.href = flyer;
  link.download = "flyerbigorder.jpg";
  link.click();
};

const contactTO = () => {
  window.open("https://wa.me/081119179943", "_blank");
};

const Bigorder = () => {
  return (
    <>
      <NavbarComponent />
      <div className="topcontainerorder">
        <div className="decstoporder">
          <img src={iconback} alt="" />
          <div className="decstoporder-text">
            <h1>Meriahkan Acaramu dengan Produk Haus!</h1>
            <p>Semua menu Haus! dalam paket rame-rame</p>
          </div>
        </div>
        <img src={orderimage} alt="content image" style={{
          zIndex: 3
        }} />
      </div>
      <div className="line-order">
        <div className="lines"></div>
      </div>
      <div className="title-order">
        <h1>Haus! Rame - Rame</h1>
      </div>
      <div className="contentorder">
        <div className="descorder">
          <p>
            Untuk acara spesial Warga Haus!, kami memiliki paket Haus! Rame - Rame. Untuk pertemuan kantor, rapat, ulang tahun, atau acara khusus lainnya, Warga Haus! akan mendapatkan layanan terbaik, produk berkualitas tinggi, harga yang affordable, serta layanan crew kami untuk membuat berbagai minuman Haus! dan menu lainnya.
          </p>
        </div>
      </div>
      <div className="callus-wrapper">
        <div className="head-call">
          <div className="callline">
            <div className="calllines"></div>
            <h2>Hubungi Kami</h2>
          </div>
        </div>
        <div className="callus">
          <div className="callusimg">
            <div className="desc-call">
              <p>
                Untuk info dan pemesanan haus rame - rame harap hubungi kami
              </p>
            </div>
            <div className="address-call">
              <h3>Kontak Kami</h3>
              <p>
                <img src={vektor} alt="" />
                halo@haus.co.id
              </p>
              <p>
                <img src={pin} alt="" /> Gedung Sastra Graha Lantai 2, Jalan Raya Perjuangan No 21, Kebon Jeruk, Jakarta Barat 11530
              </p>
            </div>
            <div className="button-call">
              <button className="packagedl" onClick={downloadFlyer}>Download Package</button>
              <button className="whatsapp" onClick={contactTO}>
                Contact Via Whatsapp
              </button>
            </div>
          </div>
          <div className="contentImg">
            <img
              src={contentimage}
              alt="Content image" />
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default Bigorder;
