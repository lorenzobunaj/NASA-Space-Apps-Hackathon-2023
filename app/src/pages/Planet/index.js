import styled from "styled-components";
import React, { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Link } from "react-router-dom";
import { PlanetCard } from "./PlanetCard";
import PlanetModel from './PlanetModel';
import { useAppContext } from '../../context/context';

const Planet = () => {
    const { setCurrentUrl } = useAppContext();

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
            <PlanetCard />
            <Canvas className='planetModel'>
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={0.5} />
                <directionalLight position={[-2, 5, 2]} intensity={1} />
                <Suspense fallback={null}>
                    <PlanetModel />
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