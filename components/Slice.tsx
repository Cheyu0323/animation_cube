"use client";
import { useGSAP } from "@gsap/react";
import { Vector3 } from "@react-three/fiber";
import React, { useRef } from "react";
import gsap from "gsap";
import { Subtraction } from "@react-three/csg";

type sliceProps = {
    position: Vector3;
};

const Slice: React.FC<sliceProps> = ({ position }) => {
    const ref = useRef<any>(null!);
    useGSAP(
        () => {
            if (ref.current == null) return;
            gsap.to(ref.current.position, {
                x: ref.current.position.x - 1,
                duration: 5,
                repeat: -1,
                ease: "none",
            });
        },
        { scope: ref }
    );

    return (
        <Subtraction ref={ref} scale={[0.03, 2, 2]} position={position}>
            <boxGeometry />
            <meshStandardMaterial
                color="#00B4D8"
                roughness={0.18}
                metalness={1}
                transparent
                opacity={0.8}
            />
        </Subtraction>
    );
};

export default Slice;
