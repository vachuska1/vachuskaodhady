import * as React from "react";
import "./Field.less";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ForWeb } from "./ForWeb/ForWeb";
import { Ledge } from "./Ledge/Ledge";
import { Menu } from "./Menu/Menu";
import { Yangs } from "./Menu/Yangs/Yangs";
import { Estimates } from "./Menu/Estimates/Estimates";
import { Projects } from "./Menu/Projects/Projects";
import { Contacts } from "./Menu/Contacts/Contacts";
import { Profil } from "./Menu/Profil/Profil";
import { Education } from "./Menu/Education/Education";
import { Web } from "./Web/Web";
import { Evaluated } from "./Menu/Evaluated/Evaluated";
import { HowEstim } from "./Menu/HowEstim/HowEstim";

export const Field = () => {
	return (
		<BrowserRouter>
			<div className="Field">
				<Ledge />
				<div className="Field__Content">
					<Switch>
						<Route path="/" exact component={Menu} />
						<Route path="/Cenik" component={Yangs} />
						<Route path="/Odhady" component={Estimates} />
						<Route path="/Kontakty" component={Contacts} />
						<Route path="/Projekty" component={Projects} />
						<Route path="/Profil" component={Profil} />
						<Route path="/Kvalifikace" component={Education} />
						<Route path="/Ocenovani" component={Evaluated} />
						<Route path="/Jakprobiha" component={HowEstim} />
					</Switch>
				</div>
				<ForWeb />
				<Web />
			</div>
		</BrowserRouter>
	);
};
