import * as React from "react";
import "./Estimates.less";
import "../MenuContent.less";

export const Estimates = () => {
  return (
    <div className="Estimates Estimates__HeadText">
      Proč odhad nemovitosti? <br /> <br />
      Čtyři nejčastější důvody, proč se na mě klienti obrací
      <div className="Estimates__Content">
        <div className="Estimates__Rows"> Prodáváte vlastní nemovitost?</div>
        <div className="Estimates__Rows">
          Máte v plánu pořídit si rodinný dům, byt, popřípadě jinou nemovitost a
          chci znát její aktuální tržní hodnotu?
        </div>
        <div className="Estimates__Rows">
          Chcete znát hodnotu své nemovitosti?
        </div>
        <div className="Estimates__Rows">Čeká Vás Dědické řízení?</div>
        {/* <div className="Estimates__Text">
          Pokud ano, budete potřebovat kvalitně zpracovaný odhad Vaší
          nemovitosti, který zohlední jak základní faktory: lokalitu, čas,
          situaci na trhu, tak i možnost budoucího využití nebo maximální
          výnosnosti. Né pouze průměr nabídkových cen realitních kanceláří, jak
          bývá v poslední době zvykem. Který Vám o hodnotě Vašeho majetku
          neřekne vůbec nic.
        </div> */}
        <div className="Estimates__HeadText">Dále by Vás mohlo zajímat</div>
        <div className="Estimates__Text Estimates__ActiveText">
          Mám zájem o odhad
        </div>
        <div className="Estimates__Text">Jaké jsou ceny?</div>
        <div className="Estimates__Text">Co jsou to odhady nemovitostí?</div>
      </div>
    </div>
  );
};
