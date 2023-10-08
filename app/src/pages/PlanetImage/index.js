import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { useAppContext } from '../../context/context';
import { PlanetImage } from './PlanetImage';

const PlanetImagePage = () => {
    const location = useLocation();

    const { isLoadingImage, isErrorImage, planetImageUrl } = useAppContext();

    /*const rgbComponent = (object, i) => {
        return Math.round(Number(object.color[i]));
    }
    const rgbObject = (object) => {
        const rgb = object.color.map((c,i) => {
            return rgbComponent(object, i);
        });

        return `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
    }

    const athmosphereColor = rgbObject(planetData.data.athmosphere);
    const surfaceColor = rgbObject(planetData.data.surface);
    const vegetationColor = rgbObject(planetData.data.vegetation);
    const lakesColor = rgbObject(planetData.data.lakes);

    const rgbMax = (rgbObj) => {
        let rgbArray = rgbObj.split('(')[1].split(')')[0].split(',').map(e => {
            return Number(e);
        });

        let arrMax;
        if (Math.max(...rgbArray) === rgbArray[0]) {
            arrMax = 'red';
        } else if (Math.max(...rgbArray) === rgbArray[1]) {
            arrMax = 'green'
        } else {
            arrMax = 'blue'
        }

        return arrMax;
    }

    window.localStorage.setItem('planetPrompt', `generate only one landscape, only one image, with sky of color ${rgbMax(athmosphereColor)}, trees of color ${rgbMax(vegetationColor)}, lakes of color ${rgbMax(lakesColor)}`);
    setPrompt(`generate only one landscape, only one image, with sky of color ${rgbMax(athmosphereColor)}, trees of color ${rgbMax(vegetationColor)}, lakes of color ${rgbMax(lakesColor)}`);

    */

    if (isErrorImage) {
        return (
            <>
                <h1>Error</h1>
            </>
        )
    }
    if (isLoadingImage) {
        return (
            <>
                <h1>Loading...</h1>
            </>
        )
    }

    return (
        <>

            <PlanetImage planetImageUrl={planetImageUrl}/>
        </>
    );
};

export { PlanetImagePage };