"use client";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Slice from "./Slice";
import DirectionLight from "./DirectionLight";
import { Addition, Base, Brush, Geometry } from "@react-three/csg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Mesh } from "three";

const Block = () => {
    const csgRef = useRef<any>(null);
    const cubeRef = useRef<Brush>(null);
    const sphereRef = useRef<Mesh>(null);
    useFrame(() => {
        if (csgRef.current != null) csgRef.current.update();
    });

    useGSAP(
        () => {
            if (cubeRef.current == null) return;
            gsap.to(cubeRef.current.rotation, {
                y: cubeRef.current.rotation.y + 30,
                z: cubeRef.current.rotation.z + 15,
                duration: 100,
                repeat: -1,
                ease: "none",
            });
        },
        { scope: cubeRef }
    );

    return (
        <>
            <mesh>
                <Geometry useGroups ref={csgRef}>
                    <Base ref={cubeRef}>
                        <boxGeometry />
                        <meshStandardMaterial
                            color="#00B4D8"
                            roughness={0.18}
                            metalness={1}
                        />
                    </Base>
                    {[...Array(20)].map((item, index) => (
                        <Slice
                            key={index}
                            position={[-0.5 + index / 8, 0, 0]}
                        />
                    ))}
                    <Addition scale={[0.5, 0.5, 0.5]} rotation={[0, 0, 0]}>
                        <boxGeometry />
                        <meshStandardMaterial transparent={true} opacity={0} />
                    </Addition>
                </Geometry>
            </mesh>
            <mesh scale={[0.1, 0.1, 0.1]} ref={sphereRef}>
                <sphereGeometry />
                <meshStandardMaterial
                    color="#9094FE"
                    roughness={0.25}
                    metalness={1}
                    transparent
                    opacity={0.8}
                />
            </mesh>
        </>
    );
};

const Scene: React.FC = () => {
    return (
        <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 3] }}>
            <color attach="background" args={["#000"]} />
            <OrbitControls enableDamping={false} />
            <DirectionLight
                position={[0.34, 4.52, 3.42]}
                intensity={100}
                color={"#00B4D8"}
            />
            <DirectionLight
                position={[-0.7, -3.97, -9.73]}
                intensity={500}
                color={"#A555BF"}
            />
            <DirectionLight
                position={[-14.4, 9.3, 5.54]}
                intensity={700}
                color={"#9094FE"}
            />
            <DirectionLight
                position={[0.7, -3.97, 9.73]}
                intensity={300}
                color={"#A555BF"}
            />
            <Block />
        </Canvas>
    );
};

export default Scene;
