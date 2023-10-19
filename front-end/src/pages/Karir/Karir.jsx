import { NavbarComponent, FooterComponent, Applyjob } from "../../components";
import "./karir.css";
import karir1 from "../../assets/images/karir1.png";
import karir2 from "../../assets/images/karir2.png";

const Karir = () => {
  return (
    <>
      <NavbarComponent />
      <div className="topcontainer">
        <div className="images">
          <div className="containerimg1">
            <img src={karir1} alt="" />
          </div>
          <div className="containerimg2">
            <img src={karir2} alt="" />
          </div>
        </div>
        <div className="description">
          <h1>Bergabunglah menjadi bagian dari Haus!</h1>
          <p>
            Kami ingin memperluas tim kami dengan orang-orang suportif dan
            positif. Kenali tim kami lebih baik
          </p>
        </div>
      </div>
      <div className="line">
        <div className="lines"></div>
      </div>
      <div className="title-karir">
        <h1>Karir di haus! Indonesia</h1>
      </div>
      <div className="operational">
        <h1>Operational</h1>
      </div>
      <div className="job">
        <Applyjob
          title="Store Manager"
          requirements={[
            "Pria/Wanita usia 20-30 tahun",
            "Pengalaman min 2 tahun sebagai Store Manager F&B atau Retail",
            "Memahami FPP / COGS",
            "Berorientasi pada target",
            "Memahami Profit & Loss",
            "Mampu memimpin team",
            "Penempatan JABODETABEK",
          ]}
        />
        <Applyjob
          title="Maintenance"
          requirements={[
            "Pria/Wanita usia 20-25 tahun",
            "Pedidikan Min. SMA/SMK sederajat",
            "Pengalaman di bidang yang sama minimal 2 Tahun",
            "Memahami equipment F&B",
            "Menguasai Teknik MEP",
            "Menguasai kendaraan listrik",
            "Mampu menyelesaiakan Trouble Shooting sistem kerja pendingin",
            "Memiliki kendaraan dan bersedia Mobile",
            "Penempatan Jakarta Barat",
          ]}
        />
      </div>

      <FooterComponent />
    </>
  );
};

export default Karir;
