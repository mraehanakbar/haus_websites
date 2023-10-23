import PropTypes from "prop-types";
import "./ListMenu.css";

const ListMenu = ({ series, gambar }) => {
  return (
    <div className="list-menu-container">
      <div className="menu-list">
        <img src={gambar} alt="" />
        <p>{series}</p>
      </div>
    </div>
  );
};

ListMenu.propTypes = {
  series: PropTypes.string,
  nama: PropTypes.string,
  gambar: PropTypes.string,
};

export default ListMenu;
