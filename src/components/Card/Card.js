import "./Card.css";
import albumArt from "./img1.jpg";

const Card = () => {
  return (
    <div className="card-container">
      <img src={albumArt} className="card-img" />
      <h1>Neck & Wrist</h1>
      <p>Pusha T</p>
    </div>
  );
};

export default Card;
