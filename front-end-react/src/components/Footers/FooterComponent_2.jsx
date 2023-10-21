import "./footer.css";
import logo from "../../assets/images/logoatas.png";
import playstore from "../../assets/images/googleplay.png";
import appstore from "../../assets/images/appstore.png";
import vektor from "../../assets/images/Vector.png";
import map from "../../assets/images/mpa.png";
import instagram from "../../assets/images/instagram.png";
import tiktok from "../../assets/images/tiktok.png";
import linkedin from "../../assets/images/linkedin.png";

const FooterComponent = () => {
  return (
    <footer className="mx-auto w-screen h-auto text-black py-20 lg:mx-0">
      <div className="flex flex-col lg:flex-row w-[80%] mx-auto">
        {/* Logo Haus & Social Media */}
        <div className="flex flex-col lg:mx-0 lg:w-1/4">
          <img className="w-1/2 lg:w-2/5" src={logo} alt="Logo Haus" />
          <div className="w-fit my-10 lg:my-0 lg:mt-4 lg:mb-2">
            <p className="tracking-wider text-4xl my-3 lg:my-0 lg:text-base lg:text-left">
              PT. INSPIRASI BISNIS NUSANTARA
            </p>
            <hr className="border-footer z-10 border-t-4 border-purple-haus pb-2" />
          </div>

          <div className="flex flex-row">
            <img className="w-1/12 mr-4" src={vektor} alt="Logo Mail" />
            <div className="flex justify-center items-center text-2xl ">
              <p className="text-4xl text-center lg:text-2xl">
                hello@haus.co.id
              </p>
            </div>
          </div>

          <div className="my-16 lg:my-0">
            <div className="font-bold my-10 text-4xl lg:text-3xl text-left">
              Follow Us
            </div>
            <div className="flex flex-row">
              <img
                className="w-[12%] my-2"
                src={instagram}
                alt="Logo Instagram"
              />
              <img
                className="w-[12%] my-2 px-15"
                src={tiktok}
                alt="Logo Tiktok"
              />
              <img
                className="w-[12%] my-2"
                src={linkedin}
                alt="Logo Linkedin"
              />
            </div>
          </div>
        </div>

        {/* // Brand & Haus App */}
        <div className="flex flex-row py-8 justify-between lg:justify-evenly lg:py-0 lg:w-1/2">
          {/* Brand */}
          <div className="lg:flex lg:flex-col lg:h-auto ">
            <h2 className="text-4xl font-bold w-1/2 lg:text-2xl lg:w-fit">
              BRAND
            </h2>
            <div className=" text-left text-3xl lg:text-xl lg:flex lg:flex-col lg:justify-evenly lg:h-full">
              <div className="my-10 lg:my-3">Haus! Indonesia</div>
              <div className="">Ganjel Roti</div>
              <div className="my-10 lg:my-3">Pedes Cyin</div>
              <div className="">Hot Oppa</div>
            </div>
          </div>

          {/* Haus App */}
          <div className=" flex flex-col justify-evenly lg:justify-start">
            <h2 className="text-4xl font-bold lg:text-2xl">HAUS! APPS</h2>
            <div className="text-3xl mt-5 font-bold lg:text-xl">
              Download Now
            </div>
            <img
              className="w-full py-8 lg:py-3 lg:w-9/12"
              src={playstore}
              alt="Google Play"
            />
            <img className="w-full lg:w-9/12" src={appstore} alt="App Store" />
          </div>
        </div>

        {/* Lokasi Kami */}
        <div className="flex flex-col lg:items-start py-10 lg:w-1/4 lg:py-0 lg:mx-0">
          <h2 className="text-4xl text-left font-bold lg:text-2xl">
            Lokasi Kami
          </h2>
          <p className="text-left text-4xl mt-10 mb-8 lg:text-xl">
            Taman Meruya Ilir, Jl. Safifr I Blok E6 No.27
          </p>
          <img className="lg:w-full" src={map} alt="Haus Maps" />
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
