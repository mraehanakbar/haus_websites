import { Component } from "react";
import { NavbarComponent, CardComponent, FooterComponent } from "../component";
import PropTypes from "prop-types";
import "./about.css";
import Number from "../utils/animations";
import img1 from "../src/assets/images/img1.png";
import img2 from "../src/assets/images/img2.png";
import card1 from "../src/assets/images/card1.png";
import card2 from "../src/assets/images/card2.png";

export default class AboutPage extends Component {
  render() {
    return (
      <>
        <NavbarComponent />
        <div className="explain">
          <div className="line">
            <div className="lines"></div>
          </div>
          <h1>Cerita Perjalanan Kami</h1>
          <p>
            Didirikan pada tahun 2018, Haus! merupakan perusahaan Food &
            Beverage lkal yang berfokus pada kategori “New Boba & Tea. Dengan
            Spirit, “Spreading Happiness through a cup of Drink,” Kami
            menyajikan produk untuk segmen market middle low.
          </p>
          <br />
          <p>
            Haus! menyediakan lebih dari 40 Varian minuman kekinian dan Ice
            Cream dengan range harga Rp5.000 - Rp26.000. Sejak 2020, kami juga
            menawarkan beragam Varian menu pelengkap seperti roti dan cemilan
            pedas melelui sub brand Ganjel Roti, Pedes Cyin juga Hot Oppa.
          </p>
          <br />
          <p>
            Saat ini Haus! sudah beroperasi di lebih dari 220 Cabang, yang
            tersebar di 18 Kota dan kedepannya akan terus melakukan ekspansi ke
            lebih banyak kota.
          </p>
        </div>
        <div className="news">
          <CardComponent
            date="Juni 2018"
            content="Store Pertama Haus! Indonesia, Kemanggisan"
            imageUrl={card1}
          />
          <CardComponent
            date="Desember 2020"
            content="Pendanaan Seri-A &ldquo;BRI Ventures Suntik Rp30 Miliar&rdquo;"
            imageUrl={card2}
          />
          <CardComponent
            date="Juni 2018"
            content="Store Pertama Haus! Indonesia, Kemanggisan"
            imageUrl={card1}
          />
        </div>
        <div className="box">
          <div className="box-content">
            <p className="angka">
              <Number n={4} />
            </p>
            <p className="jenis">Brands</p>
          </div>
          <div className="box-content">
            <p className="angka">
              <Number n={227} />
            </p>
            <p className="jenis">Outlets</p>
          </div>
          <div className="box-content">
            <p className="angka">
              <Number n={327} />
            </p>
            <p className="jenis">Products</p>
          </div>
          <div className="box-content">
            <p className="angka">
              <Number n={327} />
            </p>
            <p className="jenis">Cities</p>
          </div>
        </div>
        <div className="about-page">
          <div className="content-1">
            <div className="text1">
              <h1>Our Vission</h1>
              <h2>&ldquo;The World with a Test of Joy&rdquo;</h2>
              <p>
                Melalui visi ini, kami akan memberikan kontribusi untuk
                indonesia serta Dunia dengan menghadirkan citarasa yang enak dan
                menyenangkan untuk semua kalangan
              </p>
            </div>
            <div className="gambar">
              <img src={img1} alt="" />
            </div>
          </div>
          <div className="content-2">
            <div className="gambar">
              <img src={img2} alt="" />
            </div>
            <div className="text2">
              <h1>Our Mission</h1>
              <h2>
                &ldquo;Spreading Happiness to Everyone Through Cup of
                Drink&rdquo;
              </h2>
              <p>
                Melalui misi inilah kami memiiki tujuan untuk selalu dapat
                menyebarkan kebahagiaan melalui gelas minuman, seperti tagline
                kami #SemuaBerhakMinumEnak
              </p>
            </div>
          </div>
        </div>
        <FooterComponent />
      </>
    );
  }
}
Number.propTypes = {
  n: PropTypes.number.isRequired,
};
