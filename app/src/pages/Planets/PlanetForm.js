import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import slugify from 'react-slugify';
import { useAppContext } from '../../context/context';
import { AthmosphereInputsList } from './InputsLists/AthmosphereInputsList';
import { SurfaceInputsList } from './InputsLists/SurfaceInputsList';
import { VegetationInputsList } from './InputsLists/VegetationInputsList';
import { HabitabilityInputsList } from './InputsLists/HabitabilityInputsList';
import { styled } from 'styled-components';

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
        <Wrapper className="ms-4">
            <div className='container'>
            <form id="planetForm" className="mt-5" onSubmit={handleFormSubmit}>
                <h1 className='mb-4' style={{
                    fontWeight: 900,
                    textTransform: 'uppercase',
                    color: 'white'
                }}>Render your planet</h1>
                <p className='' style={{
                    fontWeight: 900,
                    textTransform: 'uppercase',
                    color: 'white'
                }}>
                    By filling the form<br/>you will render your dream plane
                </p>
                <div className="mt-5">
                    <div>
                        <button type="submit" className='renderButton py-3'>
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
                    <div className="dropdown">
                        <button className="btn btn-dropdown dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Show Athmosphere inputs
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <div className="link-list-wrapper">
                            <ul className="link-list">
                                <AthmosphereInputsList input={input} setInput={setInput} />
                            </ul>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="btn btn-dropdown dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Show Surface inputs
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <div className="link-list-wrapper">
                            <ul className="link-list">
                                <SurfaceInputsList input={input} setInput={setInput} />
                            </ul>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="btn btn-dropdown dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Show Vegetation inputs
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <div className="link-list-wrapper">
                            <ul className="link-list">
                                <VegetationInputsList input={input} setInput={setInput} />
                            </ul>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="btn btn-dropdown dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Show Habitability inputs
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <div className="link-list-wrapper">
                            <ul className="link-list">
                                <HabitabilityInputsList input={input} setInput={setInput} />
                            </ul>
                            </div>
                        </div>
                    </div>
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
            </div>
        </Wrapper>
    );
};


const Wrapper = styled.div`
    form div div .renderButton {
        border-radius: 5px;
        width: 300px;
        background-color: #e7f434;
        color: #123492;
        font-weight: 800;
        text-transform: uppercase;
        font-size: 150%;
        transition: all .3s;
        border: 0;
    }
    form div div .renderButton:hover  {
        background-color: #123492;
        color: #b1dcf4;
    }
`;

export { PlanetForm };