import React, { useContext, createContext, useState } from "React";

const ApiContext = createContext();

export const useApiContext = () => useContext(ApiContext);

export const ApiProvider = ({ children }) => {
    const [input, setInput] = useState("");
    const [lat, setLat] = useState("");
    const [lon, setLon] = useState("");
    const [city, setCity] = useState("");
    const [temp, setTemp] = useState("");
    const [wind, setWind] = useState("");
    const [humidity, setHumidity] = useState("");
    const [emoji, setEmoji] = useState("")

    return (
        <ApiContext.Provider
            value={{
                input,
                lat,
                lon,
                city,
                temp,
                wind,
                humidity,
                emoji,
                setInput,
                setLat,
                setLon,
                setCity,
                setTemp,
                setWind,
                setHumidity,
                setEmoji
            }}
        >
            {/* We render children in our component so that any descendent can access the value from the provider */}
            {children}
        </ApiContext.Provider>
    );
};
