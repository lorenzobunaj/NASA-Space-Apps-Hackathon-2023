import { useState, useContext, createContext } from "react";
import { useFetch } from "../hooks/useFetch";
import { athmosphereData  } from "../assets/athmosphereData";
import { surfaceData } from "../assets/surfaceData";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [planetQuery, setPlanetQuery] = useState({
        name: window.localStorage.getItem('planetName') || 'Com 11 b',
        athmosphere: athmosphereData,
        surface: surfaceData,
        star: window.localStorage.getItem('planetStar') || 'sunLike'
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