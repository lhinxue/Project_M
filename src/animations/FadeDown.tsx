import { keyframes } from "@emotion/react";
import React from "react";
import Reveal from "react-awesome-reveal";

interface FadeDownProps {
    children: React.ReactNode;
    delay?: number;
}

const animate = (d: number) => keyframes`
  from {
    opacity: 0;
    transform: translateY(-${d}px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export default function FadeDown({ children, delay = 200 }: FadeDownProps) {
    return (
        <Reveal keyframes={animate(20)} cascade delay={delay} damping={0.1}>
            {children}
        </Reveal>
    );
}
