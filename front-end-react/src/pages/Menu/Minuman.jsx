import { ListMenu } from "../../components";

import ovaltine from "../../assets/images/menu/classic_series/1_Ovaltine.jpg";
import oreo from "../../assets/images/menu/classic_series/2_Oreo.jpg";
import taro from "../../assets/images/menu/classic_series/3_Taro.jpg";
import thaiTea from "../../assets/images/menu/classic_series/4_Thai Tea.jpg";
import greenThai from "../../assets/images/menu/classic_series/5_Green Thai Tea.jpg";

// CHEESE SERIES
import greenTeaC from "../../assets/images/menu/cheese_series/2_Green Tea Cheese.jpg";
import chocoAvocadoC from "../../assets/images/menu/cheese_series/1_Choco avocado cheese.jpg";
import mangoCT from "../../assets/images/menu/cheese_series/3_Mango Cheese Tea.jpg";
import ovaltineC from "../../assets/images/menu/cheese_series/4_Oreo Cheese.jpg";
import oreoC from "../../assets/images/menu/cheese_series/5_Ovaltine Cheese.jpg";
import strawberryCT from "../../assets/images/menu/cheese_series/8_Strawberry Cheese Tea.jpg";
import taroC from "../../assets/images/menu/cheese_series/9_Taro Cheese.jpg";
import thaiTC from "../../assets/images/menu/cheese_series/10_Thai Tea Cheese.jpg";
import chocoHazelnutC from "../../assets/images/menu/cheese_series/6_Choco Hazelnut Cheese.jpg";
import chocoLavaMiloC from "../../assets/images/menu/cheese_series/7_Choco Lava Milo Cheese.jpg";

// CHOCO SERIES
import chocoAvocado from "../../assets/images/menu/choco_series/1_Choco Avocado.jpg";
import chocoHazelnut from "../../assets/images/menu/choco_series/2_Choco Hazelnut.jpg";
import chocoLavaMilo from "../../assets/images/menu/choco_series/3_Choco lava milo.jpg";

// BOBA
import bobaMilk from "../../assets/images/menu/boba_series/1_Boba Brown Sugar Fresh Milk.jpg";
import bobaMilkT from "../../assets/images/menu/boba_series/2_Boba Brown Sugar Milk Tea.jpg";

// TEA
import blackJasmineT from "../../assets/images/menu/tea_series/Black Jasmine Tea.jpg";
import kiwiT from "../../assets/images/menu/tea_series/Kiwi Tea.jpg";
import lycheeT from "../../assets/images/menu/tea_series/Lychee Tea.jpg";
import mangoT from "../../assets/images/menu/tea_series/Mango Tea.jpg";
import strawberryT from "../../assets/images/menu/tea_series/Strawberry Tea.jpg";

// YAKULT SERIES
import grapeYk from "../../assets/images/menu/yakult_series/Grape Yakult.jpg";
import lycheeYk from "../../assets/images/menu/yakult_series/Lychee Yakult.jpg";
import mangoYk from "../../assets/images/menu/yakult_series/Mango Yakult.jpg";

// COFFEE SERIES
import coffeeSG from "../../assets/images/menu/coffee_series/kopi susu gula aren.jpg";

