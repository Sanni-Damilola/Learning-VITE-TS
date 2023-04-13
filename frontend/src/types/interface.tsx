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
}
export interface IInput {
  title: string;
  sign: boolean;
  req: boolean;
}
