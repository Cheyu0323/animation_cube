"use client";
import { Color, Vector3 } from "@react-three/fiber";
import React, { useRef } from "react";
import { DirectionalLight } from "three";

type directionLightProps = {
    position: Vector3;
    intensity: number;
    color: Color;
};

const DirectionLight: React.FC<directionLightProps> = ({
    position,
    intensity,
    color,
}) => {
    const dirLightRef = useRef<DirectionalLight>(null);

    return (
        <>
            <directionalLight
                ref={dirLightRef}
                position={position}
                intensity={intensity}
                color={color}
                castShadow
            />
        </>
    );
};

export default DirectionLight;
