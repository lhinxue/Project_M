import { keyframes } from "@emotion/react";
import React from "react";
import Reveal from "react-awesome-reveal";

interface FadeInProps {
    children: React.ReactNode;
}

const animate = () => keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export default function FadeIn({ children }: FadeInProps) {
    return (
        <Reveal keyframes={animate()} cascade delay={400} damping={0.1}>
            {children}
        </Reveal>
    );
}
