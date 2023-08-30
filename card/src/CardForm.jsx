import { useRef, useState } from "react";
import back from "./assets/bg-card-back.png";
import front from "./assets/bg-card-front.png";
// import bg from "./bg-main-desktop.png";
import mobilebg from "./assets/bg-main-mobile.png";
import logo from "./assets/card-logo.svg";
import Success from "./success";

const CardForm = () => {
  const [values, setValues] = useState({
    cardName: "JANE APPLESEED",
    cardNumber: "0000 0000 0000 0000",
    month: "00",
    year: "00",
    cvc: "000",
  });

  const [formData, setFormData] = useState({
    username: "",
    number: "",
    month: "",
    year: "",
    cvc: "",
  });

  const [isValid, setisValid] = useState(false);

  const [error, setError] = useState({
    nameError: "",
    numError: "",
    dateError: "",
  });
  const formRef = useRef();

  const validate = (e) => {
    e.preventDefault();
    if (formData.username.trim() === "") {
      setError({ ...error, nameError: "Can't be blank" });
    } else if (formData.number.match(/[A-Za-z]/)) {
      setError({ ...error, numError: "Wrong format, numbers only" });
    } else if ((formData.month.trim || formData.year.trim()) === "") {
      setError({ ...error, dateError: "Can't be blank" });
      console.log(formData.month);
      console.log(formData.year);
    } else {
      setisValid(!isValid);
      formRef.current.reset();
    }
  };
  return (
    <>
      <img className="mobilebg" src={mobilebg} alt="bg-mobile" />
      <main>
        <section className="card">
          <section className="card-back">
            <img src={back} alt="card-back" />
            <span className="card-back-no">{values.cvc}</span>
          </section>

          <section className="card-front">
            <img src={front} alt="card-front" />
            <img className="logo" src={logo} alt="logo" />
            <span className="card-no">{values.cardNumber}</span>
            <span className="card-name">
              <span>{values.cardName}</span>
              <span className="card-date">
                {values.month}/{values.year}
              </span>
            </span>
          </section>
        </section>
        {isValid === true ? (
          <Success onClick={() => setisValid(!isValid)} />
        ) : (
          <form ref={formRef} onSubmit={validate}>
            <span>
              <label htmlFor="name">CARDHOLDER NAME</label>
              <input
                type="text"
                name="name"
                placeholder="e.g Jane Appleseed"
                onChange={(e) => {
                  setValues((values) => ({
                    ...values,
                    cardName: e.target.value,
                  }));
                  setFormData((formData) => ({
                    ...formData,
                    username: e.target.value,
                  }));
                }}
              />
              <div style={{ color: "red" }}>{error.nameError}</div>
            </span>

            <span>
              <label htmlFor="number">CARD NUMBER</label>
              <input
                type="tel"
                name="number"
                placeholder="e.g 1234 5678 9123 0000"
                onChange={(e) => {
                  setValues((values) => ({
                    ...values,
                    cardNumber: e.target.value,
                  }));
                  setFormData((formData) => ({
                    ...formData,
                    number: e.target.value,
                  }));
                }}
              />
              <div style={{ color: "red" }}>{error.numError}</div>
            </span>

            <span className="form-end">
              <div>
                <label htmlFor="month">EXP. DATE (MM/YY)</label>
                <input
                  type="text"
                  name="month"
                  placeholder="MM"
                  onChange={(e) => {
                    setValues((values) => ({
                      ...values,
                      month: e.target.value,
                    }));
                    setFormData((formData) => ({
                      ...formData,
                      month: e.target.value,
                    }));
                  }}
                />
                <input
                  type="text"
                  aria-label="year"
                  name="year"
                  placeholder="YY"
                  onChange={(e) => {
                    setValues((values) => ({
                      ...values,
                      year: e.target.value,
                    }));
                    setFormData((formData) => ({
                      ...formData,
                      year: e.target.value,
                    }));
                  }}
                />
                <div style={{ color: "red" }}>{error.dateError}</div>
              </div>
              <div>
                <label htmlFor="cvc">CVC</label>
                <input
                  type="text"
                  name="cvc"
                  placeholder="e.g 123"
                  onChange={(e) => {
                    setValues((values) => ({
                      ...values,
                      cvc: e.target.value,
                    }));
                    setFormData((formData) => ({
                      ...formData,
                      cvc: e.target.value,
                    }));
                  }}
                />
              </div>
            </span>
            <button>Confirm</button>
          </form>
        )}
      </main>
    </>
  );
};
export default CardForm;
