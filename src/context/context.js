import { useState, createContext } from "react";



export const GeneralContext = createContext({})



export const GeneralContextProvider = ({ children }) => {


    const [currentProduct, setCurrentProduct] = useState({})

    const API_URI = "http://localhost:3001"

    const value = {
        // all states and functions 
        currentProduct, setCurrentProduct
    }

    return (
        <GeneralContext.Provider value={value}>
            {children}
        </GeneralContext.Provider>
    )


}