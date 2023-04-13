export interface IButton {
  buttonTitle: string;
  color: string;
  bg: string;
  onClick: () => void;
}
export interface ICard {
  title: string;
  onClick: () => void;
  buttonTitle: string;
  inputTitle: string;
  inputTitle1?: string;
  inputTitle2?: string;
  sign: boolean;
  req: boolean;
}
export interface IInput {
  title: string;
  title1?: string;
  title2?: string;
  sign: boolean;
  req: boolean;
}
