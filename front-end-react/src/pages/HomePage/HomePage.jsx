import { NavbarComponent, FooterComponent } from "../../components";
// import kitkat from "../../assets/images/kitkat-drink.png";
// import milo from "../../assets/images/cone-milo.png";
// import thaigreen from "../../assets/images/gree-thai-tea.png";
// import mangoyk from "../../assets/images/mango-yakult.png";
// import clmf from "../../assets/images/choco-lava-milo-float.png";
// import freshlemon from "../../assets/images/fresh-lemon-tea.png";
// import thai from "../../assets/images/thai-tea.png";
// import oreo from "../../assets/images/oreo.png";
// import rame from "../../assets/images/rameee.png";
// import hp from "../../assets/images/hp.png";
// import toptop from "../../assets/images/Desktop.png";
// import googleplay from "../../assets/images/googleplay.png";
import google_play from "../../assets/images/googleplay.png";
import hp from "../../assets/images/hp.png";
import app_order_decoration from "../../assets/images/app-order-decoration.png";
import ilustrasi_visual from "../../assets/images/illlustrasi-visual-lifestyle.png";
import kitkat_drink from "../../assets/images/kitkat-drink.png";
import cone_milo from "../../assets/images/cone-milo.png";
import thai_tea from "../../assets/images/green-thai-tea.png";
import mango_yakult from "../../assets/images/mango-yakult.png";
import choco_lava_milo_float from "../../assets/images/choco-lava-milo-float.png";
import fresh_lemon_tea from "../../assets/images/fresh-lemon-tea.png";
import green_thai_tea from "../../assets/images/green-thai-tea.png";
import oreo from "../../assets/images/oreo.png";
import arrow_right from "../../assets/images/arrow-right.svg";
import arrow_left from "../../assets/images/arrow-left.svg";
import ganjel_ah from "../../assets/images/ganjel-ah.png";
// import tamvan_series from "../../assets/images/tamvan-series.png";
import box_bottom_left from "../../assets/images/box-bottom-left.png";
import box_top_right from "../../assets/images/box-top-right.png";
import polygon_arrow from "../../assets/images/polygon-arrow.svg";
import footer_aksen from "../../assets/images/footer-aksen.png";
import logo_halal from "../../assets/images/halal-logo.png";
import kitkat_text from "../../assets/images/kitkat-text.png";
import kitkat_gelas from "../../assets/images/kitkat-gelas.png";
import kitkat_logo from "../../assets/images/kitkat-logo.png";
import haus_logo_putih from "../../assets/images/haus-logo.png";
import kitkat_blur_bottom_left from "../../assets/images/kitkat-blur-bottom-left.png";
import kitkat_blur_bottom_right from "../../assets/images/kitkat-blur-top-right.png";
import "./HomePage.css";

const app = () => {
  window.open(
    "https://play.google.com/store/apps/details?id=com.ibn.haus_mobile_app&hl=en-ID"
  );
};

