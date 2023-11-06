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
      <div className="applyjob lg:py-6 lg:px-5" onClick={toggleRequirements}>
        <div className="text-[16px] lg:text-[26px] font-medium">{title}</div>
        <div className="detail">
          <p className="text-[14px] lg:text-[26px] font-medium me-10">Lihat Detail</p>
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
          <div className="applybutton lg:flex lg:flex-row justify-evenly md:justify-end  mx-3 pb-4 lg:right-0">
            <button
              className="applyemail lg:w-fit lg:text-[20px] text-center me-1 p-2 lg:p-3 shadow-lg font-medium"
              onClick={emailTO}
            >
              Apply with Email
            </button>
            <button
              className="applylinkedin  lg:w-fit lg:text-[20px] text-center ms-1 p-2 lg:p-3 shadow-lg font-medium"
              onClick={linkedinHaus}
            >
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
