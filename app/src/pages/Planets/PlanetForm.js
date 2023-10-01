import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import slugify from 'react-slugify';
import { FaSearch } from "react-icons/fa";
import { useAppContext } from '../../context/context';

const PlanetForm = () => {
    const { planetQuery, searchPlanet } = useAppContext();
    const [input, setInput] = useState(planetQuery);
    const navigate = useNavigate();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        searchPlanet(input);
        navigate(`/planets/${
            slugify(planetQuery.toLowerCase(), {delimiter: '-',})
        }`);
    };

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="planetName">
                    <h4>Search by Name:</h4>
                </label>
                <div>
                    <input id="planetName" placeholder={planetQuery} value={input} 
                    onChange={(e) => setInput(e.target.value)}/>
                    <button type="submit">
                        <FaSearch />
                    </button>
                </div>
            </form>
        </>
    );
};

export { PlanetForm };