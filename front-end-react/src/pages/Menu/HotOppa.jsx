import { ListMenu } from "../../components";

import blackGarlic from "../../assets/images/menu/hot_oppa/Black Garlic Ramyeon.png";
import bolognese from "../../assets/images/menu/hot_oppa/Bolognese Fried Ramyeon.png";
import boneMarrow from "../../assets/images/menu/hot_oppa/Bone Marrow Ramyeon.png";
import cheeseBomb from "../../assets/images/menu/hot_oppa/Cheese Bomb Dumpling.png";
import chickenBomb from "../../assets/images/menu/hot_oppa/Chicken Bomb Dumpling.png";
import chickenFried from "../../assets/images/menu/hot_oppa/Chicken Fried Ramyeon.png";
import chikuwa from "../../assets/images/menu/hot_oppa/Chikuwa.png";
import crabStick from "../../assets/images/menu/hot_oppa/Crab Stick.png";
import dBeef from "../../assets/images/menu/hot_oppa/Dimsum Beef.png";
import dCrab from "../../assets/images/menu/hot_oppa/Dimsum Crab.png";
import dJamur from "../../assets/images/menu/hot_oppa/Dimsum Jamur.png";
import dRambutan from "../../assets/images/menu/hot_oppa/Dimsum Rambutan.png";
import dUdang from "../../assets/images/menu/hot_oppa/Dimsum Udang.png";
import dWortel from "../../assets/images/menu/hot_oppa/Dimsum Wortel.png";
import exFriedRamyeon from "../../assets/images/menu/hot_oppa/Extra Spicy Fried Ramyeon.png";
import fBall from "../../assets/images/menu/hot_oppa/Fish Ball.png";
import fCake from "../../assets/images/menu/hot_oppa/Fish Cake.png";
import fRoll from "../../assets/images/menu/hot_oppa/Fish Roll.png";
import ffBall from "../../assets/images/menu/hot_oppa/Fried Fish Ball.png";
import ffCake from "../../assets/images/menu/hot_oppa/Fried Fish Cake.png";
import gimmari from "../../assets/images/menu/hot_oppa/Gimmari.png";
import kulitUdang from "../../assets/images/menu/hot_oppa/Kulit Udang.png";
import mandu from "../../assets/images/menu/hot_oppa/Mandu.png";
import meatball from "../../assets/images/menu/hot_oppa/Meatball.png";
import odeng from "../../assets/images/menu/hot_oppa/Odeng.png";
import shrimpBall from "../../assets/images/menu/hot_oppa/Shrimp Ball.png";
import sbFriedRamyeon from "../../assets/images/menu/hot_oppa/Spicy Bibim Fried Ramyeon.png";
import sfCake from "../../assets/images/menu/hot_oppa/Spicy Fish Cake.png";
import skRamyeon from "../../assets/images/menu/hot_oppa/Spicy Kimchi Ramyeon.png";
import topokki from "../../assets/images/menu/hot_oppa/Topokki.png";

import MenuSection from "../../components/ListMenu/MenuSection";

const HotOppa = () => {
  return (
    <>
      <section x-show="all || hot_oppa">
        {/* NOODLE SOUP */}
        <MenuSection
          title="Noodle Soup"
          content={
            <>
              <ListMenu imgSource={skRamyeon} title="Spicy Kimchi Ramyeon" />
              <ListMenu imgSource={blackGarlic} title="Black Garlic Ramyeon" />
              <ListMenu imgSource={boneMarrow} title="Bone Marrow Ramyeon" />
            </>
          }
        />
        {/* Fried Noodle*/}
        <MenuSection
          title="Fried Noodle"
          content={
            <>
              <ListMenu imgSource={bolognese} title="Bolognese Fried Ramyeon" />
              <ListMenu
                imgSource={chickenFried}
                title="Chicken Fried Ramyeon"
              />
              <ListMenu
                imgSource={exFriedRamyeon}
                title="Extra Spicy Fried Ramyeon"
              />
              <ListMenu
                imgSource={sbFriedRamyeon}
                title="Spicy Bimbim Fried Ramyeon"
              />
            </>
          }
        />

        {/* Topokki*/}
        <MenuSection
          title="Topokki"
          content={
            <>
              <ListMenu imgSource={topokki} title="Topokki" />
            </>
          }
        />

        {/* BOILED SIDE DISH */}
        <MenuSection
          title="Boiled Side Dish"
          content={
            <>
              <ListMenu imgSource={chikuwa} title="Chikuwa" />
              <ListMenu imgSource={fRoll} title="Fish Roll" />
              <ListMenu imgSource={shrimpBall} title="Shrimp Ball" />
              <ListMenu imgSource={mandu} title="Mandu" />
              <ListMenu imgSource={gimmari} title="Gimmari" />
              <ListMenu imgSource={ffCake} title="Fried Fish Cake" />
              <ListMenu imgSource={ffBall} title="Fried Fish Ball" />
            </>
          }
        />

        {/* Fried SIDE DISH */}
        <MenuSection
          title="Fried Side Dish"
          content={
            <>
              <ListMenu imgSource={cheeseBomb} title="Cheese Bomb Dumpling" />
              <ListMenu imgSource={chickenBomb} title="Chicken Bomb Dumpling" />
              <ListMenu imgSource={chikuwa} title="Chikuwa" />
              <ListMenu imgSource={crabStick} title="Crab Stick" />
              <ListMenu imgSource={fBall} title="Fish Ball" />
              <ListMenu imgSource={fCake} title="Fish Cake" />
              <ListMenu imgSource={odeng} title="Odeng" />
              <ListMenu imgSource={sfCake} title="Spicy Fish Cake" />
              <ListMenu imgSource={meatball} title="Meatball" />
            </>
          }
        />

        {/* DIMSUM */}
        <MenuSection
          title="Dimsum"
          content={
            <>
              <ListMenu imgSource={dBeef} title="Dimsum Beef" />
              <ListMenu imgSource={dCrab} title="Dimsum Crab" />
              <ListMenu imgSource={dUdang} title="Dimsum Udang" />
              <ListMenu imgSource={dJamur} title="Dimsum Jamur" />
              <ListMenu imgSource={dRambutan} title="Dimsum Rambutan" />
              <ListMenu imgSource={dWortel} title="Dimsum Wortel" />
              <ListMenu imgSource={kulitUdang} title="Kulit Udang" />
            </>
          }
        />

        {/* MINUMAN HOT OPPA*/}
        <MenuSection
          title="Minuman Hot Oppa"
          content={
            <>
              <ListMenu imgSource={chikuwa} title="Chikuwa" />
            </>
          }
        />
      </section>
    </>
  );
};

export default HotOppa;
