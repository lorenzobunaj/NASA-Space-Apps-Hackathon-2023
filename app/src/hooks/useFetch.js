import { useState, useEffect } from "react";
const url = 'http://localhost:5000/api/v1/planets'
//const url = "https://exoplanetarchive.ipac.caltech.edu/TAP/sync?";

const useFetch = (planetName) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [planetData, setPlanetData] = useState({});
    
    useEffect(() => {
        (async (planetName) => {
            setIsError(false);
            setIsLoading(true);
            try {
                //const source = `${url}query=select+*+from+pscomppars+where+pl_name=${planetName}&limit=1&format=json`;
                const source = `${url}/'${planetName}'`;
                // fetch the add api
                const response = await fetch(source, {
                    method: "GET"
                });

                const data = await response.json();

                setPlanetData(data);
            } catch (err) {
                setIsError(true);
            }
            setIsLoading(false);
        })(planetName);
    }, [planetName])

    return { isLoading, isError, planetData };
}

export { useFetch };