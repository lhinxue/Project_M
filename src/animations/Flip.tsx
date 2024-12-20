import { keyframes } from "@emotion/react";
import React from "react";
import Reveal from "react-awesome-reveal";

interface FlipProps {
    children: React.ReactNode;
    delay?: number;
}

const animate = () => keyframes`
    from {
        opacity: 0;
        transform: rotateY(60deg);
    }
    to {
        opacity: 1;
        transform: rotateY(0);
    }
`;

export default function Flip({ children, delay }: FlipProps) {
    return (
        <Reveal keyframes={animate()} cascade damping={0.07} delay={delay}>
            {children}
        </Reveal>
    );
}