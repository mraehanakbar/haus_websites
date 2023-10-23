import { NavbarComponent, FooterComponent, ListMenu } from "../../components";

import headlineImg from "../../assets/images/menu/best_seller/menu_headline.png";
import kitkatDrink from "../../assets/images/menu/best_seller/Kitkat Drink.png";
import chocoLava from "../../assets/images/menu/best_seller/Choco lava Milo Float.png";
import coneMilo from "../../assets/images/menu/best_seller/cone Milo.png";
import freshLemon from "../../assets/images/menu/best_seller/Fresh Lemon Tea.png";
import greenThai from "../../assets/images/menu/best_seller/Green Thai Tea.png";
import mangoYakult from "../../assets/images/menu/best_seller/Mango Yakult.png";
import oreo from "../../assets/images/menu/best_seller/Oreo.png";
import thaiTea from "../../assets/images/menu/best_seller/thai Tea.png";

const HeadlineMenu = () => {
  return (
    <>
      <section className="relative">
        <img
          src={headlineImg}
          alt="menu headline bg"
          className="min-w-full bg-pink-menu-headline -z-30 "
        />

        <div className="absolute -top-8 md:top-0 lg:top-8 min-w-full">
          <div className="">
            <div className="mt-12 flex justify-center w-full">
              <div className="bg-pink-main w-32 md:w-40 h-1.5"></div>
            </div>
            <h1 className="text-white mt-1 md:mt-2.5 font-semibold text-center text-lg md:text-2.5xl">
              Best Seller Menu
            </h1>
          </div>

          {/* <!-- BEST SELLER LIST --> */}
          <div className="mx-auto w-11/12 md:10/12 md:mt-5 lg:mt-10 bg">
            <div className="space-y-1 md:space-y-3 lg:space-y-7">
              <div className="flex justify-evenly relative">
                <img src={kitkatDrink} className="w-1/5" />
                <img src={coneMilo} className="w-1/5" />
                <img src={thaiTea} className="w-1/5" />
                <img src={mangoYakult} className="w-1/5" />
              </div>

              <div className="flex justify-evenly relative">
                <img src={chocoLava} className="w-1/5" />
                <img src={freshLemon} className="w-1/5" />
                <img src={greenThai} className="w-1/5" />
                <img src={oreo} className="w-1/5" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeadlineMenu;
