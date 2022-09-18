import * as React from "react";
import "./SendResponse.less";

export interface SendResponseProps {
	message: string;
	handleApp: () => void;
}

export const SendResponse: React.FC<SendResponseProps> = ({ message, handleApp }) => {
	return (
		<div className={"sendResponse__overlay"}>
			<div className={"sendResponse__block"}>
				<div className={"sendResponse__message"}>{message}</div>
				<div className={"sendResponse__link"} onClick={handleApp}>
					přejít na hlavní stránku
				</div>
			</div>
		</div>
	);
};
