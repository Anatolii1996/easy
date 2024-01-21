/* eslint-disable */
import { Link } from "react-router-dom";

const Card = ({title, imageUrl}) => {
  return (
    <Link className="app_card" to={`/card/${title} `}>
      <img src={imageUrl} className="card-img-top" alt="card-image" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
      </div>
    </Link>
    
  );
};
export default Card;
