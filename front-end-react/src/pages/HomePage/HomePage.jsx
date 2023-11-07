import { NavbarComponent, FooterComponent } from "../../components";
import google_play from "../../assets/images/google-play.png";
import hp from "../../assets/images/hp.png";
import app_order_decoration from "../../assets/images/app-order-decoration.png";
import ilustrasi_visual from "../../assets/images/illlustrasi-visual-lifestyle.png";
import kitkat_drink from "../../assets/images/kitkat-drink.png";
import cone_milo from "../../assets/images/cone-milo.png";
import thai_tea from "../../assets/images/thai-tea.png";
import mango_yakult from "../../assets/images/mango-yakult.png";
import choco_lava_milo_float from "../../assets/images/choco-lava-milo-float.png";
import fresh_lemon_tea from "../../assets/images/fresh-lemon-tea.png";
import green_thai_tea from "../../assets/images/green-thai-tea.png";
import oreo from "../../assets/images/oreo.png";
import arrow_right from "../../assets/images/arrow-right.svg";
import arrow_left from "../../assets/images/arrow-left.svg";
import ganjel_ah from "../../assets/images/ganjel-ah.png";
import student_promo from "../../assets/images/student-promo.png";
import haus_pahala from "../../assets/images/haus-pahala.png";
import haus_gan from "../../assets/images/haus-gan.png";
import haus_cyin from "../../assets/images/haus-cyin.png";
import haus_bro from "../../assets/images/haus-bro.png";
import ganjel_in from "../../assets/images/ganjel-in.png";
import box_bottom_left from "../../assets/images/box-bottom-left.png";
import box_top_right from "../../assets/images/box-top-right.png";
import polygon_arrow from "../../assets/images/polygon-arrow.svg";
import footer_aksen from "../../assets/images/footer-aksen.png";
import logo_halal from "../../assets/images/halal-logo.png";
import kitkat_text from "../../assets/images/kitkat-text.png";
import kitkat_gelas from "../../assets/images/kitkat-gelas.png";
import tamvan_series from "../../assets/images/tamvan-series.png";
import kitkat_logo from "../../assets/images/kitkat-logo.png";
import haus_logo_putih from "../../assets/images/haus-logo.png";
import kitkat_blur_bottom_left from "../../assets/images/kitkat-blur-bottom-left.png";
import kitkat_blur_bottom_right from "../../assets/images/kitkat-blur-top-right.png";
import "./HomePage.css";
import React, { useState, useEffect } from "react";
import { useRef } from "react";

const scrollToBestDeal = () => {
  const bestDealElement = document.getElementById("best-deal");
  if (bestDealElement) {
    bestDealElement.scrollIntoView({ behavior: "smooth" });
  }
};

