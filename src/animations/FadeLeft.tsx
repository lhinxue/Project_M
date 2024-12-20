import { keyframes } from "@emotion/react";
import React from "react";
import Reveal from "react-awesome-reveal";

interface FadeLeftProps {
    children: React.ReactNode;
    delay?: number;
}

const animate = (d: number) => keyframes`
  from {
    opacity: 0;
    transform: translateX(${d}px);
  }

  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export default function FadeLeft({ children, delay = 200 }: FadeLeftProps) {
    return (
        <Reveal keyframes={animate(20)} cascade delay={delay} damping={0.1}>
            {children}
        </Reveal>
    );
}