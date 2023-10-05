import { useState, useContext, createContext } from "react";
import { useFetch } from "../hooks/useFetch";
import { athmosphereData  } from "../assets/athmosphereData";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [planetQuery, setPlanetQuery] = useState({
        name: window.localStorage.getItem('planetName') || '11 Com b',
        athmosphere: athmosphereData
    });

    // const [isSubmit, setIsSubmit] = useState(false);
    const { isLoading, isError, planetData } = useFetch(planetQuery);

    const searchPlanet = (input) => {
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