import { useState, useContext, createContext } from "react";
import { useFetch } from "../hooks/useFetch";
import { usePlanetImage } from "../hooks/usePlanetImage";
import { athmosphereData  } from "../data/athmosphereData";
import { surfaceData } from "../data/surfaceData";
import { vegetationData } from "../data/vegetationData";

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
        vegetation: {
            color: window.localStorage.getItem('planetVegetationColor').split(',') || [0,0,0],
            chemicals: vegetationData
        },
        star: window.localStorage.getItem('planetStar') || 'sunLike'
    });

    // const [isSubmit, setIsSubmit] = useState(false);
    const { isLoading, isError, planetData } = useFetch(planetQuery, currentUrl, setCurrentUrl);

    const [prompt, setPrompt] = useState("loading...");

    const { isLoadingImage, isErrorImage, planetImageUrl } = usePlanetImage(planetQuery, prompt)

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
                setPrompt,
                isLoadingImage,
                isErrorImage,
                planetImageUrl,
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