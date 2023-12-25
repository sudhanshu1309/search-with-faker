import zeviLogo from "../../assets/zevi.png";

const Logo = () => {
  return (
    <>
      <div className="logo-container">
        <img src={zeviLogo} alt="zevi-logo" className="logo" />
      </div>
    </>
  );
};

export default Logo;
