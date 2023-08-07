import React from "react";
import { shopReducer } from "./reducer";

const Context = React.createContext();

const initialState = {
  products: [],
};

const Provider = ({ children }) => {
  const [state, dispatch] = React.useReducer(shopReducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export { Context, Provider };
