import testImage from "../../assets/home.svg";

const Card = () => {
  return (
    <>
      <div className="card">
        <img src={testImage} alt="" className="card-image" />
        <p>Lorem ipsum dolor sit</p>
      </div>
    </>
  );
};

export default Card;
