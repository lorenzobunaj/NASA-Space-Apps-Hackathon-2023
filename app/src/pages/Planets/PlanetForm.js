import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import slugify from 'react-slugify';
import { FaSearch } from "react-icons/fa";
import { useAppContext } from '../../context/context';
import { InputsList } from './InputsList'

const PlanetForm = () => {
    const { planetQuery, searchPlanet } = useAppContext();
    const [input, setInput] = useState(planetQuery);
    const navigate = useNavigate();

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setInput({
            name: document.querySelector('#planetName').value
        });
        searchPlanet(input);

        window.localStorage.setItem('planetName', input.name);

        navigate(`/planets/${slugify(input.name.toLowerCase(), { delimiter: '-', })}`);
    };

    return (
        <>
            <form id="planetForm" onSubmit={handleFormSubmit}>
                <label htmlFor="planetName">
                    <h4>Search by Name:</h4>
                </label>
                <div>
                    <button type="submit">
                        <FaSearch />
                    </button>
                    <InputsList input={input} setInput={setInput}/>
                </div>
            </form>
        </>
    );
};

export { PlanetForm };