import React from 'react';
import { Link } from "react-router-dom";
import { PlanetCard } from "./PlanetCard";
import { useAppContext } from '../../context/context';

const Planet = () => {
    const { setCurrentUrl } = useAppContext();

    return (
        <>
            <div>
                <Link to="/" onClick={() => setCurrentUrl('http://localhost:3000')}>
                    Go to Home Page
                </Link>
            </div>
            <div>
                <Link to="/planets" onClick={() => setCurrentUrl('http://localhost:3000/planets')}>
                    Go to Planets Page
                </Link>
            </div>
            <PlanetCard />
        </>
    );
};

export { Planet };