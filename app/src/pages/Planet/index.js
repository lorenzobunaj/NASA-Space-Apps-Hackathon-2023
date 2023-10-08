import styled from "styled-components";
import React, { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Link, useLocation } from "react-router-dom";
import { PlanetCard } from "./PlanetCard";
import PlanetModel from './PlanetModel';
import { useAppContext } from '../../context/context';

const Planet = () => {
    const location = useLocation();
    const { setCurrentUrl, isLoading, isError, planetData } = useAppContext();

    if (isError) {
        return (
            <>
                <h1>Error</h1>
            </>
        )
    }
    if (isLoading) {
        return (
            <>
                <h1>Loading...</h1>
            </>
        )
    }

    return (
        <Wrapper>
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
            <div>
                <Link to={`${location.pathname}/image`} onClick={() => setCurrentUrl(`${location.pathname}/image`)}>
                    Go to Image Page
                </Link>
            </div>

            <PlanetCard planetData={planetData}/>
            <Canvas className='planetModel'>
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={1} />
                <directionalLight position={[0,3, 3]} intensity={2} />
                <Suspense fallback={null}>
                    <PlanetModel planetData={planetData}/>
                </Suspense>
            </Canvas>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: relative;
    height: 700px;

    .planetLinks {
        position: absolute;
    }
    .planetCard {
        position: absolute;
    }
    .planetModel {
        position: absolute;
        //height: 700px;
    }
`;

export { Planet };