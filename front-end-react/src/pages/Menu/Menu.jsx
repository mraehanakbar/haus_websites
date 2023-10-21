import { NavbarComponent, FooterComponent } from "../../components";
// NOTE 10 MENU PERTAMA BLM GANTI JADI PNG
import HeadlineMenu from "./HeadlineMenu";
import ToggleButtonGroup from "./ToggleButtonGroup";
import Minuman from "./Minuman";
import Roti from "./Roti";
import PedesCyn from "./PedesCyin";
import HotOppa from "./HotOppa";

const Menu = () => {
  return (
    <>
      <NavbarComponent />

      {/* <!-- HEADLINE --> */}
      <HeadlineMenu />

      <section
        className="mt-20 mb-20"
        x-data="{ all: true, minuman: false, roti: false, pedes_cyin: false, hot_oppa:false}"
      >
        <ToggleButtonGroup />

        <Minuman />
      </section>

      <FooterComponent />
    </>
  );
};

export default Menu;
