import { useState, useEffect } from "react";

const url = 'http://localhost:5000/api/v1/planets'
//const url = "https://exoplanetarchive.ipac.caltech.edu/TAP/sync?";

const useFetch = (planetQuery, currentUrl, setCurrentUrl) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [planetData, setPlanetData] = useState({});

    useEffect(() => {
        (fetchData)(planetQuery, setIsLoading, setIsError, setPlanetData, currentUrl, setCurrentUrl);
    }, [planetQuery]);

    return { isLoading, isError, planetData };
}

const fetchData = async (planetQuery, setIsLoading, setIsError, setPlanetData, currentUrl, setCurrentUrl) => {
    setIsError(false);
    setIsLoading(true);
    try {
        //const source = `${url}query=select+*+from+pscomppars+where+pl_name=${planetName}&limit=1&format=json`;
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

        setPlanetData(data);

        if (currentUrl !== window.location.href) {
            setCurrentUrl(window.location.href);
            window.localStorage.setItem('planetAthmosphereColor', data.data.athmosphere.color);
            window.localStorage.setItem('planetSurfaceColor', data.data.surface.color);
        };
    } catch (err) {
        console.log(err);
        setIsError(true);
    }
    setIsLoading(false);
};

export { useFetch };