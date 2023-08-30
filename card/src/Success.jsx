/* eslint-disable react/prop-types */
import check from "./assets/icon-complete.svg";

const Success = ({ onClick }) => {
  return (
    <>
      <div className="success">
        <img src={check} alt="check" className="check" />
        <h1>THANK YOU</h1>
        <h3>We&apos;ve added your card details!</h3>
        <button onClick={onClick}>Continue</button>
      </div>
    </>
  );
};

export default Success;
