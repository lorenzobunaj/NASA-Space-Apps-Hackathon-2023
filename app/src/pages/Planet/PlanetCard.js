import React from 'react';
import { useAppContext } from '../../context/context';

const PlanetCard = () => {
    const { planetQuery, isLoading, isError, planetData } = useAppContext();

    return (
        <>
            {
                !isLoading && isError ? (
                    <h1>Error: {planetQuery}</h1>
                ) : (
                    !isLoading && !isError ? (
                        <h1>Planet: {planetData.data.name.replace(/'/g, '')}</h1>
                    ) : (
                        <h1>Loading...</h1>
                    )
                )
            }
        </>
    )
};

export { PlanetCard };