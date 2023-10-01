import React from 'react';
import { Link } from 'react-router-dom';
import { PlanetForm } from "./PlanetForm";

const Planets = () => {

    return (
        <>
            <Link to="/">
                Go to Home Page
            </Link>
            <PlanetForm/>
        </>
    );
};

export { Planets };