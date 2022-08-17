import * as React from "react";
import "./Estimates.less";
import "../MenuContent.less";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

export const Estimates = () => {
  return (
    <div className="Estimates Estimates__HeadText">
      Proč odhad nemovitosti? <br />
      <div className="Estimates__Content">
        <div className="Estimates__Rows"> Prodáváte vlastní nemovitost?</div>
        <div className="Estimates__Rows">
          Chcete znát hodnotu své nemovitosti?
        </div>
        <div className="Estimates__Rows">Kupujete nemovitost.</div>
        <div className="Estimates__Rows">Čeká Vás Dědické řízení?</div>
        <br /> <br />
        <div className="Estimates__HeadText">Dále by Vás mohlo zajímat</div>
        <p className="Estimates__Text Estimates__ActiveText">
          Mám zájem o odhad
        </p>
        <NavLink to="/Cenik">
          <p className="Estimates__Text">Jaké jsou ceny?</p>
        </NavLink>
        <NavLink to="/Ocenovani">
          <p className="Estimates__Text"> Co jsou to odhady nemovitostí?</p>
        </NavLink>
      </div>
    </div>
  );
};
