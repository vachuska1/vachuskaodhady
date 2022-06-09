import * as React from "react";
import "./Ledge.less";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

export const Ledge = () => {
  return (
    <div className="Ledge">
      <div className="Ledge__Menu">
        <NavLink to="/">
          <img className="Ledge__Logo" src="./src/images/Field/Logo.svg" />
        </NavLink>
        <NavLink to="/">
          <div className="Ledge__Name">
            Ing. Aleš Vachuška <br /> Odhady Nemovitostí
          </div>
        </NavLink>
      </div>
    </div>
  );
};
