import PropTypes from "prop-types";
import dropdown from "../assets/icons/dropdown.svg";
import map from "../assets/icons/map.svg";

function capitalizeWords(string) {
  return string
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

const LocationList = ({ city, cityData }) => {
  return (
    <div x-data="{ open: false, svgUp: true}">
      <button
        x-on:click="open = !open; svgUp = !svgUp"
        class="flex m-auto justify-between w-9/12"
      >
        <h1 class="text-1.5xl font-bold text-pink-main">
          {capitalizeWords(city)}
        </h1>
        <img x-show="svgUp" src={dropdown} />
        <img x-show="open" class="rotate-180" src={dropdown} />
      </button>
      <div
        x-show="open"
        class="flex m-auto justify-center w-9/12 p-4 bg-pink-dropdown text-gray-700"
        aria-labelledby="dropdownMenuButton1"
      >
        <div class="grid grid-cols-2 justify-stretch w-full">
          {cityData.map((store, index) => [
            <div
              key={`col1-${index}`}
              class="col-span-1 py-1.5 text-sm font-semibold"
            >
              <img class="inline" src={map} width="28px" height="28px" />
              <h1 className="inline ml-2">{capitalizeWords(store)}</h1>
            </div>,
            <div
              key={`col2-${index}`}
              class="col-span-1 py-1.5 text-sm font-semibold"
            >
              <img class="inline" src={map} width="28px" height="28px" />
              <h1 className="inline ml-2">{capitalizeWords(store)}</h1>
            </div>,
          ])}
        </div>
      </div>
    </div>
  );
};

LocationList.propTypes = {
  //   title: PropTypes.string.isRequired,
  //   alamat: PropTypes.string.isRequired,
};

export default LocationList;
