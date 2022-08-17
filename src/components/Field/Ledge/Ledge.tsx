import * as React from "react";
import "./Ledge.less";
import { BrowserRouter as Router, Link } from "react-router-dom";

export const Ledge = () => {
  return (
    <div className="Ledge">
      <div className="Ledge__Menu">
        <Link to="/">
          <img className="Ledge__Logo" src="./src/images/Field/Logocr.svg" />
        </Link>
        <Link to="/">
          <div className="Ledge__Name">
            Ing. Aleš Vachuška <br /> Odhady Nemovitostí
          </div>
        </Link>
      </div>
    </div>
  );
};
