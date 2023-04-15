import React, { createContext, PropsWithChildren, useState } from "react";
import { iGlobal } from "../types";

export const GlobalContext = createContext<iGlobal>({} as iGlobal);

export const ShareState: React.FC<PropsWithChildren> = ({ children }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [userName, setUserName] = useState<string>("");

  return (
    <GlobalContext.Provider
      value={{ email, password, userName, setEmail, setUserName, setPassword }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
