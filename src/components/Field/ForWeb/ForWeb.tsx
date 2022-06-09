import * as React from "react";
import "./ForWeb.less";

export const ForWeb = () => {
  return (
    <div className="ForWeb">
      <div className="ForWeb__Content">
        <div className="ForWeb__Links">
          Další odkazy
          <div className="ForWeb__Row">Jak odhad probíhá?</div>
          <div className="ForWeb__Row">Chcete se na něco zeptat</div>
          <div className="ForWeb__Row">Co jsou to odhady nemovitosti?</div>
        </div>
        <div className="ForWeb__Contacts">
          Kontakty
          <div className="ForWeb__RowUnder">
            Ing. Aleš Vachuška - Odhady nemovitostí
          </div>
          <div className="ForWeb__RowUnder">+420 774 104 020</div>
          <div className="ForWeb__RowUnder">info@odhadyvachuska.cz</div>
        </div>
      </div>
    </div>
  );
};
