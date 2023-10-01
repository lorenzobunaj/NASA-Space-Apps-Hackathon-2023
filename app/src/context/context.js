import { useState, useContext, createContext } from "react";
import { useFetch } from "../hooks/useFetch";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [planetQuery, setPlanetQuery] = useState('11 Com b');

    const searchPlanet = (input) => {
        setPlanetQuery(input);
    };

    const { isLoading, isError, planetData } = useFetch(planetQuery);

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