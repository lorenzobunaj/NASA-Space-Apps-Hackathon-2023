import { useState, useContext, createContext } from "react";
import { useFetch } from "../hooks/useFetch";
import { athmosphereData  } from "../assets/athmosphereData";
import { surfaceData } from "../assets/surfaceData";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [currentUrl, setCurrentUrl] = useState(window.location.href);

    const [planetQuery, setPlanetQuery] = useState({
        name: window.localStorage.getItem('planetName') || 'Com 11 b',
        athmosphere: {
            color: window.localStorage.getItem('planetAthmosphereColor').split(',') || [0,0,0],
            chemicals: athmosphereData
        },
        surface: {
            color: window.localStorage.getItem('planetSurfaceColor').split(',') || [0,0,0],
            chemicals: surfaceData
        },
        star: window.localStorage.getItem('planetStar') || 'sunLike'
    });

    // const [isSubmit, setIsSubmit] = useState(false);
    const { isLoading, isError, planetData } = useFetch(planetQuery, currentUrl, setCurrentUrl);

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
                planetData,
                currentUrl,
                setCurrentUrl
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