import { Component } from "react";
import { NavbarComponent, FooterComponent } from "../../component";
import "./karir.css";
import karir1 from "../../src/assets/images/karir1.png";
import karir2 from "../../src/assets/images/karir2.png";
import arrow from "../../src/assets/images/arrow.png";

export default class Karir extends Component {
  render() {
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
        <div className="title">
          <h1>Karir di haus! Indonesia</h1>
        </div>
        <div className="operational">
          <h1>Operational</h1>
        </div>
        <div className="job">
          <div className="job1">
            <h1>Store Manager</h1>
            <div className="detail">
              <a>Lihat Detail</a>
              <img src={arrow} alt="" />
            </div>
          </div>
          <div className="job1">
            <h1>Maintenance</h1>
            <div className="detail">
              <a>Lihat Detail</a>
              <img src={arrow} alt="" />
            </div>
          </div>
        </div>

        <FooterComponent />
      </>
    );
  }
}
