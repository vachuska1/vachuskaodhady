import * as React from "react";
import "./Estimates.less";
import "../MenuContent.less";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { Inputs } from "./Inputs/Inputs";

export const Estimates = () => {
  return (
    <div className="Estimates Estimates__HeadText">
      Proč odhad nemovitosti? <br />
      <div className="Estimates__Content">
        <li className="Estimates__Rows"> Prodáváte nemovitost</li>
        <li className="Estimates__Rows">Kupujete nemovitost</li>
        <li className="Estimates__Rows">Chcete znát hodnotu své nemovitosti</li>
        <li className="Estimates__Rows">Pro potřeby dědického řízení apod.</li>
        <br />
        <div className="Estimates__HeadText">Kde odhad provádíme</div>
        <p>
          Odhad provádíme na území celé ČR, upřednosťujeme Plzeňský a Jihočeský
          kraj.
        </p>
        <br />
        <a href="/odhady"></a>
        <div className="Estimates__HeadText">Potřebujete odhad</div>
        <p>
          Můžete mě kontaktovat přes niže umístěný formulář, odpověď zašlu do 24
          hodin.
        </p>
        <p>
          Nebo jsem dostupný též na telefonním čísle 774104020 a emailové adrese
          odhadyvachuska@gmail.com
        </p>
        <Inputs />
        <br />
        <div className="Estimates__HeadText">Další informace</div>
        <div className="Estimates__Flex">
          <NavLink to="/Cenik">
            <p className="Estimates__Text">Jaké jsou ceny</p>
          </NavLink>
          <NavLink to="/Ocenovani">
            <p className="Estimates__Text"> Co jsou odhady nemovitostí</p>
          </NavLink>
          <NavLink to="/Jakprobiha">
            <p className="Estimates__Text">Jak odhad probíhá</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
