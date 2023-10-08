import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import slugify from 'react-slugify';
import { useAppContext } from '../../context/context';
import { AthmosphereInputsList } from './InputsLists/AthmosphereInputsList';
import { SurfaceInputsList } from './InputsLists/SurfaceInputsList';
import { VegetationInputsList } from './InputsLists/VegetationInputsList';

const PlanetForm = () => {
    const { planetQuery, searchPlanet, setCurrentUrl } = useAppContext();
    const [input, setInput] = useState(planetQuery);
    const navigate = useNavigate();

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setInput({
            ...input,
            name: document.querySelector('#planetName').value

        });
        searchPlanet(input);

        window.localStorage.setItem('planetName', input.name);
        window.localStorage.setItem('planetStar', input.star);

        setCurrentUrl(window.location.href);
        navigate(`/planets/${slugify(input.name.toLowerCase(), { delimiter: '-', })}`);
    };

    return (
        <>
            <form id="planetForm" onSubmit={handleFormSubmit}>
                <label htmlFor="planetName">
                    <h4>Search by Name:</h4>
                </label>
                <div>
                    <div>
                        <button type="submit">
                            Render Planet
                        </button>
                    </div>
                    <br />
                    Name:
                    <div>
                        <input
                            id="planetName"
                            placeholder={planetQuery.name}
                            value={input.name}
                            onChange={(e) => {
                                setInput({
                                    ...input,
                                    name: e.target.value
                                })
                            }}
                        />
                    </div>
                    <br />
                    <AthmosphereInputsList input={input} setInput={setInput} />
                    <br />
                    <SurfaceInputsList input={input} setInput={setInput} />
                    <br />
                    <VegetationInputsList input={input} setInput={setInput} />
                    <br />
                    Star:
                    <div>
                        <input
                            id="planetStar"
                            placeholder={planetQuery.star}
                            value={input.star}
                            onChange={(e) => {
                                setInput({
                                    ...input,
                                    star: e.target.value
                                })
                            }}
                        />
                    </div>
                </div>
            </form>
        </>
    );
};

export { PlanetForm };