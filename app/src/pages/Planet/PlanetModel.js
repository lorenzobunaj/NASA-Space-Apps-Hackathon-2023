import React from 'react';
import { useLoader } from '@react-three/fiber';
//import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import { BackSide, MeshStandardMaterial, StaticReadUsage, TextureLoader } from 'three';
import planetModelSurfaceProfile from "../../assets/planetModelImages/3.png";
import planetModelSurfaceTexture from "../../assets/planetModelImages/surface.png";

const PlanetModel = (data) => {
    const { planetData } = data;
    const planetModelProfile = useLoader(TextureLoader, planetModelSurfaceProfile);
    const planetModelSurface = useLoader(TextureLoader, planetModelSurfaceTexture);

    const surfaceR = Math.round((Number(planetData.data.surface.color[0])+Number(planetData.data.vegetation.color[0]))/2);
    const surfaceG = Math.round((Number(planetData.data.surface.color[1])+Number(planetData.data.vegetation.color[1]))/2);
    const surfaceB = Math.round((Number(planetData.data.surface.color[2])+Number(planetData.data.vegetation.color[2]))/2);

    const athmosphereColor = `rgb(${planetData.data.athmosphere.color[0]},${planetData.data.athmosphere.color[1]},${planetData.data.athmosphere.color[2]})`;
    const surfaceColor = `rgb(${surfaceR},${surfaceG},${surfaceB})`;
    
    return (
            <group>
                <mesh visible scale={2.5} rotation={[Math.PI / 2, 0, 0]}>
                    <sphereGeometry />
                    <meshStandardMaterial color={0x38bdf8} map={planetModelProfile} transparent={false} />
                </mesh>
                <mesh visible scale={2.55} rotation={[Math.PI / 2, 0, 0]}>
                    <sphereGeometry />
                    <meshStandardMaterial color={surfaceColor} alphaMap={planetModelSurface} transparent={true}/>
                </mesh>
                <mesh visible scale={2.7} rotation={[Math.PI / 2, 0, 0]}>
                    <sphereGeometry />
                    <meshStandardMaterial color={athmosphereColor} transparent={false} opacity={1} side={BackSide}/>
                </mesh>
            </group>
    );
};

export default PlanetModel;