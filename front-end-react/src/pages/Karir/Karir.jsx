import { NavbarComponent, FooterComponent, Applyjob } from "../../components";
import "./karir.css";
import karir1 from "../../assets/images/karir_1.png";
import karir2 from "../../assets/images/karir_2.png";

const Karir = () => {
  return (
    <>
      <NavbarComponent />

      {/* <div className="topcontainer">
        <div className="images">
          <div className="containerimg1">
            <img className=""src={karir1} alt="" />
          </div>
          <div className="containerimg2">
            <img src={karir2} alt="" />
          </div>
        </div>
        <div className="description mx-14">
          <h1>Bergabunglah menjadi bagian dari Haus!</h1>
          <p>
            Kami ingin memperluas tim kami dengan orang-orang suportif dan
            positif. Kenali tim kami lebih baik
          </p>
        </div>
      </div> */}

      <div className="relative top-container flex flex-col bg-[#E03E9F] lg:flex-row lg:py-14 lg:h-auto">
        {/* Images */}
        <div className="images flex justify-center item-center mt-8 mb-5 lg:my-0 lg:mx-0 w-full lg:w-[50%] lg:my-auto lg:h-full">
          {/* First Images */}
          <div className="-mr-4 lg:-mr-0 lg:relative lg:w-full lg:flex lg:justify-end lg:me-7">
            <img
              className="z-10 object-contain lg:scale-135"
              src={karir1}
              alt="Karir 1"
            />
          </div>

          {/* Second Images */}
          <div className="-ml-4 lg:relative lg:w-full lg:flex lg:-ml-0">
            <img
              className="z-20 object-contain lg:scale-135"
              src={karir2}
              alt="Karir 2"
            />
          </div>
        </div>

        {/* Text Container*/}
        <div className="text px-5 lg:px-0 lg:pr-28 lg:pl-10 lg:w-[50%] lg:my-10 ">
          {/* Text Big */}
          <div className="text-white text-center lg:text-left font-bold text-[28px] lg:text-[32px] leading-relaxed">
            Bergabunglah menjadi bagian dari Haus!
          </div>

          {/* Text Small */}
          <div className="text-white text-center lg:text-left font-normal text-[16px] pt-5 mb-4 lg:mb-10">
            Kami ingin memperluas tim kami dengan menambah orang-orang suportif
            dan positif. Kenali tim kami lebih baik
          </div>
        </div>
      </div>

      <div className="w-screen">
        <div className="title-karir flex flex-col">
          <hr className="sub-title-line mb-3.5 border-t-4 lg:border-[3px] w-1/5 w-[40%] md:w-[18%] lg:w-[13%] mx-auto mt-8 lg:mt-12" />
          <div className="text-[20px] lg:text-[28px] font-semibold text-center leading-8 lg:leading-[42px]">
            Posisi Yang Dibutuhkan
          </div>
        </div>
        <div></div>
        <div className="operational flex flex-col justify-center my-[50px] mb-[500px]">
          <div className="font-semibold text-[24px] lg:text-[35px] leading-9 mb-5 lg:mb-8">
            Operational
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
        </div>
      </div>

      <FooterComponent />
    </>
  );
};

export default Karir;
