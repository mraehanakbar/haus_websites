import ganjel_roti from "../../assets/images/menu/button_icon/ganjel_roti.svg";
import ganjel_roti_selected from "../../assets/images/menu/button_icon/ganjel_roti_selected.svg";
import hot_oppa from "../../assets/images/menu/button_icon/hot_oppa.svg";
import hot_oppa_selected from "../../assets/images/menu/button_icon/hot_oppa_selected.svg";
import minuman from "../../assets/images/menu/button_icon/minuman.svg";
import minuman_selected from "../../assets/images/menu/button_icon/minuman_selected.svg";
import pedes_cyin from "../../assets/images/menu/button_icon/pedes_cyin.svg";
import pedes_cyin_selected from "../../assets/images/menu/button_icon/pedes_cyin_selected.svg";

const ToggleButtonGroup = () => {
  return (
    <>
      <div class="w-11/12 lg:w-10/12 px-10 mx-auto grid grid-cols-4 md:grid-cols-10 gap-x-4 gap-y-4 text-base sm:text-lg md:text-xl justify-center font-bold ">
        <button
          x-on:click="all = true;minuman = false;roti=false; pedes_cyin=false;hot_oppa=false"
          class=" bg-gray-button rounded-3xl text-pink-main col-span-2"
          x-bind:class="!all ? '' : 'bg-purple-main text-white '"
        >
          All Menu
        </button>

        {/* <!-- MINUMAN --> */}
        <button
          x-on:click="all = false; minuman = true;roti=false; pedes_cyin=false;hot_oppa=false"
          class=" py-6 bg-gray-button rounded-3xl text-pink-main flex justify-between flex-col items-center col-span-2"
          x-bind:class="!minuman ? '' : 'bg-purple-main text-white'"
        >
          <img
            src={minuman}
            class="w-12 scale-75 md:scale-90 lg:scale-100"
            x-bind:class="!minuman ? '' : 'hidden'"
          />
          <img
            src={minuman_selected}
            class="w-12 scale-75 md:scale-90 lg:scale-100"
            x-bind:class="minuman ? '' : 'hidden'"
          />
          <p>Minuman</p>
        </button>
        {/* <!-- GANJEL ROTI --> */}
        <button
          x-on:click="all = false; minuman=false;roti=true; pedes_cyin=false;hot_oppa=false"
          class=" py-6 bg-gray-button rounded-3xl text-pink-main flex justify-between flex-col items-center col-span-2"
          x-bind:class="!roti ? '' : 'bg-purple-main text-white'"
        >
          <img
            src={ganjel_roti}
            class="h-16 scale-75 md:scale-90 lg:scale-100"
            x-bind:class="!roti ? '' : 'hidden'"
          />
          <img
            src={ganjel_roti_selected}
            class="h-16 scale-75 md:scale-90 lg:scale-100"
            x-bind:class="roti ? '' : 'hidden'"
          />
          <p>Ganjel Roti</p>
        </button>

        {/* <!-- PEDES CYIN --> */}
        <button
          x-on:click="all = false; minuman=false;roti=false; pedes_cyin=true;hot_oppa=false"
          class=" py-6 bg-gray-button rounded-3xl text-pink-main flex justify-between flex-col items-center col-span-2"
          x-bind:class="!pedes_cyin ? '' : 'bg-purple-main text-white'"
        >
          <img
            src={pedes_cyin}
            class="h-14 scale-75 md:scale-90 lg:scale-100"
            x-bind:class="!pedes_cyin ? '' : 'hidden'"
          />
          <img
            src={pedes_cyin_selected}
            class="h-14 scale-75 md:scale-90 lg:scale-100"
            x-bind:class="pedes_cyin ? '' : 'hidden'"
          />
          <p>Pedes Cyin</p>
        </button>

        {/* <!-- HOT OPPA --> */}
        <button
          x-on:click="all = false; minuman=false;roti=false; pedes_cyin=false;hot_oppa=true"
          class=" py-6 bg-gray-button rounded-3xl text-pink-main flex justify-between flex-col items-center col-span-2 col-start-2 md:col-start-9"
          x-bind:class="!hot_oppa ? '' : 'bg-purple-main text-white'"
        >
          <img
            src={hot_oppa}
            class="w-16 scale-75 md:scale-90 lg:scale-100"
            x-bind:class="!hot_oppa ? '' : 'hidden'"
          />
          <img
            src={hot_oppa_selected}
            class="w-16 scale-75 md:scale-90 lg:scale-100"
            x-bind:class="hot_oppa ? '' : 'hidden'"
          />
          <p>Hot Oppa</p>
        </button>
      </div>
    </>
  );
};

export default ToggleButtonGroup;
