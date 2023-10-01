import React from 'react';
import { Link } from "react-router-dom";
import { PlanetCard } from "./PlanetCard";

const Planet = () => {

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
            <PlanetCard />
        </>
    );
};

export { Planet };