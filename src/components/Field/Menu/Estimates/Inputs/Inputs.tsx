import * as React from "react";
import { useState, useEffect } from "react";
import "./Inputs.less";
import {
  InputErrorState,
  InputSendResponse,
  InputState,
} from "./InputsInterface";

export const Inputs = () => {
  const [state, setState] = useState<InputState>({
    name: "",
    email: "",
    number: null,
    info: "",
  });
  const [errors, setErrors] = useState<InputErrorState>({
    nameError: "",
    emailError: "",
    numberError: "",
    infoError: "",
  });
  const [validate, setValidate] = useState<boolean>(false);
  const [sendRespoonse, setSendResponse] = useState<InputSendResponse>(
    InputSendResponse.NOT_SENDED
  );

  useEffect(() => {
    if (validate) {
      sendForm();
    }
  }, [validate]);

  const checkErrorBeforeSending = () => {
    if (
      (state.name !== "" && state.email !== "") ||
      (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(state.email) &&
        state.number !== null &&
        state.info !== "")
    ) {
      setValidate(true);
    } else {
      let errorObject: InputErrorState = errors;
      if (state.name === "") {
        errorObject.nameError = "Vyplňte jméno a příjmení.";
      } else {
        errorObject.nameError = "";
      }
      if (
        state.email === "" ||
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(state.email)
      ) {
        errorObject.emailError = "Vyplňte email.";
      } else {
        errorObject.emailError = "";
      }
      if (state.info === "") {
        errorObject.infoError = "Vyplňte zprávu.";
      } else {
        errorObject.infoError = "";
      }
      if (state.number === null) {
        errorObject.numberError = "Vyplňte telefonní číslo.";
      } else {
        errorObject.numberError = "";
      }
      setErrors({ ...errorObject });
      setValidate(false);
    }
  };

  const sendForm = () => {
    fetch("./src/API/Contact/Contact.php", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: state.name,
        email: state.email,
        number: state.number,
        info: state.info,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result === InputSendResponse.SUCCESFULL_SEND) {
          console.log(
            "uspesne poslani mail funkce - asi navazat na nejaky state a rict uzivateli ze se to poslalo"
          );
          setSendResponse(InputSendResponse.SUCCESFULL_SEND);
        } else if (result === InputSendResponse.NOT_SUCCESFULL_SEND) {
          console.log(
            "neuspěsné posláni mail funkce - asi navazat na nejaky state a rict uzivateli ze se to neposlalo"
          );
          setSendResponse(InputSendResponse.NOT_SUCCESFULL_SEND);
        }
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkErrorBeforeSending();
  };

  return sendRespoonse === InputSendResponse.SUCCESFULL_SEND ? (
    <div>Úspěsné odeslaný formulář, děkujeme</div>
  ) : sendRespoonse === InputSendResponse.NOT_SUCCESFULL_SEND ? (
    <div>Formulář neodeslán, obnovte stránku a zkuste znova </div>
  ) : (
    <div className="Inputs">
      <form className="Inputs__Form">
        <div className="Inputs__Block Inputs__Block--name">
          <input
            className="Inputs__Name"
            value={state.name}
            onChange={(event) =>
              setState({ ...state, name: event.target.value })
            }
            placeholder={"Vaše jméno a příjmení"}
          />
          {errors.nameError && (
            <div className="Inputs__Error">{errors.nameError}</div>
          )}
        </div>
        <div className="Inputs__Block Inputs__Block--number">
          <input
            className="Inputs__Number"
            value={state.number?.toString()}
            onChange={(event) =>
              setState({ ...state, number: parseInt(event.target.value) })
            }
            type="tel"
            placeholder={"Vaše tel. číslo"}
            required
          />
          {errors.numberError.length ? (
            <div className="Inputs__Error">{errors.numberError}</div>
          ) : null}
        </div>
        <div className="Inputs__Block Inputs__Block--email">
          <input
            className="Inputs__Email"
            value={state.email}
            onChange={(event) =>
              setState({ ...state, email: event.target.value })
            }
            placeholder={"Vaše emailová adresa"}
            required
          />
          {errors.emailError.length ? (
            <div className="Inputs__Error">{errors.emailError}</div>
          ) : null}
        </div>
        <br />
        <div className="Inputs__Block Inputs__Block--info">
          <input
            className="Inputs__Message"
            value={state.info}
            onChange={(event) =>
              setState({ ...state, info: event.target.value })
            }
            placeholder="S čím Vám mohu pomoci?"
          />
          {errors.infoError.length ? (
            <div className="Inputs__Error">{errors.infoError}</div>
          ) : null}
        </div>
        <br />
        <button className="Inputs__Submit" onClick={handleSubmit}>
          Poslat
        </button>
      </form>
    </div>
  );
};