const Bigorder = () => {
  return (
    <>

      {/* Kitkat */}
      <body className="container w-screen bg-white-gray">
        <div className="relative w-screen kitkat-bg h-auto lg:h-screen">
          {/* Decoration Background  */}
          <img
            className="decoration-bg-kitkat-left absolute bottom-0 left-0 w-1/3 lg:w-auto"
            src={kitkat_blur_bottom_left}
            alt="Kitkat Blur Bottom Left"
          />
          <img
            className="decoration-bg-kitkat-right absolute top-0 right-0 w-1/3 lg:w-auto"
            src={kitkat_blur_bottom_right}
            alt="Kitkat Blur Top Right"
          />

          {/* Kitkat Text and Logo */}
          <div className="flex flex-row justify-center px-14 pt-5 lg:px-32">
            <div className="w-2/4 my-auto">
              <img
                className="w-3/5 lg:w-1/4"
                src={haus_logo_putih}
                alt="Haus Logo Putih"
              />
            </div>
            <div className="w-2/4 flex justify-end z-10">
              <img
                className="w-3/5 right-0 lg:w-auto right-0"
                src={kitkat_logo}
                alt="Kitkat Logo"
              />
            </div>
          </div>

          {/* Kitkat Text and Picture */}
          <div className="flex flex-col justify-center lg:flex-row mt-20 lg:mt-px">
            <div className="flex justify-center h-2/5 my-auto lg:w-2/4 lg:justify-end">
              <img
                className="kitkat-text w-11/12 lg:w-4/5"
                src={kitkat_text}
                alt="Kitkat Text"
              />
            </div>
            <div className=" flex justify-center h-2/4 lg:w-3/5 lg:justify-start">
              <img
                className="kitkat-gelas w-full lg:w-8/12"
                src={kitkat_gelas}
                alt="Kitkat Gelas"
              />
            </div>
          </div>

          {/* Logo Halal */}
          <div className="flex lg:absolute right-0 justify-end my-10 lg:mb-28 lg:mt-auto">
            <img
              className="mr-24 w-1/12 lg:w-20 h-auto"
              src={logo_halal}
              alt="Logo Halal"
            />
          </div>

          {/* Promo & Footer Aksen */}
          <div className="flex flex-col mx-auto items-center justify-center pb-20 lg:absolute min-w-full lg:pb-10">
            <div className="z-20 text-2xl text-white">Promo</div>
            <img
              className="z-10 lg:w-20"
              src={polygon_arrow}
              alt="Polygon Arrow"
            />
            <img
              className="footer-aksen absolute bottom-0 min-w-full lg:h-28"
              src={footer_aksen}
              alt="Footer Aksen"
            />
          </div>
        </div>

        {/* Best Deal */}
        <div className="relative best-deal w-screen h-auto py-10 lg:py-40">
          {/* Decoration Background */}
          <div>
            <img
              className="absolute bottom-0 left-0 w-1/6 pb-10"
              src={box_bottom_left}
              alt=""
            />
            <img
              className="absolute top-0 right-0 w-1/6 pt-10"
              src={box_top_right}
              alt="Box Bottom Right"
            />
          </div>

          {/*Promo Image*/}
          <div className="relative z-10 py-24">
            <div className=" slider w-full flex overflow-hidden">
              <img
                className="w-4/5 mx-auto lg:w-9/12 transform transition-transform ease-in-out duration-300"
                src={ganjel_ah}
                alt="Promo Image"
              />
              {/* <img className="w-4/5 mx-auto lg:w-9/12 transform transition-transform ease-in-out duration-300"
                src={tamvan_series} alt="Promo Image"/> */}
            </div>
          </div>

          {/* Arrow for navigation Promo */}
          <div>
            <div className="absolute z-20 inset-y-0 left-0 flex items-center ml-14 cursor-pointer">
              <img src={arrow_left} id="prevButton" />
            </div>
            <div className="absolute z-20 inset-y-0 right-0 flex items-center mr-14 cursor-pointer">
              <img src={arrow_right} id="nextButton" />
            </div>
          </div>
        </div>

        {/* Best Seller Menu */}
        <div className="w-screen py-10">
          {/* Subtitle */}
          <div className="flex flex-col items-center pb-10">
            <hr className="sub-title-line mb-3.5 border-t-4 w-1/12 mx-auto my-3" />
            <div className="sub-title text-3xl lg:text-2xl text-white font-bold">
              Best Seller Menu
            </div>
          </div>

          <div className="flex flex-row justify-around lg:flex-col lg:mx-36">
            {/* Row Pertama */}
            <div className="flex flex-col flex-wrap items-center w-full py-4 lg:flex-row lg:justify-between ">
              <img
                className="haus-menu w-2/4 py-2 lg:w-1/6"
                src={kitkat_drink}
                alt="Kitkat Drink"
              />
              <img
                className="haus-menu w-2/4 py-2 lg:w-1/6"
                src={cone_milo}
                alt="Ice Cream Cone Coklat Milo"
              />
              <img
                className="haus-menu w-2/4 py-2 lg:w-1/6"
                src={thai_tea}
                alt="Thai Tea"
              />
              <img
                className="haus-menu w-2/4 py-2 lg:w-1/6"
                src={mango_yakult}
                alt="Ice Mango Mix Yakult"
              />
            </div>

            {/* Row Kedua */}
            <div className="flex flex-col items-center w-full py-4 lg:flex-row lg:w-full lg:justify-between">
              <img
                className="haus-menu w-2/4 py-2 lg:w-1/6"
                src={choco_lava_milo_float}
                alt="Choco Lava Milo Float"
              />
              <img
                className="haus-menu w-2/4 py-2 lg:w-1/6"
                src={fresh_lemon_tea}
                alt="Fresh Lemon Tea"
              />
              <img
                className="haus-menu w-2/4 py-2 lg:w-1/6"
                src={green_thai_tea}
                alt="Green Thai Tea"
              />
              <img
                className="haus-menu w-2/4 py-2 lg:w-1/6"
                src={oreo}
                alt="Oreo"
              />
            </div>
          </div>
        </div>

        {/* Haus Rame-Rame */}
        <div className="w-screen py-20 haus-rame ">
          {/* Sub Title */}
          <div className="flex flex-col items-center pb-10">
            <hr className=" sub-title-line-rame z-10 border-t-4 w-1/12 pb-2" />
            <div className=" text-3xl lg:text-2xl text-white font-bold">
              Haus Rame-Rame
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col lg:flex-row">
            {/* Text and Button */}
            <div className="flex flex-col items-center lg:items-start lg:order-2 lg:w-1/2 lg:my-auto">
              <div className="text-5xl text-center text-white font-bold leading-normal w-2/4 lg:w-4/5 lg:text-left lg:text-4xl">
                Ciptakan Momen Bahagiamu Bersama Haus!
              </div>
              <div className=" text-3xl text-white  py-10 w-2/4 text-center lg:text-left lg:w-4/5">
                Semua menu haus! dalam paket rame-rame
              </div>
              <button className="hidden lg:block btn-haus-rame text-white font-bold border text-xl border-white py-3 mt-10 rounded-full hover:bg-purple-600 w-5/12">
                Pelajari Selengkapnya
              </button>
            </div>

            {/* Ilustrasi Visual Image */}
            <div className="flex flex-col items-center lg:order-1 lg:w-1/2 lg:my-auto">
              <img
                className="w-3/5 lg:w-4/5"
                src={ilustrasi_visual}
                alt="Ilustrasi Visual Lifestyle"
              />
              <button className="btn-haus-rame text-white text-3xl font-bold border border-white py-5 my-10 rounded-full hover:bg-purple-600 w-5/12 lg:hidden">
                Pelajari Selengkapnya
              </button>
            </div>
          </div>
        </div>

        {/* Haus Mobile App */}
        <div className="w-screen h-auto relative">
          {/* Background Decoration */}
          <div>
            <img src={app_order_decoration} alt="App Haus Decoration" />
            <img
              className="absolute bottom-0"
              src={app_order_decoration}
              alt="App Haus Decoration"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col lg:flex-row mx-auto">
            {/* Text & Google Play */}
            <div className="flex flex-col items-center mx-auto lg:items-start lg:order-2 lg:w-1/2 lg:my-auto">
              <div
                className="haus-mobile text-6xl text-center font-bold leading-normal mx-5 lg:mx-0 lg:w-4/5 lg:text-left lg:text-4xl"
              >
                Haus Mobile App For Order
              </div>
              <div className=" text-4xl py-10 text-left font-bold lg:text-left lg:w-4/5 lg:text-xl lg:py-3">
                Dapatkan voucher menarik, dan ekstra promo
              </div>
              <ul className="flex flex-col w-9/12 list-disc mb-3 text-2xl lg:w-4/5  lg:text-base lg:ms-4">
                <li className="mb-2 py-3 lg:py-1">
                  Lebih Mudah Pesan dengan aplikasi Haus!, kamu bisa pilih
                  pesanan Delivery, Pickup atau Dine In untuk skip antrian
                </li>
                <li className="mb-2 py-3 lg:py-1">
                  Pesan menu Haus! Favorit kamu dari Toko terdekat
                </li>
              </ul>
              <div className="py-7 text-3xl lg:py-2 lg:text-base">
                Download aplikasi di
              </div>
              <img
                className="w-2/6 lg:w-3/12"
                src={google_play}
                alt="Google Play Icon"
              />
            </div>

            {/* <Ilustrasi Haus App Image */}
            <div className="flex flex-col items-center lg:order-1 lg:w-1/2">
              <img className="w-3/4 lg:w-4/5" src={hp} alt="Handphone" />
            </div>
          </div>
        </div>
      </body>

      <FooterComponent />
    </>
  );
};

export default Bigorder;
