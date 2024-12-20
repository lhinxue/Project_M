import { keyframes } from "@emotion/react";
import React from "react";
import Reveal from "react-awesome-reveal";

interface FadeUpProps {
    children: React.ReactNode;
    delay?: number;
    onReveal?: any;
    damping?: number;
}

const animate = (d: number) => keyframes`
  from {
    opacity: 0;
    transform: translateY(${d}px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export default function FadeUp({ children, delay = 200, damping = 0.1, onReveal = () => {} }: FadeUpProps) {
    const onVisibilityChange = (inView: boolean, entry: IntersectionObserverEntry) => {
        if (inView) onReveal();
    };

    return (
        <Reveal keyframes={animate(20)} cascade delay={delay} damping={damping} onVisibilityChange={onVisibilityChange}>
            {children}
        </Reveal>
    );
}
