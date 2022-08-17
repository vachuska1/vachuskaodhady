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
        Nechte si spočítat adekvátní výši nájmu. Díky rostoucí inflaci a
        neustále se zvyšujících cenách veškerých stavebních materiálů se staré
        hodnoty nájmu už nemusí být aktuální. Ikdyž dostáváte stejnou částku, ta
        už neodpovídá dnešní době a aktuálním cenám(PŘEPSAT)
      </p>
      <div className="Yangs__Header">Pomoc při prodeji nemovitosti</div>
      <p>
        Pomoc při prodeji nemovitosti(jak naaranžovat, nafotit, kde inzerovat)
      </p>
      <div className="Yangs__Header">Informace ke Katastru nemovitostí</div>
      <p>Chcete najít konkrétní informace v Katastru nemovitostí</p>
    </div>
  );
};
