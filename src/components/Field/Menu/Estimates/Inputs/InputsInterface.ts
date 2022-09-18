export interface InputState {
	name: string;
	email: string;
	number: string;
	info: string;
}

export interface InputErrorState {
	nameError: string;
	emailError: string;
	numberError: string;
	infoError: string;
}

export enum InputSendResponse {
	SUCCESFULL_SEND = 1,
	NOT_SUCCESFULL_SEND = 0,
	NOT_SENDED = -1,
}
