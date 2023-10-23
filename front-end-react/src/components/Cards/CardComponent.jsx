import PropTypes from "prop-types"; // Import PropTypes
import "./card.css";

const CardComponent = ({ date, content, imageUrl }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt="Card" className="card-image" />
      <div className="card-content">
        <h2 className="card-date">{date}</h2>
        <p className="card-text">{content}</p>
      </div>
    </div>
  );
};

// PropTypes validation
CardComponent.propTypes = {
  date: PropTypes.string.isRequired, // Validate date as a required string
  content: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default CardComponent;
