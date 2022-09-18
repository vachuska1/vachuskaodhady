import * as React from "react";
import "./HowEstim.less";

export const HowEstim = () => {
	return (
		<div className="HowEstim">
			<div className="HowEstim__Text">Jak odhad probíhá?</div>
			<div className="HowEstim__Header">Odhad na dálku</div>
			<div className="HowEstim__Paragraph">
				V tomto případě si s klientem vyměníme potřebné informace písemnou formou (např. mailem).
			</div>
			<div className="HowEstim__Header">Odhad s prohlídkou místa/objektu</div>
			<div className="HowEstim__Paragraph">
				Pokud bude prohlídka místa probíhat za účasti klienta, potřebné si sdělíme na místě. Při prohlídce místa
				bez účasti klienta si potřebné infomace sdělíme písemně.{" "}
			</div>
		</div>
	);
};
