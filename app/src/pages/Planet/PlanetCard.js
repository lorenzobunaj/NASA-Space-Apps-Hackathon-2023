import React from 'react';
import { useAppContext } from '../../context/context';
import { BiSolidColorFill } from 'react-icons/bi';
import { Link, useLocation } from 'react-router-dom';

const PlanetCard = (data) => {
    const { setPrompt, planetData, setCurrentUrl } = useAppContext();

    const location = useLocation();

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

    window.localStorage.setItem('planetPrompt', `generate only one landscape, only one image, with sky of color ${rgbMax(athmosphereColor)}, trees of color ${rgbMax(vegetationColor)}, lakes of color ${rgbMax(lakesColor)}`);
    setPrompt(`generate only one landscape, only one image, with sky of color ${rgbMax(athmosphereColor)}, trees of color ${rgbMax(vegetationColor)}, lakes of color ${rgbMax(lakesColor)}`);

    return (
            <div className="planetCard d-block mt-5 col-6">
                <h1 className='mb-4 ms-5'>Copy your results</h1>
                <p className='ms-5'>By clicking on the button<br/>you will copy the colors code</p>
                <div className='container w-auto ms-5'>
                    <div className='row athmosphere d-flex align-content-center my-5'>
                        <button className='border-0'>
                            <div className='container my-3'>
                                <div className='row'>
                                    <div className='col-8 d-flex justify-content-center align-text-center text'>Athmosphere</div>
                                    <div className='col-4 d-flex justify-content-center align-items-center'><BiSolidColorFill /></div>
                                </div>
                            </div>
                        </button>
                    </div>
                    <div className='row surface d-flex align-content-center my-5'>
                        <button className='border-0e'>
                            <div className='container my-3'>
                                <div className='row'>
                                    <div className='col-8 d-flex justify-content-center align-text-center text'>Surface</div>
                                    <div className='col-4 d-flex justify-content-center align-items-center'><BiSolidColorFill /></div>
                                </div>
                            </div>
                        </button>
                    </div>
                    <div className='row vegetation d-flex align-content-center my-5'>
                        <button className='border-0'>
                            <div className='container my-3'>
                                <div className='row'>
                                    <div className='col-8 d-flex justify-content-center align-text-center text'>Vegetation</div>
                                    <div className='col-4 d-flex justify-content-center align-items-center'><BiSolidColorFill /></div>
                                </div>
                            </div>
                        </button>
                    </div>
                    <div className='row lakes d-flex align-content-center my-5'>
                        <button className='border-0'>
                            <div className='container my-3'>
                                <div className='row'>
                                    <div className='col-8 d-flex justify-content-center align-text-center text'>Lakes</div>
                                    <div className='col-4 d-flex justify-content-center align-items-center'><BiSolidColorFill /></div>
                                </div>
                            </div>
                        </button>
                    </div>
                    <div>
                        <Link style={{
                            color: 'white',
                            fontSize: '120%',
                            fontWeight: 'bold',
                            textTransform: 'uppercase'
                        }}
                            to={{
                                pathname: `${location.pathname}/image`, 
                                query: {planetData}
                            }}
                            onClick={() => setCurrentUrl(`${location.pathname}/image`)}>
                            Go to Image Page
                        </Link>
                    </div>
                </div>
            </div>
    )
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

export { PlanetCard };