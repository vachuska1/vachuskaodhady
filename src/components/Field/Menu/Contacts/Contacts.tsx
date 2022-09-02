import * as React from "react";
import "./Contacts.less";
import "../MenuContent.less";
import { Logo } from "./Logo/Logo";
import { Name } from "./Name/Name";
import { MapWindow } from "./MapWindow/MapWindow";

export const Contacts = () => {
  return (
    <>
      <div className="Contacts Contacts__Color">
        Kontakty
        <div className="Contacts__Flex">
          <Logo
            name="Contacts__Logo"
            icon="./src/images/Icons/User.svg"
            alt="Aleš Vachuška"
          />
          <Name classname="Contacts__Item" desc="Ing. Aleš Vachuška" />
        </div>
        <div className="Contacts__Flex">
          <Logo
            name="Contacts__Logo"
            icon="./src/images/Icons/Mobile.svg"
            alt="Telefonní číslo"
          />
          <Name classname="Contacts__Item" desc="+420 774 104 020" />
        </div>
        <div className="Contacts__Flex">
          <Logo
            name="Contacts__Logo"
            icon="./src/images/Icons/Email.svg"
            alt="emailová adresa"
          />
          <Name classname="Contacts__Item" desc="info@odhadyvachuska.cz" />
        </div>
        <div className="Contacts__Flex">
          <Logo
            name="Contacts__Logo"
            icon="./src/images/Icons/IC.svg"
            alt="Identifikační číslo osoby"
          />
          <Name classname="Contacts__Item" desc="IČO: 14437830" />
        </div>
      </div>
      <div className="Contacts Contacts__Estimates">
        Adresa sídla
        <div className="Contacts__Flex">
          <Logo
            name="Contacts__Logo"
            icon="./src/images/Icons/Residence.svg"
            alt="Sídlo"
          />
          <Name
            classname="Contacts__Item"
            desc="Slatina 68, 34101, Horažďovice"
          />
        </div>
      </div>
      <div className="Contacts Contacts__Estimates">
        Korespondenční adresa
        <div className="Contacts__Flex">
          <Logo
            name="Contacts__Logo"
            icon="./src/images/Icons/Town.svg"
            alt="Pobočka"
          />
          <Name classname="Contacts__Item" desc="Mánesova 273/9, 370 01, ČB" />
        </div>
      </div>
      <MapWindow />
    </>
  );
};
