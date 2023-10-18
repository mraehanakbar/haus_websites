import { NavbarComponent, FooterComponent } from "../../components";
import orderimage from "../../assets/images/bigorder.png";
import contentimage from "../../assets/images/callus.png";
import vektor from "../../assets/images/Vector.png";
import pin from "../../assets/images/Pin.png";
import "./Bigorder.css";

const Bigorder = () => {
  return (
    <>
      <NavbarComponent />
      <div className="topcontainerorder">
        <img src={orderimage} alt="" />
      </div>
      <div className="line">
        <div className="lines"></div>
      </div>
      <div className="title">
        <h1>Haus! Rame - rame</h1>
      </div>
      <div className="contentorder">
        <div className="descorder">
          <p>
            Untuk acara spesial Warga, kami memiliki Paket Haus Rame - Rame.
            Untuk pertemuan kantor, rapat, ulang tahun, atau acara khusus
            lainnya, Warga akan mendapatkan layanan terbaik & produk berkualitas
            tinggi, harga yang affordable, dan layanan crew haus kami untuk
            membuat berbagai minuman Haus! dan menu lainnya.
          </p>
        </div>
        <div className="callus">
          <div className="callusdesc">
            <div className="callline">
              <div className="calllines"></div>
            </div>
            <h2>Hubungi Kami</h2>
            <p>Untuk info dan pemesanan haus rame - rame harap hubungi kami</p>
            <h3>Kontak Kami</h3>
            <p>
              <img src={vektor} alt="" /> hello@haus.co.id
            </p>
            <p>
              <img src={pin} alt="" /> Taman Meruya Ilir, Jl. Safir I Blok E6
              No. 27
            </p>
            <button className="packagedl">Download Package</button>
            <button className="whatsapp">Contact Via Whatsapp</button>
          </div>
          <div className="callusimg">
            <img src={contentimage} alt="Content image" />
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default Bigorder;
