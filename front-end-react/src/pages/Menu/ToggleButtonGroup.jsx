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
      <div class="h-44 w-10/12 mx-auto flex justify-evenly font-bold text-2xl">
        <button
          x-on:click="all = true;minuman = false;roti=false; pedes_cyin=false;hot_oppa=false"
          class="w-1/6 bg-gray-button rounded-3xl text-pink-main"
          x-bind:class="!all ? '' : 'bg-purple-main text-white'"
        >
          All Menu
        </button>

        {/* <!-- MINUMAN --> */}
        <button
          x-on:click="all = false; minuman = true;roti=false; pedes_cyin=false;hot_oppa=false"
          class="w-1/6 py-6 bg-gray-button rounded-3xl text-pink-main flex justify-between flex-col items-center"
          x-bind:class="!minuman ? '' : 'bg-purple-main text-white'"
        >
          <img
            src={minuman}
            class="w-12"
            x-bind:class="!minuman ? '' : 'hidden'"
          />
          <img
            src={minuman_selected}
            class="w-12"
            x-bind:class="minuman ? '' : 'hidden'"
          />
          <p>Minuman</p>
        </button>
        {/* <!-- GANJEL ROTI --> */}
        <button
          x-on:click="all = false; minuman=false;roti=true; pedes_cyin=false;hot_oppa=false"
          class="w-1/6 py-6 bg-gray-button rounded-3xl text-pink-main flex justify-between flex-col items-center"
          x-bind:class="!roti ? '' : 'bg-purple-main text-white'"
        >
          <img
            src={ganjel_roti}
            class="h-16"
            x-bind:class="!roti ? '' : 'hidden'"
          />
          <img
            src={ganjel_roti_selected}
            class="h-16"
            x-bind:class="roti ? '' : 'hidden'"
          />
          <p>Ganjel Roti</p>
        </button>
        {/* <!-- PEDES CYIN --> */}
        <button
          x-on:click="all = false; minuman=false;roti=false; pedes_cyin=true;hot_oppa=false"
          class="w-1/6 py-6 bg-gray-button rounded-3xl text-pink-main flex justify-between flex-col items-center"
          x-bind:class="!pedes_cyin ? '' : 'bg-purple-main text-white'"
        >
          <img
            src={pedes_cyin}
            class="h-14"
            x-bind:class="!pedes_cyin ? '' : 'hidden'"
          />
          <img
            src={pedes_cyin_selected}
            class="h-14"
            x-bind:class="pedes_cyin ? '' : 'hidden'"
          />
          <p>Pedes Cyin</p>
        </button>
        {/* <!-- HOT OPPA --> */}
        <button
          x-on:click="all = false; minuman=false;roti=false; pedes_cyin=false;hot_oppa=true"
          class="w-1/6 py-6 bg-gray-button rounded-3xl text-pink-main flex justify-between flex-col items-center"
          x-bind:class="!hot_oppa ? '' : 'bg-purple-main text-white'"
        >
          <img
            src={hot_oppa}
            class="w-16"
            x-bind:class="!hot_oppa ? '' : 'hidden'"
          />
          <img
            src={hot_oppa_selected}
            class="w-16"
            x-bind:class="hot_oppa ? '' : 'hidden'"
          />
          <p>Hot Oppa</p>
        </button>
      </div>
    </>
  );
};

export default ToggleButtonGroup;
