import * as React from "react";
import "./Name.less";

interface NameProps {
	classname: string;
	desc: string;
}

export const Name: React.FC<NameProps> = ({ classname, desc }) => {
	return <div className={classname}>{desc}</div>;
};
