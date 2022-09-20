import * as React from "react";
import "./ForWeb.less";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

export const ForWeb = () => {
	return (
		<div className="ForWeb">
			<div className="ForWeb__Content">
				<div className="ForWeb__Links">
					Co dál?
					<NavLink to="odhady">
						<div className="ForWeb__Row ForWeb__Color">Chci odhad</div>
					</NavLink>
					<NavLink to="/Ocenovani">
						<div className="ForWeb__Row">Co jsou odhady nemovitostí</div>
					</NavLink>
					<NavLink to="/Jakprobiha">
						<div className="ForWeb__Row">Jak odhad probíhá</div>
					</NavLink>
				</div>
				<div className="ForWeb__Contacts">
					Kontakty
					<div className="ForWeb__RowUnder">Ing. Aleš Vachuška - Odhady nemovitostí</div>
					<div className="ForWeb__RowUnder">+420 774 104 020</div>
					<div className="ForWeb__RowUnder">odhadyvachuska@gmail.com</div>
				</div>
			</div>
		</div>
	);
};
