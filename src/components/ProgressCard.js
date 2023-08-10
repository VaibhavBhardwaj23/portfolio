import "./ProgressCard.css";

const ProgressCard = ({ title, src }) => {
  return (
    <div className="progress">
      <div className="text">
        <p>{title}</p>
      </div>
      <div className="image">
        <img src={src} alt="image" />
      </div>
    </div>
  );
};

export default ProgressCard;
