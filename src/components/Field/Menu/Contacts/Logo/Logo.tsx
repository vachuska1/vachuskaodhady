import * as React from "react";
import "./Logo.less";

interface LogoProps {
	icon: string;
	name: string;
	alt: string;
}

export const Logo: React.FC<LogoProps> = ({ icon, name, alt }) => {
	return (
		<div className={name}>
			<img src={icon} alt={alt} />
		</div>
	);
};
