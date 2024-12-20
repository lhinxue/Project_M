import { keyframes } from "@emotion/react";
import React from "react";
import Reveal from "react-awesome-reveal";

interface FadeRightProps {
    children: React.ReactNode;
    delay?: number;
}

const animate = (d: number) => keyframes`
  from {
    opacity: 0;
    transform: translateX(-${d}px);
  }

  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export default function FadeRight({ children, delay = 200 }: FadeRightProps) {
    return (
        <Reveal keyframes={animate(20)} cascade delay={delay} damping={0.1}>
            {children}
        </Reveal>
    );
}
