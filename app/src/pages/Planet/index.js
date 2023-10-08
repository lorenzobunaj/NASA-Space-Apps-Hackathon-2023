import styled from "styled-components";
import React, { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { useFrame } from '@react-three/fiber'
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

            <div className="container">
                <div className="row">
                    <PlanetCard planetData={planetData} />
                </div>
            </div>
            <Canvas className='planetModel col-6 mt-5' style={{position: "absolute", width: "50vw", left: "40vw"}}>
                <ambientLight intensity={1} />
                <directionalLight position={[3,0, 0]} intensity={1.5} />
                <directionalLight position={[-3,0, 0]} intensity={1.5} />
                <directionalLight position={[0,3, 0]} intensity={1.5} />
                <directionalLight position={[0,-3, 0]} intensity={1.5} />
                <directionalLight position={[0,0, 3]} intensity={1.5} />
                <directionalLight position={[0,0, -3]} intensity={1.5} />
                <Suspense fallback={null}>
                    <PlanetModel planetData={planetData}/>
                </Suspense>
            </Canvas>
        </Wrapper>
    );
};

const Wrapper = styled.div`
        position: relative;
        height: 80vh;
        background-color: #004aca;

        .planetLinks {
            position: absolute;
        }
        .planetCard {
            z-index: 1;
            position: absolute;
            width: auto;
            height: auto;
            border-radius: 5px;
            h1, p {
                font-weight: 900;
                text-transform: uppercase;
                color: white;
            }
            .container .row button {
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
            .container .row button:hover  {
                background-color: #123492;
                color: #b1dcf4;
            }
        }
        .planetModel {
            position: absolute;
            width: 50vw;
            //height: 700px;
        }
    `;

export { Planet };