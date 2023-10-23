import { useState } from "react";
import PropTypes from "prop-types";
import "./ListLokasi.css";
import arrow from "../../assets/images/arrow.png";
import map from "../../assets/images/map.svg";

const ListLokasi = ({ kota, daerah }) => {
  const [showDaerah, setShowdaerah] = useState(false);
  const [isArrowRotated, setIsArrowRotated] = useState(false);

  const toggledaerah = () => {
    setShowdaerah(!showDaerah);
    setIsArrowRotated(!isArrowRotated);
  };

  return (
    <div className="listcontainer">
      <div className="llist" onClick={toggledaerah}>
        <h1>{kota}</h1>
        <div className="detaillokasi">
          <img
            src={arrow}
            alt="arrow"
            className={`detail ${isArrowRotated ? "rotate" : ""}`}
          />
        </div>
      </div>
      {showDaerah && (
        <div className="container-lokasi">
          <div className="lokasi-popup">
            <ul>
              {daerah.map((daerah, index) => (
                <li key={index}>
                  {" "}
                  <img src={map} alt="" /> {daerah}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

ListLokasi.propTypes = {
  kota: PropTypes.string.isRequired,
  daerah: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ListLokasi;