const Minuman = () => {
  return (
    <>
      <section x-show="all || minuman">
        <div className="flex justify-center mt-4">
          <div className="w-10/12 mt-12">
            <h1 className="font-semibold text-3xl">Classic Series</h1>
            <div className="grid grid-cols-5 gap-x-12 gap-y-10 mt-12">
              <ListMenu imgSource={greenTeaC} title="Green Tea Cheese" />
              <ListMenu
                imgSource={chocoAvocadoC}
                title="Choco Avocado Cheese"
              />
              <ListMenu imgSource={mangoCT} title="Mango Cheese Tea" />
              <ListMenu imgSource={ovaltineC} title="Ovaltine Cheese" />
              <ListMenu imgSource={oreoC} title="Oreo Cheese" />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <div className="w-10/12 mt-12">
            <h1 className="font-semibold text-3xl">Cheese Series</h1>
            <div className="grid grid-cols-5 gap-x-12 gap-y-10 mt-12">
              <ListMenu
                imgSource={strawberryCT}
                title="Strawberry Cheese Tea"
              />
              <ListMenu imgSource={taroC} title="Taro Cheese" />
              <ListMenu imgSource={thaiTC} title="Thai Tea Cheese" />
              <ListMenu
                imgSource={chocoHazelnutC}
                title="Choco Hazelnut Cheese"
              />
              <ListMenu
                imgSource={chocoLavaMiloC}
                title="Choco Lava Milo Cheese"
              />
              <ListMenu imgSource={ovaltine} title="Ovaltine" />
              <ListMenu imgSource={oreo} title="Oreo" />
              <ListMenu imgSource={taro} title="Taro" />
              <ListMenu imgSource={thaiTea} title="Thai Tea" />
              <ListMenu imgSource={greenThai} title="Green Thai Tea" />
            </div>
          </div>
        </div>

        {/* CHOCO SERIES */}
        <div className="flex justify-center mt-4">
          <div className="w-10/12 mt-12">
            <h1 className="font-semibold text-3xl">Choco Series</h1>
            <div className="grid grid-cols-5 gap-x-12 gap-y-10 mt-12">
              <ListMenu imgSource={chocoAvocado} title="Choco Avocado" />
              <ListMenu imgSource={chocoHazelnut} title="Choco Hazelnut" />
              <ListMenu imgSource={chocoLavaMilo} title="Choco Lava Milo" />
            </div>
          </div>
        </div>

        {/* BOBA SERIES */}
        <div className="flex justify-center mt-4">
          <div className="w-10/12 mt-12">
            <h1 className="font-semibold text-3xl">Boba Series</h1>
            <div className="grid grid-cols-5 gap-x-12 gap-y-10 mt-12">
              <ListMenu
                imgSource={bobaMilk}
                title="Boba Brown Sugar Fresh Milk"
              />
              <ListMenu
                imgSource={bobaMilkT}
                title="Boba Brown Sugar Milk Tea"
              />
            </div>
          </div>
        </div>

        {/* TEA SERIES */}
        <div className="flex justify-center mt-4">
          <div className="w-10/12 mt-12">
            <h1 className="font-semibold text-3xl">Tea Series</h1>
            <div className="grid grid-cols-5 gap-x-12 gap-y-10 mt-12">
              <ListMenu imgSource={strawberryT} title="Strawberry Tea" />
              <ListMenu imgSource={blackJasmineT} title="Black Jasmine Tea" />
              <ListMenu imgSource={kiwiT} title="Kiwi Tea" />
              <ListMenu imgSource={lycheeT} title="Lychee Tea" />
              <ListMenu imgSource={mangoT} title="Mango Tea" />
            </div>
          </div>
        </div>

        {/* YAKULT SERIES */}
        <div className="flex justify-center mt-4">
          <div className="w-10/12 mt-12">
            <h1 className="font-semibold text-3xl">Yakult Series</h1>
            <div className="grid grid-cols-5 gap-x-12 gap-y-10 mt-12">
              <ListMenu imgSource={grapeYk} title="Grape Yakult" />
              <ListMenu imgSource={lycheeYk} title="Lychee Yakult" />
              <ListMenu imgSource={mangoYk} title="Mango Yakult" />
            </div>
          </div>
        </div>

        {/* COFFEE SERIES */}
        <div className="flex justify-center mt-4">
          <div className="w-10/12 mt-12">
            <h1 className="font-semibold text-3xl">Coffee Series</h1>
            <div className="grid grid-cols-5 gap-x-12 gap-y-10 mt-12">
              <ListMenu imgSource={coffeeSG} title="Kopi Susu Gula Aren" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Minuman;
