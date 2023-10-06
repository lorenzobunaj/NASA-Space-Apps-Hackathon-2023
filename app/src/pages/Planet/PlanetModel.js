import React from 'react';
import { useLoader } from '@react-three/fiber';
//import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import { MeshStandardMaterial, TextureLoader } from 'three';
import planetModelSurfaceTexture from "../../assets/planetModelImages/planetModelSurface.png";

const PlanetModel = () => {
    const planetModelSurface = useLoader(TextureLoader, planetModelSurfaceTexture);

    return (
        <mesh visible scale={2.5} rotation={[Math.PI / 2, 0, 0]}>
            <sphereGeometry />
            <meshStandardMaterial map={planetModelSurface}/>
        </mesh>
    );
};

export default PlanetModel;