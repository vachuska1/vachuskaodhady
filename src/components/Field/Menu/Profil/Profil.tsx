import * as React from "react";
import "./Profil.less";
import "../MenuContent.less";

export const Profil = () => {
  return (
    <div className="Profil">
      <div className="Profil__Text">Další služby</div>
      <div className="Yangs__Paragraph">Co dále nabízím?</div>
      <div className="Yangs__Header">Stanovení adekvátních nájmů</div>
      <p>
        Nechte si spočítat optimální výši nájmu. Díky rostoucí inflaci a
        neustále se zvyšujících cenách veškerých stavebních materiálů stávající
        výše nájmu už nemusí být aktuální.
      </p>
      <div className="Yangs__Header">Asistence při prodeji nemovitosti</div>
      <p>
        Asistence při koupi nebo prodeji nemovitosti (jak naaranžovat, nafotit,
        kde inzerovat...)
      </p>
      <div className="Yangs__Header">Informace ke Katastru nemovitostí</div>
      <p>Chcete najít konkrétní informace v Katastru nemovitostí</p>
    </div>
  );
};
