import { ListMenu } from "../../components";

// ROTI BAKAR BANDUNG
import basreng from "../../assets/images/menu/pedes_cyin/Basreng BBQ.jpg";
import makaroni from "../../assets/images/menu/pedes_cyin/Makaroni Cheese.jpg";
import tempe from "../../assets/images/menu/pedes_cyin/Tempe Chili.jpg";
import usus from "../../assets/images/menu/pedes_cyin/Usus Seaweed.jpg";

const PedesCyn = () => {
  return (
    <>
      <section x-show="all || pedes_cyin">
        <div className="flex justify-center mt-4">
          <div className="w-10/12 mt-12">
            <h1 className="font-semibold text-3xl">Pedes Cyin</h1>
            <div className="grid grid-cols-5 gap-x-12 gap-y-10 mt-12">
              <ListMenu imgSource={basreng} title="Basreng BBQ" />
              <ListMenu imgSource={makaroni} title="Makaroni Cheese" />
              <ListMenu imgSource={tempe} title="Tempe Chili" />
              <ListMenu imgSource={usus} title="Usus Seaweed" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PedesCyn;