const HomePage = () => {
  const img = [
    ganjel_ah,
    ganjel_in,
    haus_bro,
    haus_cyin,
    haus_gan,
    haus_pahala,
    student_promo,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const intervalRef = useRef(null);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % img.length);
    resetInterval();
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? img.length - 1 : prevIndex - 1
    );
    resetInterval();
  };

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Start a new interval
    intervalRef.current = setInterval(() => {
      nextImage();
    }, 5000);
  };

  useEffect(() => {
    // Start the initial interval
    resetInterval();

    return () => {
      // Clear the interval when the component is unmounted
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const donwloadAPK = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=com.ibn.haus_mobile_app&hl=en-ID"
    );
  };

  return (
    <>
      {/* Kitkat */}
      <NavbarComponent />
      <body className="w-full">
        {/* Kitkat Header */}
        <div className="h-[90vh] w-full kitkat-bg">
          {/* Background Decoration */}
          <div>
            <img
              className="decoration-bg-kitkat-left absolute bottom-0 left-0 w-2/5 lg:w-auto"
              src={kitkat_blur_bottom_left}
              alt="Kitkat Blur Bottom Left"
            />
            <img
              className="decoration-bg-kitkat-right absolute top-30 lg:top-14 right-0 w-2/5 lg:w-auto"
              src={kitkat_blur_bottom_right}
              alt="Kitkat Blur Top Right"
            />
          </div>

          {/* Content Parent */}
          <div className="flex flex-col h-[90vh]">
            {/* Haus and Kitkat Logo */}
            <div className="flex h-[10%] mt-4 lg:mt-10 w-full">
              {/* Haus Logo */}
              <div className="w-1/2">
                <img
                  className="w-[50%] lg:w-[40%] h-full lg:h-[80%] object-contain ms-8 lg:ms-14"
                  src={haus_logo_putih}
                  alt="Haus Logo Putih"
                />
              </div>
              {/* Kitkat Logo */}
              <div className="flex justify-end w-1/2 z-20 me-8 lg:me-0">
                <img
                  className="w-[40%] lg:scale-135 h-full object-contain"
                  src={kitkat_logo}
                  alt="Kitkat Logo"
                />
              </div>
            </div>

            {/* Kitkat Text & Kikat Cup Image*/}
            <div className="flex flex-col lg:flex-row h-[70%] lg:h-[55%] pt-5 lg:pt-0">
              {/* Kitkat Text */}
              <div className="flex justify-center  h-[35%] lg:h-full lg:w-[45%]">
                <img
                  className="object-contain lg:w-[75%] lg:ms-20 lg:mt-8"
                  src={kitkat_text}
                  alt="Kitkat Text"
                />
              </div>

              {/* Kitkat Cup Image */}
              <div className="flex justify-center h-[65%] pt-5 lg:h-full lg:w-[55%]">
                <img
                  className="w-[80%] object-contain scale-125 lg:w-[80%]"
                  src={kitkat_gelas}
                  alt="Kitkat Text"
                />
              </div>
            </div>

            {/* Halal Logo */}
            <div className="h-[10%] lg:h-[15%] flex justify-end">
              <img
                className="w-[10%] lg:h-[80%] object-contain me-10 mt-4 lg:mt-10"
                src={logo_halal}
                alt="Logo Halal"
              />
            </div>

            {/* Promo & Footer Aksen */}
            <div onClick={scrollToBestDeal} className="promo-footer-aksen cursor-pointer absolute bottom-0 flex justify-center w-full pb-5 lg:pb-8">
              <div className="text-white w-[9%] lg:w-fit">
                <div className="text-center text-[9px] lg:text-[18px]">Promo</div>
                <img className=" flex mx-auto md:w-[50%] lg:w-[75%]" src={polygon_arrow} alt="Polygon Arrow" />
              </div>
            </div>
          </div>
        </div>

        {/* Special Deal */}
        <div
          id="best-deal"
          className="relative best-deal w-full py-10 md:py-20 lg:pt-32 lg:pb-20 "
        >
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
          <div className="relative h-auto z-10 ">
            <div className="special-deal-title hidden lg:block flex flex-col items-center pb-2 text-center lg:pb-10 ">
              <hr className="sub-title-line mb-3.5 border-t-4  w-1/5 lg:w-[10%] mx-auto lg:my-3" />
              <div className="sub-title-content text-white text-lg lg:text-[28px] lg:mt-1  font-bold">
                Special Deal
              </div>
            </div>

            <div className="slider w-full overflow">
              <div className="relative">
                {/* Diakalin pake ini */}
                <img
                  src={tamvan_series}
                  alt=""
                  className=" w-90% lg:w-[75%]  mx-auto opacity-0"
                />

                {img.map((image, index) => (
                  <div
                    key={index}
                    className={` top-0 absolute w-full transform transition-transform ease-in-out duration-300 ${
                      index === currentIndex
                        ? "translate-x-0"
                        : index > currentIndex
                        ? "-translate-x-full"
                        : "translate-x-full"
                    }`}
                  >
                    <img
                      className="w-[90%] lg:w-[70%] mx-auto"
                      src={image}
                      alt="Promo Image"
                      onClick={
                        index === currentIndex
                          ? nextImage
                          : () => setCurrentIndex(index)
                      }
                    />
                  </div>
                ))}
              </div>

              <div className="flex justify-center">
                {img.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 mx-2 rounded-full ${
                      index === currentIndex ? "bg-white" : "bg-gray-400"
                    }`}
                    onClick={() => setCurrentIndex(index)}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* Arrow for navigation Promo */}
          <div>
            <div className="absolute z-20 inset-y-0 left-0 flex -mt-5 lg:mt-20 ml-1 w-[10%] lg:w-[7%] lg:ml-14 cursor-pointer">
              <img src={arrow_left} onClick={prevImage} />
            </div>
            <div className="absolute z-20 inset-y-0 right-0 flex -mt-5 lg:mt-20 mr-1 w-[10%] lg:w-[7%] lg:mr-14 cursor-pointer">
              <img src={arrow_right} onClick={nextImage} />
            </div>
          </div>
        </div>

        {/* Best Seller Menu */}
        <div className="w-full py-10 lg:py-22 lg:h-auto lg:flex lg:flex-col lg:justify-center">
          {/* Subtitle */}
          <div className="flex flex-col items-center pb-2 lg:pb-6 ">
            <hr className="sub-title-line w-[30%] border-t-4  w-1/5 lg:w-[12%] mx-auto lg:my-3 lg:my-0" />
            <div className="sub-title-content mt-2 text-[#89489C] text-lg lg:text-[28px] lg:mt-1 font-bold">
              Best Seller Menu
            </div>
          </div>

          <div className="flex flex-row justify-around lg:justify-evenly lg:flex-col lg:mx-auto lg:w-full">
            {/* Row Pertama */}
            <div className="flex flex-col flex-wrap items-center w-full py-4 lg:py-2 lg:flex-row lg:justify-evenly">
              <img
                className="haus-menu w-[75%] py-2 lg:py-0 md:w-[60%] lg:w-[13%] "
                src={kitkat_drink}
                alt="Kitkat Drink"
              />
              <img
                className="haus-menu w-[75%] py-2 lg:py-0 md:w-[60%] lg:w-[13%]"
                src={cone_milo}
                alt="Ice Cream Cone Coklat Milo"
              />
              <img
                className="haus-menu w-[75%] py-2 lg:py-0 md:w-[60%] lg:w-[13%]"
                src={thai_tea}
                alt="Thai Tea"
              />
              <img
                className="haus-menu w-[75%] py-2 lg:py-0 md:w-[60%] lg:w-[13%]"
                src={mango_yakult}
                alt="Ice Mango Mix Yakult"
              />
            </div>

            {/* Row Kedua */}
            <div className="flex flex-col items-center w-full py-4 lg:py-2 lg:flex-row lg:justify-evenly">
              <img
                className="haus-menu w-[75%] py-2 lg:py-0 md:w-[60%] lg:w-[13%]"
                src={choco_lava_milo_float}
                alt="Choco Lava Milo Float"
              />
              <img
                className="haus-menu w-[75%] py-2 lg:py-0 md:w-[60%] lg:w-[13%]"
                src={fresh_lemon_tea}
                alt="Fresh Lemon Tea"
              />
              <img
                className="haus-menu w-[75%] py-2 lg:py-0 md:w-[60%] lg:w-[13%]"
                src={green_thai_tea}
                alt="Green Thai Tea"
              />
              <img
                className="haus-menu w-[75%] py-2 lg:py-0 md:w-[60%] lg:w-[13%]"
                src={oreo}
                alt="Oreo"
              />
            </div>
          </div>
        </div>

        {/* Haus Rame-Rame */}
        <div className="w-full my-5 haus-rame lg:my-0 ">
          {/* Sub Title */}
          <div className="flex flex-col items-center pt-10 md:pt-20 lg:pt-20 pb-10 lg:bg-white">
            <hr className=" sub-title-line-rame z-10 w-[25%] border-t-4 h-fit w-1/5 lg:w-[14%] lg:mb-4  lg:border-pink-500" />
            <div className="sub-title-content font-bold mt-2 text-white lg:mt-0 lg:text-[#89489C] text-lg lg:text-[28px]">
              Haus Rame-Rame
            </div>
          </div>

          {/* Content */}
          <div className=" haus-rame flex flex-col lg:flex-row lg:py-8 ">
            {/* Text and Button */}
            <div className="flex flex-col items-center lg:items-start lg:order-2 lg:w-1/2 lg:py-10 ">
              <div className="my-5 text-center text-white font-bold leading-normal w-[80%] lg:my-0 lg:w-[85%] lg:text-left text-[28px] lg:text-[32px]">
                Ciptakan Momen Bahagiamu Bersama Haus!
              </div>
              <div className="  text-white py-8 w-[70%] text-center font-medium lg:pt-5 lg:pb-8 text-base lg:text-xl lg:text-left lg:w-4/5">
                Semua menu haus! dalam paket rame-rame
              </div>
              <button className="btn-haus-rame hidden lg:block text-white font-bold border text-[16px] border-white py-2 mt-8 rounded-full w-[45%]">
                <a href="/bigorder">Pelajari Selengkapnya</a>
              </button>
            </div>

            {/* Ilustrasi Visual Image */}
            <div className="flex flex-col items-center lg:order-1 lg:w-1/2 lg:my-auto">
              <img
                className="w-[95%] lg:w-[70%] lg:object-contain "
                src={ilustrasi_visual}
                alt="Ilustrasi Visual Lifestyle"
              />
              <button className="btn-haus-rame text-white text-base font-bold border border-white py-3 my-10 rounded-full w-[70%] lg:hidden">
                Pelajari Selengkapnya
              </button>
            </div>
          </div>
        </div>

        {/* Haus Mobile App */}
        <div className="w-full h-auto relative">
          {/* Background Decoration */}
          <div>
            <img
              className=" w-fit lg:w-full top-0"
              src={app_order_decoration}
              alt="App Haus Decoration"
            />
            <img
              className="w-full absolute bottom-0 z-10 "
              src={app_order_decoration}
              alt="App Haus Decoration"
            />
          </div>

          {/* Content */}
          <div className=" mx-4 flex flex-col lg:flex-row mx-auto">
            {/* Text & Google Play */}
            <div className="flex flex-col items-center mx-auto lg:items-start lg:order-2 lg:w-1/2">
              <div className="haus-mobile w-[85%]  md:w-[75%] font-bold lg:mx-0 lg:w-full md:text-left  text-[22px] md:text-4xl lg:text-[32px]">
                Haus Mobile App For Order
              </div>
              <div className=" text-base w-[85%] md:w-[75%] py-5 text-left font-bold lg:text-left lg:w-4/5 text-sm md:text-2xl lg:text-[22px] lg:py-3">
                Dapatkan voucher menarik, dan ekstra promo
              </div>
              <ul className="flex flex-col w-[75%] md:w-[70%] list-disc mb-3 text-xs lg:w-4/5  md:text-base lg:text-lg lg:ms-4">
                <li className="mb-2 py-3 lg:py-0">
                  Lebih Mudah Pesan dengan aplikasi Haus!, kamu bisa pilih
                  pesanan Delivery, Pickup atau Dine In untuk skip antrian
                </li>
                <li className="mb-2 py-3 lg:py-0">
                  Pesan menu Haus! Favorit kamu dari Toko terdekat
                </li>
              </ul>
              <div className=" text-base font-bold py-2 lg:py-1 md:text-2xl lg:text-lg">
                Download aplikasi di
              </div>
              <img
                className="w-2/6 lg:w-[20%] cursor-pointer"
                src={google_play}
                alt="Google Play Icon"
                onClick={donwloadAPK}
              />
            </div>

            {/* <Ilustrasi Haus App Image */}
            <div className="flex flex-col items-center lg:order-1 lg:w-1/2 lg:justify-end">
              <img
                className="z-20 pt-3 md:pt-0 lg:pt-0 w-[85%] md:w-[60%] lg:w-[75%] lg:mt-0"
                src={hp}
                alt="Handphone"
              />
            </div>
          </div>
        </div>
      </body>

      <FooterComponent />
    </>
  );
};
export default HomePage;
