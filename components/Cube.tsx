import { Vector3 } from "@react-three/fiber";
import React from "react";

type CubeProps = {
    scale: Vector3;
};

const Cube = ({ scale }: CubeProps) => {
    return (
        <mesh scale={scale}>
            <boxGeometry />
            <meshStandardMaterial color="#0000ff" />
        </mesh>
    );
};

export default Cube;
