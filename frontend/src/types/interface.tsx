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
  route?: string;
  path?: string;
  text?: string;
  route1?: string;
  path1?: string;
  text1?: string;
  sign: boolean;
  req: boolean;
  call: boolean;
}
export interface IInput {
  title: string;
  title1?: string;
  title2?: string;
  sign: boolean;
  req: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  confirmPassword: string;
  setConfirmPassword: React.Dispatch<React.SetStateAction<string>>;
}
