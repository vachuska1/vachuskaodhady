export interface InputState {
  name: string;
  email: string;
  number: number | null;
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
