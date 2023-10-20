import PropTypes from "prop-types";

const Newlocation = ({ title, alamat }) => {
  return (
    <div className="mb-10 ">
      <h1 className="font-bold text-pink-font text-1.5xl">{title}</h1>
      <p className="mt-6 font-semibold text-lg">{alamat}</p>
    </div>
  );
};

Newlocation.propTypes = {
  title: PropTypes.string.isRequired,
  alamat: PropTypes.string.isRequired,
};

export default Newlocation;
