import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {

    return (
        <>
            <Link to="/planets">
                Go to Planets Page
            </Link>
        </>
    );
};

export { Home };