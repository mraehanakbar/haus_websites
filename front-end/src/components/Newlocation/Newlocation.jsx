import PropTypes from "prop-types";
import "./Newlocation.css";

const Newlocation = ({ title, alamat }) => {
  return (
    <div className="location-component">
      <h1>{title}</h1>
      <p>{alamat}</p>
    </div>
  );
};

Newlocation.propTypes = {
  title: PropTypes.string.isRequired,
  alamat: PropTypes.string.isRequired,
};

export default Newlocation;
