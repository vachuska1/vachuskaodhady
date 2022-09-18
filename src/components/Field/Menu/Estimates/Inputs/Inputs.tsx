import * as React from "react";
import { useEffect, useState } from "react";
import "./Inputs.less";
import { InputErrorState, InputSendResponse, InputState } from "./InputsInterface";
import { SendResponse } from "./SendResponse";

const defaultState: InputState = {
	name: "",
	email: "",
	number: "",
	info: "",
};

const defaultErrors: InputErrorState = {
	nameError: "",
	emailError: "",
	numberError: "",
	infoError: "",
};

export const Inputs = () => {
	const [state, setState] = useState<InputState>(defaultState);
	const [errors, setErrors] = useState<InputErrorState>(defaultErrors);
	const [validate, setValidate] = useState<boolean>(false);
	const [sendResponse, setSendResponse] = useState<InputSendResponse>(InputSendResponse.NOT_SENDED);

	useEffect(() => {
		if (validate) {
			sendForm();
		}
	}, [validate]);

	const checkErrorBeforeSending = () => {
		setValidate(false);
		let errorObject: InputErrorState = {
			nameError: handleName(state.name)[1],
			emailError: handleEmail(state.email)[1],
			numberError: handleNumber(state.number)[1],
			infoError: handleMessage(state.info)[1],
		};

		if (
			handleName(state.name)[0] &&
			handleEmail(state.email)[0] &&
			handleNumber(state.number)[0] &&
			handleMessage(state.info)[0]
		) {
			setValidate(true);
		}

		setErrors({ ...errorObject });
	};

	const sendForm = () => {
		fetch("./src/API/Contact/Contact.php", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name: state.name,
				email: state.email,
				number: state.number,
				info: state.info,
			}),
		})
			.then((response) => response.json())
			.then((result) => {
				if (result === InputSendResponse.SUCCESFULL_SEND) {
					setSendResponse(InputSendResponse.SUCCESFULL_SEND);
				} else if (result === InputSendResponse.NOT_SUCCESFULL_SEND) {
					setSendResponse(InputSendResponse.NOT_SUCCESFULL_SEND);
				}
			});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		checkErrorBeforeSending();
	};

	const handleName = (name): [boolean, string] => {
		if (name !== "") {
			return [true, ""];
		} else {
			return [false, "Vyplňte jméno a příjmení."];
		}
	};

	const handleEmail = (email): [boolean, string] => {
		if (email !== "") {
			if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
				return [true, ""];
			} else {
				return [false, "Vyplňte email ve správném formátu."];
			}
		} else {
			return [false, "Vyplňte email."];
		}
	};

	const handleNumber = (number): [boolean, string] => {
		if (number !== "") {
			if (/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/.test(number)) {
				return [true, ""];
			} else {
				return [false, "Vyplňte telefonní číslo ve správném formátu (111 222 333)"];
			}
		} else {
			return [false, "Vyplňte telefonní číslo."];
		}
	};

	const handleMessage = (message): [boolean, string] => {
		if (message !== "") {
			return [true, ""];
		} else {
			return [false, "Vyplňte Vačí zprávu."];
		}
	};

	const resetStates = () => {
		setState(defaultState);
		setErrors(defaultErrors);
		setValidate(false);
		setSendResponse(InputSendResponse.NOT_SENDED);
	};

	return sendResponse === InputSendResponse.SUCCESFULL_SEND ? (
		<SendResponse message={"Úspěsné odeslaný formulář, děkujeme"} handleApp={resetStates} />
	) : sendResponse === InputSendResponse.NOT_SUCCESFULL_SEND ? (
		<SendResponse message={"Formulář neodeslán, obnovte stránku a zkuste znova"} handleApp={resetStates} />
	) : (
		<div className="Inputs">
			<form className="Inputs__Form">
				<div className="Inputs__Block Inputs__Block--name">
					<input
						className="Inputs__Name"
						value={state.name}
						onChange={(event) => setState({ ...state, name: event.target.value })}
						placeholder={"Vaše jméno a příjmení"}
					/>
					{errors.nameError && <div className="Inputs__Error">{errors.nameError}</div>}
				</div>
				<div className="Inputs__Block Inputs__Block--number">
					<input
						className="Inputs__Number"
						value={state.number?.toString()}
						onChange={(event) => setState({ ...state, number: event.target.value })}
						type="text"
						placeholder={"Vaše tel. číslo"}
						required
					/>
					{errors.numberError.length ? <div className="Inputs__Error">{errors.numberError}</div> : null}
				</div>
				<div className="Inputs__Block Inputs__Block--email">
					<input
						className="Inputs__Email"
						value={state.email}
						onChange={(event) => setState({ ...state, email: event.target.value })}
						placeholder={"Vaše emailová adresa"}
						required
					/>
					{errors.emailError.length ? <div className="Inputs__Error">{errors.emailError}</div> : null}
				</div>
				<br />
				<div className="Inputs__Block Inputs__Block--info">
					<input
						className="Inputs__Message"
						value={state.info}
						onChange={(event) => setState({ ...state, info: event.target.value })}
						placeholder="S čím Vám mohu pomoci?"
					/>
					{errors.infoError.length ? <div className="Inputs__Error">{errors.infoError}</div> : null}
				</div>
				<br />
				<button className="Inputs__Submit" onClick={handleSubmit}>
					Poslat
				</button>
			</form>
		</div>
	);
};
