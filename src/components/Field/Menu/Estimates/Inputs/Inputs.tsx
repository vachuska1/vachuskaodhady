import * as React from "react";
import "./Inputs.less";

export const Inputs = () => {
  // const [formState, { text, email, tel, textarea }] = useFormState();
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  return (
    <div className="Inputs">
      <form className="Inputs__Form">
        <input
          className="Inputs__Name"
          //{...text("name")}
          placeholder={"Vaše jméno a příjmení"}
        />
        <input
          className="Inputs__Number"
          //{...tel("number")}
          type="tel"
          placeholder={"Vaše tel. číslo"}
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
          required
        />
        <input
          className="Inputs__Email"
          // {...email("email")}
          placeholder={"Vaše emailová adresa"}
          required
        />
        <br />
        <input
          className="Inputs__Message"
          //{...textarea("text")}
          placeholder="S čím Vám mohu pomoci?"
        />
        <br />
        <button className="Inputs__Submit">Poslat</button>
      </form>
    </div>
  );
};
