import React from "react";
import { Context } from "../context/shop";

const useProducts = (setterOnly = false) => {
    const {state, dispatch} = React.useContext(Context);
    return setterOnly ? [dispatch] : [state, dispatch]; 
}

export default useProducts 