import * as React from "react";
import "./Yangs.less";
import "../MenuContent.less";

export const Yangs = () => {
  return (
    <div className="Yangs">
      <div className="Yangs__Text">Ceník</div>
      <div className="Yangs__Paragraph">Kolik odhad stojí?</div>
      <u>
        <div className="Yangs__Header">Stavby</div>
      </u>
      <p className="Yangs__Item">
        Rodinný dům - <strong>od 5999</strong> Kč/odhad
      </p>
      <p className="Yangs__Item">
        Byt - <strong>5999</strong> Kč/odhad
      </p>
      <p className="Yangs__Item">
        Bytový dům (do 2 bytových jednotek včetně) - <strong>6999</strong>{" "}
        Kč/odhad{" "}
      </p>
      <p className="Yangs__Item">
        Bytový dům (nad 2 bytové jednotky) - <strong>6999</strong> Kč/odhad +
        každá další bytová jednotka + 1500Kč
      </p>
      <p className="Yangs__Item">
        Garáž - <strong>3999</strong> Kč/odhad
      </p>

      <u>
        <div className="Yangs__Header">Podnikání</div>
      </u>
      <p className="Yangs__Item">
        Kanceláře - <strong>5999 </strong>Kč/odhad
      </p>
      <p className="Yangs__Item">
        Dílny - <strong>4999 </strong> Kč/odhad
      </p>

      <u>
        <div className="Yangs__Header">
          Pozemky (dle velikosti, záleží na domluvě)
        </div>
      </u>
      <p className="Yangs__Item">
        Pozemky - <strong>od 3999 </strong> Kč/odhad
      </p>
      <p className="Yangs__Item">
        Zahrady - <strong> od 3499 </strong> Kč/odhad
      </p>
      <p className="Yangs__Item">
        Sady - <strong>od 2999 </strong> Kč/odhad
      </p>
    </div>
  );
};
