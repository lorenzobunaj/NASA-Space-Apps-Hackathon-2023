import React from 'react';
import { useAppContext } from '../../context/context';

const PlanetCard = (data) => {
    const { setPrompt } = useAppContext();
    const { planetData } = data;

    const rgbToHex = (r, g, b) => {
        return '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
    };

    const rgbComponent = (object, i) => {
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

    /*
    const athmosphereColorHex = rgbToHex(
        Number(planetData.data.athmosphere.color[0]),
        Number(planetData.data.athmosphere.color[1]),
        Number(planetData.data.athmosphere.color[2])
    );
    const surfaceColorHex = rgbToHex(
        Math.round((Number(planetData.data.surface.color[0])+Number(planetData.data.vegetation.color[0]))/2),
        Math.round((Number(planetData.data.surface.color[1])+Number(planetData.data.vegetation.color[1]))/2),
        Math.round((Number(planetData.data.surface.color[2])+Number(planetData.data.vegetation.color[2]))/2)
    );
    const vegetationColorHex = rgbToHex(
        Number(planetData.data.vegetation.color[0]),
        Number(planetData.data.vegetation.color[1]),
        Number(planetData.data.vegetation.color[2])
    );
    const lakesColorHex = rgbToHex(
        Number(planetData.data.lakes.color[0]),
        Number(planetData.data.lakes.color[1]),
        Number(planetData.data.lakes.color[2])
    );
    */

    setPrompt(`generate only one landscape, only one image, with sky of color ${rgbMax(athmosphereColor)}, trees of color ${rgbMax(vegetationColor)}, lakes of color ${rgbMax(lakesColor)}`);
    
    return (
            <div className="planetCard">
                <h1>Planet: {planetData.data.name}</h1>
                <ul>
                    <li><h2>Atmosphere Color:
                        <p style={{
                            color: athmosphereColor
                        }}>
                            color
                        </p>
                    </h2></li>
                    <li><h2>Surface Color:
                        <p style={{
                            color: surfaceColor
                        }}>
                            color
                        </p>
                    </h2></li>
                    <li><h2>Vegetation Color:
                        <p style={{
                            color: vegetationColor
                        }}>
                            color
                        </p>
                    </h2></li>
                    <li><h2>Lakes Color:
                        <p style={{
                            color: lakesColor
                        }}>
                            color
                        </p>
                    </h2></li>
                </ul>
            </div>
    )
};

export { PlanetCard };