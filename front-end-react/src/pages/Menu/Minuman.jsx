import { ListMenu } from "../../components";

import ovaltine from "../../assets/images/menu/classic_series/1_Ovaltine.jpg";
import oreo from "../../assets/images/menu/classic_series/2_Oreo.jpg";
import taro from "../../assets/images/menu/classic_series/3_Taro.jpg";
import thaiTea from "../../assets/images/menu/classic_series/4_Thai Tea.jpg";
import greenThai from "../../assets/images/menu/classic_series/5_Green Thai Tea.jpg";

// CHEESE SERIES
import greenTeaC from "../../assets/images/menu/cheese_series/2_Green Tea Cheese.jpg";
import chocoAvocadoC from "../../assets/images/menu/cheese_series/1_Choco Avocado Cheese.jpg";
import mangoCT from "../../assets/images/menu/cheese_series/3_Mango Cheese Tea.jpg";
import oreoC from "../../assets/images/menu/cheese_series/4_Oreo Cheese.jpg";
import ovaltineC from "../../assets/images/menu/cheese_series/5_Ovaltine Cheese.jpg";
import strawberryCT from "../../assets/images/menu/cheese_series/8_Strawberry Cheese Tea.jpg";
import taroC from "../../assets/images/menu/cheese_series/9_Taro Cheese.jpg";
import thaiTC from "../../assets/images/menu/cheese_series/10_Thai Tea Cheese.jpg";
import chocoHazelnutC from "../../assets/images/menu/cheese_series/6_Choco Hazelnut Cheese.jpg";
import chocoLavaC from "../../assets/images/menu/cheese_series/7_Choco Lava Cheese.jpg";

// CHOCO SERIES
import chocoAvocado from "../../assets/images/menu/choco_series/1_Choco Avocado.jpg";
import chocoHazelnut from "../../assets/images/menu/choco_series/2_Choco Hazelnut.jpg";
import chocoLava from "../../assets/images/menu/choco_series/3_Choco Lava.jpg";

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

import MenuSection from "../../components/ListMenu/MenuSection";

const Minuman = () => {
  return (
    <>
      <section x-show="all || minuman">
        {/* CLASSIC SERIES */}
        <MenuSection
          title="Classic Series"
          content={
            <>
              <ListMenu imgSource={ovaltine} title="Ovaltine" />
              <ListMenu imgSource={oreo} title="Cookies & Cream" />
              <ListMenu imgSource={taro} title="Taro" />
              <ListMenu imgSource={thaiTea} title="Thaitea" />
              <ListMenu imgSource={greenThai} title="Green Thaitea" />
            </>
          }
        />

        {/* CHEESE SERIES */}
        <MenuSection
          title="Cheese Series"
          content={
            <>
              <ListMenu imgSource={greenTeaC} title="Greentea Cheese " />
              <ListMenu
                imgSource={chocoAvocadoC}
                title="Choco Avocado Cheese"
              />
              <ListMenu imgSource={mangoCT} title="Mango Cheese Tea" />
              <ListMenu imgSource={ovaltineC} title="Ovaltine Cheese Tea" />
              <ListMenu imgSource={oreoC} title="Cookies & Cream Cheese" />
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
              <ListMenu imgSource={chocoLavaC} title="Choco Lava Cheese" />
            </>
          }
        />

        {/* CHOCO SERIES */}
        <MenuSection
          title="Choco Series"
          content={
            <>
              <ListMenu imgSource={chocoHazelnut} title="Choco Hazelnut" />
              <ListMenu imgSource={chocoLava} title="Choco Lava" />
              <ListMenu imgSource={chocoAvocado} title="Choco Avocado" />
            </>
          }
        />

        {/* BOBA SERIES */}
        <MenuSection
          title="Boba Series"
          content={
            <>
              <ListMenu
                imgSource={bobaMilk}
                title="Boba Brown Sugar Fresh Milk"
              />
              <ListMenu
                imgSource={bobaMilkT}
                title="Boba Brown Sugar Milk Tea"
              />
            </>
          }
        />

        {/* TEA SERIES */}
        <MenuSection
          title="Tea Series"
          content={
            <>
              <ListMenu imgSource={strawberryT} title="Strawberry Tea" />
              <ListMenu imgSource={blackJasmineT} title="Black Jasmine Tea" />
              <ListMenu imgSource={mangoT} title="Mango Tea" />
              <ListMenu imgSource={lycheeT} title="Lychee Tea" />
              <ListMenu imgSource={kiwiT} title="Kiwi Tea" />
            </>
          }
        />

        <MenuSection
          title="Yakult Series"
          content={
            <>
              <ListMenu imgSource={mangoYk} title="Mango Yakult" />
              <ListMenu imgSource={lycheeYk} title="Lychee Yakult" />
              <ListMenu imgSource={grapeYk} title="Grape Yakult" />
            </>
          }
        />

        <MenuSection
          title="Coffee Series"
          content={
            <>
              <ListMenu imgSource={coffeeSG} title="Kopi Susu Gula Aren" />
            </>
          }
        />
      </section>
    </>
  );
};

export default Minuman;
