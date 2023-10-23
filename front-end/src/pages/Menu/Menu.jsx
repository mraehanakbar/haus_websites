import { NavbarComponent, FooterComponent, ListMenu } from "../../components";
import kitkat from "../../assets/images/kitkat-drink.png";
import milo from "../../assets/images/cone-milo.png";
import thaigreen from "../../assets/images/gree-thai-tea.png";
import mangoyk from "../../assets/images/mango-yakult.png";
import clmf from "../../assets/images/choco-lava-milo-float.png";
import freshlemon from "../../assets/images/fresh-lemon-tea.png";
import thai from "../../assets/images/thai-tea.png";
import oreo from "../../assets/images/oreo.png";
import minuman from "../../assets/images/minuman.png";
import ganjelroti from "../../assets/images/ganjelroti.png";
import pedes from "../../assets/images/pedes.png";
import hotoppa from "../../assets/images/hotoppa.png";
import ovaltine from "../../assets/images/menu/1_Ovaltine.jpg";
import oreomenu from "../../assets/images/menu/2_Oreo.jpg";
import taro from "../../assets/images/menu/3_Taro.jpg";
import thaimenu from "../../assets/images/menu/4_Thai_tea.jpg";
import thaimenugreen from "../../assets/images/menu/5_Green_Thai Tea.jpg";
// import thaimenugreena from "../../assets/images/menu/Greentea cheese.png";

import "./Menu.css";

