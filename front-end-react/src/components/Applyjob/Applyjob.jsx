import { useState } from "react";
import PropTypes from "prop-types";
import "./Applyjob.css";
import arrow from "../../assets/images/arrow.png";

const Applyjob = ({ title, requirements }) => {
  const [showRequirements, setShowRequirements] = useState(false);
  const [isArrowRotated, setIsArrowRotated] = useState(false);

  const toggleRequirements = () => {
    setShowRequirements(!showRequirements);
    setIsArrowRotated(!isArrowRotated);
  };

  const linkedinHaus = () => {
    window.open(
      "https://www.linkedin.com/company/pt-inspirasi-bisnis-nusantara-haus-indonesia/mycompany/",
      "_blank"
    );
  };

  const emailTO = () => {
    window.open("mailto:loker@haus.co.id", "_blank");
  };

  return (
    <div className="applycontainer">
      <div className="applyjob" onClick={toggleRequirements}>
        <h1>{title}</h1>
        <div className="detail">
          <p>Lihat Detail</p>
          <img
            src={arrow}
            alt="arrow"
            className={`detail ${isArrowRotated ? "rotate" : ""}`}
            width={20}
            height={20}
          />
        </div>
      </div>
      {showRequirements && (
        <div className="container-req">
          <div className="requirements-popup">
            <ul>
              {requirements.map((requirement, index) => (
                <li key={index}>{requirement}</li>
              ))}
            </ul>
          </div>
          <div className="applybutton">
            <button className="applyemail" onClick={emailTO}>
              Kirim email ke HR Haus!
            </button>
            <button className="applylinkedin" onClick={linkedinHaus}>
              See on Linkedin
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

Applyjob.propTypes = {
  title: PropTypes.string.isRequired,
  requirements: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Applyjob;
