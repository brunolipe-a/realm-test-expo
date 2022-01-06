import React from "react";
import { RealmProvider } from "./realm";

export const AppProvider: React.FC = ({ children }) => {
  return <RealmProvider>{children}</RealmProvider>;
};
