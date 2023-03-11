import React, { useContext, createContext, useState } from "React";

const LocalStorageContext = createContext();

export const useLocalStorageContext = () => useContext(LocalStorageContext);

export const LocalStorageProvider = ({ children }) => {
    const [cities, setCities] = useState([]);
   

    return (
        <LocalStorageContext.Provider
            value={{
                cities,
                setCities,
                
            }}
        >
            {/* We render children in our component so that any descendent can access the value from the provider */}
            {children}
        </LocalStorageContext.Provider>
    );
};