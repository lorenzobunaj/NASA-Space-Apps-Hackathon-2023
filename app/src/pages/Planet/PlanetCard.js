import React from 'react';
import { useAppContext } from '../../context/context';

const PlanetCard = () => {
    const { isLoading, isError, planetData } = useAppContext();

    if (isError) {
        return (
            <>
                <h1>Error</h1>
            </>
        )
    }
    if (isLoading) {
        return (
            <>
                <h1>Loading...</h1>
            </>
        )
    }

    return (
        <>
            <h1>Planet: {planetData.data.name.replace(/'/g, '')}</h1>
        </>
    )
};

export { PlanetCard };