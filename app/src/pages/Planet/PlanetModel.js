import React from 'react';
import { useEffect, useRef } from 'react';
import { useLoader } from '@react-three/fiber';
//import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import { useFrame } from '@react-three/fiber';
import { BackSide, MeshStandardMaterial, StaticReadUsage, TextureLoader } from 'three';
import planetModelSurfaceProfile from "../../assets/planetModelImages/5.png";
import planetModelSurfaceTexture from "../../assets/planetModelImages/5w.png";
import planetModelCloudsTexture from "../../assets/planetModelImages/cloud.png";

const PlanetModel = (data) => {
    useFrame(({ clock }) => {
        xRotation.current.rotation.y = 1/3*clock.getElapsedTime();
    });

    const [planetScale, setPlanetScale] = React.useState(window.innerWidth/1500);
    
      useEffect(() => {
        const handleResize = () => {
          setPlanetScale(window.innerWidth/1650);
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
      });

    const { planetData } = data;
    const planetModelProfile = useLoader(TextureLoader, planetModelSurfaceProfile);
    const planetModelSurface = useLoader(TextureLoader, planetModelSurfaceTexture);
    const planetClouds = useLoader(TextureLoader, planetModelCloudsTexture);

    const athmosphereR = Math.round(Number(planetData.data.athmosphere.color[0]));
    const athmosphereG = Math.round(Number(planetData.data.athmosphere.color[1]));
    const athmosphereB = Math.round(Number(planetData.data.athmosphere.color[2]));
    
    const surfaceR = Math.round((Number(planetData.data.surface.color[0])+Number(planetData.data.vegetation.color[0]))/2);
    const surfaceG = Math.round((Number(planetData.data.surface.color[1])+Number(planetData.data.vegetation.color[1]))/2);
    const surfaceB = Math.round((Number(planetData.data.surface.color[2])+Number(planetData.data.vegetation.color[2]))/2);
    
    /*
    const surfaceR = Math.round(Number(planetData.data.surface.color[0]));
    const surfaceG = Math.round(Number(planetData.data.surface.color[1]));
    const surfaceB = Math.round(Number(planetData.data.surface.color[2]));
    */
    const lakesR = Math.round(Number(planetData.data.lakes.color[0])*4/3);
    const lakesG = Math.round(Number(planetData.data.lakes.color[1])*4/3);
    const lakesB = Math.round(Number(planetData.data.lakes.color[2])*4/3);

    const athmosphereColor = `rgb(${athmosphereR},${athmosphereG},${athmosphereB})`;
    const surfaceColor = `rgb(${surfaceR},${surfaceG},${surfaceB})`;
    const lakesColor = `rgb(${lakesR},${lakesG},${lakesB})`;

    const xRotation = useRef();
    
    return (
            <group ref={xRotation} scale={planetScale}>
                <mesh visible scale={2.5} rotation={[Math.PI / 2, 0, 0]}>
                    <sphereGeometry />
                    <meshStandardMaterial color={lakesColor} map={planetModelProfile} transparent={false} />
                </mesh>
                <mesh visible scale={2.55} rotation={[Math.PI / 2, 0, 0]}>
                    <sphereGeometry />
                    <meshStandardMaterial color={surfaceColor} alphaMap={planetModelSurface} transparent={true}/>
                </mesh>
                <mesh visible scale={2.7} rotation={[Math.PI / 2, 0, 0]}>
                    <sphereGeometry />
                    <meshStandardMaterial color={athmosphereColor} transparent={false} opacity={0.1} side={BackSide}/>
                </mesh>
                <mesh visible scale={2.72} rotation={[0, 0, 0]}>
                    <sphereGeometry />
                    <meshStandardMaterial transparent={true} color={0xffffff} alphaMap={planetClouds}/>
                </mesh>
            </group>
    );
};

export default PlanetModel;