import { useState, useEffect } from "react";

const url = 'https://planet-render-production.up.railway.app/api/v1/'
//const url = "https://exoplanetarchive.ipac.caltech.edu/TAP/sync?";

const useFetch = (planetQuery, currentUrl, setCurrentUrl) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [planetData, setPlanetData] = useState({});

    useEffect(() => {
        (fetchData)(planetQuery, setIsLoading, setIsError, setPlanetData, currentUrl, setCurrentUrl);
    }, [planetQuery, currentUrl, setCurrentUrl]);


    return { isLoading, isError, planetData };
}

const fetchData = async (planetQuery, setIsLoading, setIsError, setPlanetData, currentUrl, setCurrentUrl) => {
    setIsError(false);
    setIsLoading(true);
    try {
        const source = `${url}/'${planetQuery.name}'`;
        // fetch the add api
        const response = await fetch(source, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                planetQuery
            )
        });
        const data = await response.json();

        setPlanetData(() => {
            if (currentUrl !== window.location.href) {
                setCurrentUrl(window.location.href);
                window.localStorage.setItem('planetAthmosphereColor', data.data.athmosphere.color);
                window.localStorage.setItem('planetSurfaceColor', data.data.surface.color);
                window.localStorage.setItem('planetVegetationColor', data.data.vegetation.color);
                window.localStorage.setItem('planetLakesColor', data.data.lakes.color);
                return data;
            }

            return {
                data: {
                    name: window.localStorage.getItem('planetName'),
                    athmosphere: {
                        color:
                            window.localStorage.getItem('planetAthmosphereColor') ?
                                window.localStorage.getItem('planetAthmosphereColor').split(',') : ['0', '0', '0']
                    },
                    surface: {
                        color:
                            window.localStorage.getItem('planetSurfaceColor') ?
                                window.localStorage.getItem('planetSurfaceColor').split(',') : ['0', '0', '0']
                    },
                    vegetation: {
                        color:
                            window.localStorage.getItem('planetVegetationColor') ?
                                window.localStorage.getItem('planetVegetationColor').split(',') : ['0', '0', '0']
                    },
                    lakes: {
                        color:
                            window.localStorage.getItem('planetLakesColor') ?
                                window.localStorage.getItem('planetLakesColor').split(',') : ['0', '0', '0']
                    }
                }
            };
        });

    } catch (err) {
        console.log(err);
        setIsError(true);
    }
    setIsLoading(false);
};

export { useFetch };