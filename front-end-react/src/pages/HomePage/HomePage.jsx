import { NavbarComponent, FooterComponent } from "../../components";
import kitkat from "../../assets/images/kitkat-drink.png";
import milo from "../../assets/images/cone-milo.png";
import thaigreen from "../../assets/images/gree-thai-tea.png";
import mangoyk from "../../assets/images/mango-yakult.png";
import clmf from "../../assets/images/choco-lava-milo-float.png";
import freshlemon from "../../assets/images/fresh-lemon-tea.png";
import thai from "../../assets/images/thai-tea.png";
import oreo from "../../assets/images/oreo.png";
import rame from "../../assets/images/rameee.png";
import hp from "../../assets/images/hp.png";
import toptop from "../../assets/images/Desktop.png";
// import kitkatlogo from "../../assets/images/kitkat-logo.png";
import googleplay from "../../assets/images/googleplay.png";
// import hauslogoputih from "../../assets/images/haus-logo.png";
import "./HomePage.css";

const app = () => {
  window.open(
    "https://play.google.com/store/apps/details?id=com.ibn.haus_mobile_app&hl=en-ID"
  );
};

const Bigorder = () => {
  return (
    <>
      <NavbarComponent />
      <div className="toptop">
        <img src={toptop} alt="" />

        <div className="text-2xl bg-blue-600">Haus Indonesia</div>
      </div>



      {/* <div className="relative w-screen h-auto lg:h-screen" style={"background-color: #DA1E32;"} > */}

      {/* Kitkat Text and Logo */}
      {/* <div className="flex-row justify-center px-14 pt-5 lg:px-32">
          <div className="w-2/4 my-auto">
            <img className="w-3/5 lg:w-1/4" src={hauslogoputih} alt="" />
          </div>
          <div className="w-2/4 flex justify-end z-10">
            <img className="w-3/5 right-0 lg:w-auto right-0" src={kitkatlogo} alt="Kitkat Logo" />
          </div>
        </div>
      </div> */}

      <div className="top-home">
        <div className="line-home">
          <div className="lines-home"></div>
        </div>
        <div className="title-homepage">
          <h1>Karir di haus! Indonesia</h1>
        </div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
        sapiente vitae minima voluptas iure, nihil consequuntur veritatis
        voluptate harum perferendis, adipisci id illo excepturi cupiditate. Sint
        ex consequuntur nesciunt aspernatur. Eos nihil minus in, amet provident
        pariatur doloremque quas unde soluta quisquam praesentium sed cumque
        perferendis debitis similique ullam sapiente atque magnam harum! Soluta
        nemo molestias perspiciatis deleniti, in sunt, provident distinctio
        laborum cum magnam minima earum laudantium quasi odio quam harum
        eveniet. Iste voluptate nesciunt unde quo nam? Odio totam facere soluta
        voluptatem alias ab eaque magni. Cum laborum, quos autem quibusdam nulla
        nesciunt aperiam quidem enim delectus quam!
      </div>
      <div className="line-home-mid">
        <div className="lines-home"></div>
      </div>
      <div className="title-homepage-mid">
        <h1>Karir di haus! Indonesia</h1>
      </div>
      <div className="container-bestseller">
        <img src={kitkat} alt="" width={210} height={319} />
        <img src={milo} alt="" width={210} height={319} />
        <img src={thai} alt="" width={210} height={319} />
        <img src={mangoyk} alt="" width={210} height={319} />
        <img src={clmf} alt="" width={210} height={319} />
        <img src={freshlemon} alt="" width={210} height={319} />
        <img src={thaigreen} alt="" width={210} height={319} />
        <img src={oreo} alt="" width={210} height={319} />
      </div>
      <div className="line-home">
        <div className="lines-home"></div>
      </div>
      <div className="title-homepage-midbot">
        <h1>Haus! Rame - rame</h1>
      </div>
      <div className="haus-rame">
        <img src={rame} alt="" width={602.91} />
        <div className="rame-desc">
          <h1>Ciptakan Momen Bahagiamu Bersama Haus!</h1>
          <p>Semua menu Haus! dalam pake rame - rame</p>
          <button>Pelajari Selengkapnya</button>
        </div>
      </div>
      <div className="app-order">
        <img src={hp} alt="" width={530} height={653.24} />
        <div className="app-order-desc">
          <h1>Haus Mobile App For Order</h1>
          <h2>Dapatkan voucher menarik, dan ekstra promo</h2>
          <ul>
            <li>
              Lebih Mudah Pesan dengan aplikasi Haus!, kamu bisa pilih , pesanan
              Delivery, Pickup atau Dine In untuk skip antrian
            </li>
            <li>Pesan menu Haus! Favorit kamu dari Toko terdekat</li>
          </ul>
          <div className="dl-home">
            <p>Download aplikasi di</p>
            <img src={googleplay} alt="" onClick={app} />
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default Bigorder;
