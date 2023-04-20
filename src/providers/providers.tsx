import React from "react";
import { UserProviders } from "./UserContext/UserContext";
import { IDefaultProviderProps } from "./UserContext/@typesUserContext";
import { CartProviders } from "./CartContex/CartContext";

const Providers = ({ children }: IDefaultProviderProps) => {
  return (
    <UserProviders>
      <CartProviders>{children}</CartProviders>
    </UserProviders>
  );
};

export default Providers;
