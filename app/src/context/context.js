import { useState, useContext, createContext } from "react";
import { useFetch } from "../hooks/useFetch";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [planetQuery, setPlanetQuery] = useState(
        window.localStorage.getItem('pl_name') || '11 Com b'
    );

    const { isLoading, isError, planetData } = useFetch(planetQuery);

    const searchPlanet = (input) => {
        console.log(input);
        setPlanetQuery(input);
    };

    return (
        <AppContext.Provider value={
            {
                planetQuery,
                searchPlanet,
                isLoading,
                isError,
                planetData
            }
        }>
            {children}
        </AppContext.Provider>
    );
};

const useAppContext = () => {
    return useContext(AppContext);
};

export { AppProvider, useAppContext };