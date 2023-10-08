import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { useAppContext } from '../../context/context';
import { PlanetImage } from './PlanetImage';

const PlanetImagePage = () => {
    const location = useLocation();
    const { isLoadingImage, isErrorImage, planetImageUrl } = useAppContext();

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
            <div>
                <Link to="/">
                    Go to Home Page
                </Link>
            </div>
            <div>
                <Link to="/planets">
                    Go to Planets Page
                </Link>
            </div>
            <div>
                <Link to={`${location.pathname}/..`}>
                    Go to Planet Page
                </Link>
            </div>

            <PlanetImage planetImageUrl={planetImageUrl}/>
        </>
    );
};

export { PlanetImagePage };