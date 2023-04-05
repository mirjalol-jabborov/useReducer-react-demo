import React from 'react'
import { Provider as ShopProvider } from './shop';

const RootContext = React.createContext();

const RootProvider = ({ children }) => {
    const [state, setState] = React.useState("");

    return( 
        <RootContext.Provider value={[state, setState]}>
            <ShopProvider>
                {children}
            </ShopProvider>
        </RootContext.Provider>
    )
}

export { RootContext, RootProvider }