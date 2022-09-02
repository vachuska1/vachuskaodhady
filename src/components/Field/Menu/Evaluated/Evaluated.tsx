import * as React from "react";
import "./Evaluated.less";

export const Evaluated = () => {
  return (
    <div className="Evaluated">
      <div className="Evaluated__Text">Co jsou odhady nemovitostí</div>
      {/* <p>
        Pokud ano, budete potřebovat kvalitně zpracovaný odhad Vaší nemovitosti,
        který zohlední jak základní faktory: lokalitu, čas, situaci na trhu, tak
        i možnost budoucího využití nebo maximální výnosnosti. Né pouze průměr
        nabídkových cen realitních kanceláří, jak bývá v poslední době zvykem.
        Který Vám o hodnotě Vašeho majetku neřekne vůbec nic.
      </p> */}
      <div className="Evaluated__Header">Proč odhad?</div>
      <p>
        Plánujete si pořídit rodinný dům, byt nebo jinou nemovitost? Rádi byste
        nějakou prodali? Nebo jste nějakou nemovitou věc zdědili? Před tím než
        toto učiníte, se doporučuje nechat si zpracovat odborný odhad ceny
        nemovitosti.
      </p>
      <p>
        V praxi nástavají situace, kdy si chcete jen ověřit cenu nemovisti,
        abyste nepřepláceli, nebo neprodávali pod cenou. V těchto případech je
        odhad správná volba.
      </p>
      <div className="Evaluated__Header">Kdo může odhad provádět?</div>
      <p>
        Odhad může provádět soudní znalec nebo odhadce, který má patřičné
        osvědčení (živnostenské oprávnění k vázané živnosti: oceňování
        nemovitých věcí), které se vydává na základě praxe nebo vzdělání.{" "}
      </p>
      <div className="Evaluated__Header">Ceny nemovitých věcí</div>
      <p>
        1) Tržní cena - cena, za kterou jste schopni pořídit podobné nemovité
        věci.{" "}
      </p>{" "}
      <p>
        2) Administrativní cena - nebo-li zjištěná cena je cenou, která je
        určena podle cenového předpisu. Tímto je v současné době zákon o
        oceňování majetku (zákon č. 151/1997 Sb.) a prováděcí právní předpis.
        Zjištěná cena je stanovená zejména pro daňové účely, jelikož se často
        liší od ceny sjednané (to je cena, za kterou se věc pořizuje) při určení
        náhrad za vyvlastnění ve veřejném zájmu (zákon č. 184/2006 Sb.)
      </p>
      <p>
        {" "}
        3) Zadlužitelná cena - tato cena se používá při odhadu ceny nemovitosti
        za účelem hypotéky.
      </p>
      <div className="Evaluated__Header">Metody oceňovaní</div>
      <p>
        1) Porovnávací metoda - porovnává cenu nemovitosti s cenami podobných
        nemovitostí (realizovanými prodeji){" "}
      </p>{" "}
      <p>
        {" "}
        2) Výnosová metoda - používá se především při ocenění nemovitostí za
        účelem dalšího pronájmu (zhodnocení).{" "}
      </p>{" "}
      <p>
        3) Nákladová metoda - stanovuje, jáké by bylo nutné vynaložit náklady na
        výstavbu obdobné nemovitosti a snižuje se o míru fyzického opotřebení,
        které je udáváno v %.
      </p>
    </div>
  );
};
