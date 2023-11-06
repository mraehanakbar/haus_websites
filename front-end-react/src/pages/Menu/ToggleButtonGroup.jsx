import haus from "../../assets/icons/haus.svg";
import ganjel_roti from "../../assets/icons/ganjel_roti.svg";
import hot_oppa from "../../assets/icons/hot_oppa.svg";
import pedes_cyin from "../../assets/icons/pedes_cyn.png";

const ToggleButtonGroup = () => {
  return (
    <>
      <div class="mx-auto grid w-11/12 lg:w-10/12 md:px-5 grid-cols-6 md:grid-cols-10 gap-x-3 gap-y-4 text-base sm:text-lg md:text-xl justify-center font-bold ">
        <button
          x-on:click="all = true;minuman = false;roti=false; pedes_cyin=false;hot_oppa=false"
          class=" bg-gray-button rounded-3xl text-purple-main col-span-2"
          x-bind:class="!all ? '' : 'bg-purple-main text-white '"
        >
          All Menu
        </button>

        {/* <!-- MINUMAN --> */}
        <button
          x-on:click="all = false; minuman = true;roti=false; pedes_cyin=false;hot_oppa=false"
          class=" py-3 md:py-4 lg:py-5 bg-gray-button rounded-3xl text-purple-main flex justify-between flex-col items-center col-span-2"
          x-bind:class="!minuman ? '' : 'bg-purple-main text-white'"
        >
          <img src={haus} class="w-12 scale-75 md:scale-90 lg:scale-100" />
          <p>Minuman</p>
        </button>
        {/* <!-- GANJEL ROTI --> */}
        <button
          x-on:click="all = false; minuman=false;roti=true; pedes_cyin=false;hot_oppa=false"
          class=" py-3 md:py-4 lg:py-5 bg-gray-button rounded-3xl text-purple-main flex justify-between flex-col items-center col-span-2"
          x-bind:class="!roti ? '' : 'bg-purple-main text-white'"
        >
          <img
            src={ganjel_roti}
            class="w-24 scale-75 md:scale-90 lg:scale-100"
          />
          <p>Ganjel Roti</p>
        </button>

        {/* <!-- PEDES CYIN --> */}
        <button
          x-on:click="all = false; minuman=false;roti=false; pedes_cyin=true;hot_oppa=false"
          class=" py-3 md:py-4 lg:py-5 bg-gray-button rounded-3xl text-purple-main flex justify-between flex-col items-center col-start-2 md:col-start-7 col-span-2"
          x-bind:class="!pedes_cyin ? '' : 'bg-purple-main text-white'"
        >
          <img
            src={pedes_cyin}
            class="w-28 scale-75 md:scale-90 lg:scale-100"
          />
          <p>Pedes Cyin</p>
        </button>

        {/* <!-- HOT OPPA --> */}
        <button
          x-on:click="all = false; minuman=false;roti=false; pedes_cyin=false;hot_oppa=true"
          class=" py-3 md:py-4 lg:py-5 bg-gray-button rounded-3xl text-purple-main flex justify-between flex-col items-center col-span-2 md:col-start-9"
          x-bind:class="!hot_oppa ? '' : 'bg-purple-main text-white'"
        >
          <img src={hot_oppa} class="w-28 scale-75 md:scale-90 lg:scale-100" />
          <p>Hot Oppa</p>
        </button>
      </div>
    </>
  );
};

export default ToggleButtonGroup;