const Menu = () => {
  return (
    <>
      <NavbarComponent />
      <div className="top-menu">
        <div className="line-home">
          <div className="lines-home"></div>
        </div>
        <div className="title-homepage">
          <h1>Best Seller Menu</h1>
          <div className="container-bestseller-menu">
            <img src={kitkat} alt="" width={210} height={319} />
            <img src={milo} alt="" width={210} height={319} />
            <img src={thai} alt="" width={210} height={319} />
            <img src={mangoyk} alt="" width={210} height={319} />
            <img src={clmf} alt="" width={210} height={319} />
            <img src={freshlemon} alt="" width={210} height={319} />
            <img src={thaigreen} alt="" width={210} height={319} />
            <img src={oreo} alt="" width={210} height={319} />
          </div>
        </div>
      </div>
      <div className="category">
        <div className="box-category">
          <h1>All Menu</h1>
        </div>
        <div className="box-category">
          <img src={minuman} alt="" />
          <h1>Minuman</h1>
        </div>
        <div className="box-category">
          <img src={ganjelroti} alt="" />
          <h1>Ganjel Roti</h1>
        </div>
        <div className="box-category">
          <img src={pedes} alt="" />
          <h1>Pedes Cyin</h1>
        </div>
        <div className="box-category">
          <img src={hotoppa} alt="" />
          <h1>Hot Oppa</h1>
        </div>
      </div>
      <div className="series-menu">
        <h1>Classic Series</h1>
        <div className="container-series">
          <ListMenu series="Ovalitine" gambar={ovaltine} />
          <ListMenu series="Oreo" gambar={oreomenu} />
          <ListMenu series="Taro" gambar={taro} />
          <ListMenu series="Kitkat Drink" gambar={thaimenu} />
          <ListMenu series="Kitkat Drink" gambar={thaimenugreen} />
        </div>
        <br />
        <br />
        <h1>Cheese Series</h1>
        <div className="container-series">
          <ListMenu series="Greentea Cheese" gambar={ovaltine} />
          <ListMenu series="Choco Avocado Cheese" gambar={oreomenu} />
          <ListMenu series="Mango Cheese Tea" gambar={taro} />
          <ListMenu series="Ovaltine Cheese" gambar={thaimenu} />
          <ListMenu series="Strawberry Cheese Tea" gambar={thaimenugreen} />
          <ListMenu series="Taro Cheese" gambar={thaimenugreen} />
          <ListMenu series="Thai Tea Cheese" gambar={thaimenugreen} />
          <ListMenu series="Choco Hazelnut Cheese" gambar={thaimenugreen} />
          <ListMenu series="Choco Lava Cheese" gambar={thaimenugreen} />
        </div>
        <br />
        <br />
        <h1>Choco Series</h1>
        <div className="container-series">
          <ListMenu series="Choco Hazelnut" gambar={ovaltine} />
          <ListMenu series="Choco Lava Milo" gambar={oreomenu} />
          <ListMenu series="Choco Avocado" gambar={taro} />
        </div>
        <br />
        <br />
        <h1>Boba Series</h1>
        <div className="container-series">
          <ListMenu series="Boba Brown Sugar Fresh Milk" gambar={ovaltine} />
          <ListMenu series="Boba Brown Sugar Milk Tea" gambar={oreomenu} />
        </div>
        <br />
        <br />
        <h1>Tea Series</h1>
        <div className="container-series">
          <ListMenu series="Strawberry Tea" gambar={ovaltine} />
          <ListMenu series="Black Jasmine Tea" gambar={oreomenu} />
          <ListMenu series="Mango Tea" gambar={oreomenu} />
          <ListMenu series="Lychee Tea" gambar={oreomenu} />
          <ListMenu series="Kiwi Tea" gambar={oreomenu} />
        </div>
        <br />
        <br />
        <h1>Yakult Series</h1>
        <div className="container-series">
          <ListMenu series="Mango Yakult" gambar={ovaltine} />
          <ListMenu series="Lychee Yakult" gambar={oreomenu} />
          <ListMenu series="Grape Yakult" gambar={oreomenu} />
        </div>
        <br />
        <br />
        <h1>Coffee Series</h1>
        <div className="container-series">
          <ListMenu series="Kopi Susu Gula Aren" gambar={ovaltine} />
        </div>
        <br />
        <br />
        <h1>Roti Bakar Bandung</h1>
        <div className="container-series">
          <ListMenu series="Roti Bakar Blueberry Keju" gambar={ovaltine} />
          <ListMenu series="Roti Bakar Blueberry" gambar={ovaltine} />
          <ListMenu series="Roti Bakar Chocomaltine Keju" gambar={ovaltine} />
          <ListMenu series="Roti Bakar Chocomaltine" gambar={ovaltine} />
          <ListMenu series="Roti Bakar Cokelat Keju" gambar={ovaltine} />
          <ListMenu series="Roti Bakar Cokelat" gambar={ovaltine} />
          <ListMenu series="Roti Bakar Keju" gambar={ovaltine} />
          <ListMenu series="Roti Bakar Room Butter" gambar={ovaltine} />
          <ListMenu series="Roti Bakar Strawberry" gambar={ovaltine} />
        </div>
        <br />
        <br />
        <h1>Roti Maryam</h1>
        <div className="container-series">
          <ListMenu series="Roti Maryam Blueberry Keju" gambar={ovaltine} />
          <ListMenu series="Roti Maryam Blueberry" gambar={ovaltine} />
          <ListMenu series="Roti Maryam Chocomaltine Keju" gambar={ovaltine} />
          <ListMenu series="Roti Maryam Chocomaltine" gambar={ovaltine} />
          <ListMenu series="Roti Maryam Cokelat Keju" gambar={ovaltine} />
          <ListMenu series="Roti Maryam Cokelat" gambar={ovaltine} />
          <ListMenu series="Roti Maryam Keju" gambar={ovaltine} />
          <ListMenu series="Roti Maryam Strawberry" gambar={ovaltine} />
          <ListMenu series="Roti Maryam Susu" gambar={ovaltine} />
        </div>
        <br />
        <br />
        <h1>Roti Kukus</h1>
        <div className="container-series">
          <ListMenu series="Roti Kukus Blueberry Keju" gambar={ovaltine} />
          <ListMenu series="Roti Kukus Blueberry" gambar={ovaltine} />
          <ListMenu series="Roti Kukus Chocomaltine Keju" gambar={ovaltine} />
          <ListMenu series="Roti Kukus Chocomaltine" gambar={ovaltine} />
          <ListMenu series="Roti Kukus Cokelat Keju" gambar={ovaltine} />
          <ListMenu series="Roti Kukus Cokelat" gambar={ovaltine} />
          <ListMenu series="Roti Kukus Keju" gambar={ovaltine} />
          <ListMenu series="Roti Kukus Strawberry" gambar={ovaltine} />
        </div>
        <br />
        <br />
        <h1>Pedes Cyin</h1>
        <div className="container-series">
          <ListMenu series="Baso Goreng" gambar={ovaltine} />
          <ListMenu series="Makaroni Goreng" gambar={ovaltine} />
          <ListMenu series="Tempe Goreng" gambar={ovaltine} />
          <ListMenu series="Usus Goreng" gambar={ovaltine} />
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default Menu;
