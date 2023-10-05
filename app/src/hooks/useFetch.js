import { useState, useEffect } from "react";
const url = 'http://localhost:5000/api/v1/planets'
//const url = "https://exoplanetarchive.ipac.caltech.edu/TAP/sync?";

const useFetch = (planetQuery) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [planetData, setPlanetData] = useState({});

    useEffect(() => {
        (async (planetQuery) => {
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
            } catch (err) {
                console.log(err);
                setIsError(true);
            }
            setIsLoading(false);
        })(planetQuery);
    }, [planetQuery]);

    return { isLoading, isError, planetData };
}

export { useFetch };