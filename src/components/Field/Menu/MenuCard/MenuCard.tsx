import * as React from "react";
import "../MenuCard/MenuCard.less";

interface MenuCardProps {
	classname: string;
	image: string;
}

export const MenuCard: React.FC<MenuCardProps> = ({ classname, image }) => {
	return (
		<div className={classname}>
			<img className="MenuCard__Image" src={image} />
		</div>
	);
};
