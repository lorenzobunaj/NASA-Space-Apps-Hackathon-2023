import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import slugify from 'react-slugify';
import { FaSearch } from "react-icons/fa";
import { useAppContext } from '../../context/context';

const PlanetForm = () => {
    const { planetQuery, searchPlanet } = useAppContext();
    const [input, setInput] = useState(planetQuery);
    const navigate = useNavigate();

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setInput(document.querySelector('#planetName').value);
        searchPlanet(input);
        window.localStorage.setItem('pl_name', input);
        navigate(`/planets/${
            slugify(input.toLowerCase(), {delimiter: '-',})
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
                    onChange={(e) => {
                        setInput(e.target.value);
                    }}/>
                    <button type="submit">
                        <FaSearch />
                    </button>
                </div>
            </form>
        </>
    );
};

export { PlanetForm };