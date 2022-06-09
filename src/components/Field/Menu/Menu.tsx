import * as React from "react";
import "../Menu/Menu.less";
import { MenuCard } from "./MenuCard/MenuCard";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

export const Menu = () => {
  return (
    <div className="Menu">
      <div className="Menu__Firstline">
        <NavLink to="/Projekty">
          <MenuCard
            classname="MenuCard MenuCard__One"
            image="./src/images/Content/Project1.svg"
          />
        </NavLink>
        <NavLink to="/Odhady">
          <MenuCard
            classname="MenuCard MenuCard__One"
            image="./src/images/Content/Estimates1.svg"
          />
        </NavLink>
        <NavLink to="/Kontakty">
          <MenuCard
            classname="MenuCard MenuCard__One"
            image="./src/images/Content/Contact1.svg"
          />
        </NavLink>
        <NavLink to="/Cenik">
          <MenuCard
            classname="MenuCard MenuCard__One"
            image="./src/images/Content/Yangs.svg"
          />
        </NavLink>
        <NavLink to="/Profil">
          <MenuCard
            classname="MenuCard MenuCard__One"
            image="./src/images/Content/AboutMe.svg"
          />
        </NavLink>
        <NavLink to="/Kvalifikace">
          <MenuCard
            classname="MenuCard MenuCard__One"
            image="./src/images/Content/Education.svg"
          />
        </NavLink>
      </div>
    </div>
  );
};
