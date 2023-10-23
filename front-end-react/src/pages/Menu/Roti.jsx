import { ListMenu } from "../../components";

// ROTI BAKAR BANDUNG
import blueberryK from "../../assets/images/menu/roti_bakar_bandung/Roti Bakar Blueberry Keju.png";
import blueberry from "../../assets/images/menu/roti_bakar_bandung/Roti Bakar Blueberry.png";
import chocomaltineK from "../../assets/images/menu/roti_bakar_bandung/Roti Bakar Chocomaltine Keju.png";
import chocomaltine from "../../assets/images/menu/roti_bakar_bandung/Roti Bakar Chocomaltine.png";
import cokelatK from "../../assets/images/menu/roti_bakar_bandung/Roti Bakar Cokelat Keju.png";
import cokelat from "../../assets/images/menu/roti_bakar_bandung/Roti Bakar Cokelat.png";
import keju from "../../assets/images/menu/roti_bakar_bandung/Roti Bakar Keju.png";
import roomButter from "../../assets/images/menu/roti_bakar_bandung/Roti Bakar Room Butter.png";
import strawberry from "../../assets/images/menu/roti_bakar_bandung/Roti Bakar Strawberry.png";

// ROTI KUKUS
import KblueberryK from "../../assets/images/menu/roti_kukus/Roti Kukus Blueberry Keju.jpg";
import Kblueberry from "../../assets/images/menu/roti_kukus/Roti Kukus Blueberry.jpg";
import KchocomaltineK from "../../assets/images/menu/roti_kukus/Roti Kukus Chocomaltine Keju.jpg";
import Kchocomaltine from "../../assets/images/menu/roti_kukus/Roti Kukus Chocomaltine.jpg";
import KcokelatK from "../../assets/images/menu/roti_kukus/Roti Kukus Coklat Keju.jpg";
import Kcokelat from "../../assets/images/menu/roti_kukus/Roti Kukus Coklat.jpg";
import Kkeju from "../../assets/images/menu/roti_kukus/Roti Kukus Keju.jpg";
import Kstrawberry from "../../assets/images/menu/roti_kukus/Roti Kukus Strawbery.jpg";

// ROTI MARYAM
import MblueberryK from "../../assets/images/menu/roti_maryam/Maryam Bluberry Keju.jpg";
import Mblueberry from "../../assets/images/menu/roti_maryam/Maryam Bluberry.jpg";
import MchocomaltineK from "../../assets/images/menu/roti_maryam/Maryam Chocomaltine Keju.jpg";
import Mchocomaltine from "../../assets/images/menu/roti_maryam/Maryam Chocomaltine.jpg";
import McokelatK from "../../assets/images/menu/roti_maryam/Maryam Coklat Keju.jpg";
import Mcokelat from "../../assets/images/menu/roti_maryam/Maryam Coklat.jpg";
import Mkeju from "../../assets/images/menu/roti_maryam/Maryam Keju.jpg";
import Msusu from "../../assets/images/menu/roti_maryam/Maryam Susu.jpg";
import Mstrawberry from "../../assets/images/menu/roti_maryam/Roti Maryam Strawberry.png";

import MenuSection from "../../components/ListMenu/MenuSection";

const Roti = () => {
  return (
    <>
      <section x-show="all || roti">
        {/* ROTI BAKAR BANDUNG */}
        <MenuSection
          title="Roti Bakar"
          content={
            <>
              <ListMenu
                imgSource={blueberryK}
                title="Roti Bakar Blueberry Keju"
              />
              <ListMenu imgSource={blueberry} title="Roti Bakar Blueberry" />
              <ListMenu
                imgSource={chocomaltineK}
                title="Roti Bakar Chocomaltine Keju"
              />
              <ListMenu
                imgSource={chocomaltine}
                title="Roti Bakar Chocomaltine"
              />
              <ListMenu imgSource={cokelatK} title="Roti Bakar Cokelat Keju" />
              <ListMenu imgSource={cokelat} title="Roti Bakar Cokelat" />
              <ListMenu imgSource={keju} title="Roti Bakar Keju" />
              <ListMenu imgSource={roomButter} title="Roti Bakar Room Butter" />
              <ListMenu imgSource={strawberry} title="Roti Bakar Strawberry" />
            </>
          }
        />

        {/* ROTI MARYAM */}
        <MenuSection
          title="Roti Maryam"
          content={
            <>
              {" "}
              <ListMenu
                imgSource={MblueberryK}
                title="Roti Maryam Blueberry Keju"
              />
              <ListMenu imgSource={Mblueberry} title="Roti Maryam Blueberry" />
              <ListMenu
                imgSource={MchocomaltineK}
                title="Roti Maryam Chocomaltine Keju"
              />
              <ListMenu
                imgSource={Mchocomaltine}
                title="Roti Maryam Chocomaltine"
              />
              <ListMenu
                imgSource={McokelatK}
                title="Roti Maryam Cokelat Keju"
              />
              <ListMenu imgSource={Mcokelat} title="Roti Maryam Cokelat" />
              <ListMenu imgSource={Mkeju} title="Roti Maryam Keju" />
              <ListMenu imgSource={Msusu} title="Roti Maryam Room Susu" />
              <ListMenu
                imgSource={Mstrawberry}
                title="Roti Maryam Strawberry"
              />
            </>
          }
        />

        {/* ROTI KUKUS */}
        <MenuSection
          title="Roti Kukus"
          content={
            <>
              {" "}
              <ListMenu
                imgSource={KblueberryK}
                title="Roti Kukus Blueberry Keju"
              />
              <ListMenu imgSource={Kblueberry} title="Roti Kukus Blueberry" />
              <ListMenu
                imgSource={KchocomaltineK}
                title="Roti Kukus Chocomaltine Keju"
              />
              <ListMenu
                imgSource={Kchocomaltine}
                title="Roti Kukus Chocomaltine"
              />
              <ListMenu imgSource={KcokelatK} title="Roti Kukus Cokelat Keju" />
              <ListMenu imgSource={Kcokelat} title="Roti Kukus Cokelat" />
              <ListMenu imgSource={Kkeju} title="Roti Kukus Keju" />
              <ListMenu imgSource={Kstrawberry} title="Roti Kukus Strawberry" />
            </>
          }
        />
      </section>
    </>
  );
};

export default Roti;
