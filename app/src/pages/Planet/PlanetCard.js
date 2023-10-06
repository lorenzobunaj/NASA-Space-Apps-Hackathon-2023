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
            <h1>Planet: {planetData.data.name}</h1>
            <h1>Atmosphere Color: 
                <p style={{color: `rgb(
                    ${planetData.data.athmosphere.color[0]},
                    ${planetData.data.athmosphere.color[1]},
                    ${planetData.data.athmosphere.color[2]}
                )`}}>
                    color
                </p>
            </h1>
            <h1>Surface Color: 
                <p style={{color: `rgb(
                    ${planetData.data.surface.color[0]},
                    ${planetData.data.surface.color[1]},
                    ${planetData.data.surface.color[2]}
                    )`}}>
                    color
                </p>
            </h1>
            <h1>Vegetation Color: 
                <p style={{color: `rgb(
                    ${planetData.data.vegetation.color[0]},
                    ${planetData.data.vegetation.color[1]},
                    ${planetData.data.vegetation.color[2]}
                )`}}>
                    color
                </p>
            </h1>
        </>
    )
};

export { PlanetCard };