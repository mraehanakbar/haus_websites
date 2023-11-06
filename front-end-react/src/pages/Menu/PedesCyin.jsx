import { ListMenu } from "../../components";

// ROTI BAKAR BANDUNG
import basreng from "../../assets/images/menu/pedes_cyin/Basreng BBQ.jpg";
import makaroni from "../../assets/images/menu/pedes_cyin/Makaroni Cheese.jpg";
import tempe from "../../assets/images/menu/pedes_cyin/Tempe Chili.jpg";
import usus from "../../assets/images/menu/pedes_cyin/Usus Seaweed.jpg";

import MenuSection from "../../components/ListMenu/MenuSection";

const PedesCyn = () => {
  return (
    <>
      <section x-show="all || pedes_cyin">
        <MenuSection
          title="Pedes Cyn"
          content={
            <>
              {" "}
              <ListMenu imgSource={basreng} title="Baso Goreng" />
              <ListMenu imgSource={makaroni} title="Makaroni Cheese" />
              <ListMenu imgSource={tempe} title="Tempe Goreng" />
              <ListMenu imgSource={usus} title="Usus Goreng" />
            </>
          }
        />
      </section>
    </>
  );
};

export default PedesCyn;
