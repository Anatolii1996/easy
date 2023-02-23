const Card = ({title, imageUrl}) => {
  return (
    <div  >
      <img src={imageUrl} className="card-img-top" alt="card-image" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
      </div>
    </div>
  );
};
export default Card;
