import {
  NavbarComponent,
  FooterComponent,
  CardComponent,
} from "../../components";
import "./about.css";
import CountUp from 'react-countup';

import img1 from "../../assets/images/pilihin.png";
import img2 from "../../assets/images/agustusan.png";
import founder from "../../assets/images/founder.png";
import card1 from "../../assets/images/card1.png";
import card2 from "../../assets/images/ulangtahun.png";
import card3 from "../../assets/images/store3.png";
import card4 from "../../assets/images/card3.png";
import card5 from "../../assets/images/card4.png";



const AboutPage = () => {
  return (
    <>
      <NavbarComponent />
      <div className="about-me-top-wrapper">
        <div className="line">
          <div className="lines"></div>
          <h1>Cerita Perjalanan Kami</h1>
        </div>
        <p>Didirikan pada tahun 2018, Haus! merupakan perusahaan Food & Beverage lokal yang berfokus pada kategori “New Boba and Tea”. Dengan spirit “Spreading Happiness to Everyone Through Cup of Drink”, kami menyajikan produk untuk segmen market middle low. Haus! menyediakan lebih dari 40 varian minuman kekinian dan ice cream dengan range harga Rp5.000 - Rp26.000. Sejak 2020, kami juga menawarkan beragam varian menu pelengkap melalui sub brand Ganjel Roti, Pedes Cyin, dan Hot Oppa. Saat ini Haus! sudah beroperasi di lebih dari 200 cabang yang tersebar di 21 kota dan akan terus melakukan ekspansi ke lebih banyak kota.</p>
        <div className="founder">
          <img src={founder} alt="" />
          <div className="co-founder">
            <h1>OUR CO-FOUNDER</h1>
            <div className="name-cofounder">
              <div className="syarif">
                <h2>GUFRON SYARIF</h2>
                <p>Co-Founder and Chief Executive Officer</p>
              </div>
              <div className="akbar">
                <h2>FERRY ARDIAN AKBAR</h2>
                <p>Co-Founder and Deputy 1 Operation Director </p>
              </div>
              <div className="wijaya">
                <h2>DAMAN WIJAYA</h2>
                <p>Co-Founder and Chief Operation Officer</p>
              </div>
              <div className="sigit">
                <h2>SIGIT SRIBAWONO</h2>
                <p>Co-Founder and Deputy 2 Operation Director</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="visi-misi">
        <div className="content-1">
          <div className="text1">
            <h1>Our Vision</h1>
            <h3>&ldquo;The World with a Taste of Joy&rdquo;</h3>
            <p>
              Melalui visi ini kami akan memberikan kontribusi untuk Indonesia serta dunia dengan menghadirkan cita rasa yang enak dan menyenangkan untuk semua kalangan
            </p>
          </div>
          <img src={img1} alt="" />

        </div>
        <div className="content-2">
          <img src={img2} alt="" />
          <div className="text2">
            <h1>Our Mission</h1>
            <h3>
              &ldquo;Spreading Happiness to Everyone Through Cup of Drink&rdquo;
            </h3>
            <p>
              Melalui misi ini kami memiliki tujuan untuk dapat selalu menyebarkan kebahagiaan melalui gelas minuman, seperti tagline kami #SemuaBerhakMinumEnak
            </p>
          </div>
        </div>
      </div>
      <div className="moment-wrapper">
        <div className="line">
          <div className="lines"></div>
          <h1>Haus! Moments</h1>
        </div>
        <div className="content-news">
          <CardComponent imageUrl={card1} date="Juni 2018" content="Store Pertama Haus! Indonesia, Kemanggisan" />
          <CardComponent imageUrl={card2} date="Juni 2023" content="Ulang Tahun Haus! ke 5 dan perayaan 17 Agustus" />
          <CardComponent imageUrl={card3} date="Store 3.0" content="Store Haus! x HotOppa" />
          <CardComponent imageUrl={card5} date="Store 3.0" content="Store Haus! x HotOppa" />
          <CardComponent imageUrl={img2} date="Store 3.0" content="Store Haus! x HotOppa" />
          <CardComponent imageUrl={card4} date="Store 3.0" content="Store Haus! x HotOppa" />

        </div>
      </div>
      <div className="outlets">
        <div className="box-outlets">
          <h2>
            <CountUp end={219} duration={5} />
          </h2>
          <h4>Outlets</h4>
        </div>
        <div className="box-outlets">
          <h2>
            <CountUp end={21} duration={5} />
          </h2>
          <h4>Cities</h4>
        </div>

      </div>
      <FooterComponent />
    </>
  );
};


export default AboutPage;
