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
        Rodinný dům - <strong>4999</strong> Kč/odhad
      </p>
      <p className="Yangs__Item">
        Byt - <strong>3999</strong> Kč/odhad
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
        Garáž - <strong>2499</strong> Kč/odhad
      </p>

      <u>
        <div className="Yangs__Header">Podnikání</div>
      </u>
      <p className="Yangs__Item">
        Kanceláře - <strong>4999 </strong>Kč/odhad
      </p>
      <p className="Yangs__Item">
        Dílny - <strong>3999-4999 </strong> Kč/odhad
      </p>

      <u>
        <div className="Yangs__Header">
          Pozemky (dle velikosti, záleží na domluvě)
        </div>
      </u>
      <p className="Yangs__Item">
        Pozemky - <strong>3999-4999 </strong> Kč/odhad
      </p>
      <p className="Yangs__Item">
        Zahrady - <strong>2999-3999 </strong> Kč/odhad
      </p>
      <p className="Yangs__Item">
        Sady - <strong>2499-3499 </strong> Kč/odhad
      </p>
    </div>
  );
};
