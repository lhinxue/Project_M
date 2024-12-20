import { ScrollShadow, Spacer } from "@nextui-org/react";
import { LazyMotion, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

import FadeUp from "./animations/FadeUp";
import Background from "./components/Background";
import Navigator from "./components/Navigator";

import "./App.css";

function App() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };
    const [isVisible, setIsVisible] = useState(false);
    const onAppear = () => {
        return {
            opacity: 1,
            transition: { duration: 0.5 },
        };
    };

    // Function to handle opacity on disappear
    const onDisappear = () => {
        return {
            opacity: 0,
            transition: { duration: 0.5 },
        };
    };
    return (
        <main className="dark text-foreground bg-background bg-transparent">
            <Navigator />
            <Background
                input={{
                    landscape: {
                        src: "https://fastcdn.hoyoverse.com/content-v2/hkrpg/101831/f54aaca7603e2c81de7f59f2ba27ace5_1530189916137544025.mp4",
                        poster: "https://fastcdn.hoyoverse.com/content-v2/hkrpg/101831/f54aaca7603e2c81de7f59f2ba27ace5_1530189916137544025.mp4?x-oss-process=video/snapshot,t_1,f_jpg,m_fast",
                    },
                    portrait: {
                        src: "https://fastcdn.hoyoverse.com/content-v2/hkrpg/101831/8150ed7bf869ad11a7c68a8646a850cb_416164607738221361.mp4",
                        poster: "https://fastcdn.hoyoverse.com/content-v2/hkrpg/101831/8150ed7bf869ad11a7c68a8646a850cb_416164607738221361.mp4?x-oss-process=video/snapshot,t_1,f_jpg,m_fast",
                    },
                }}
            />
            <ScrollShadow>
                <P1
                    id="cover"
                    onReveal={() => {
                        scrollToSection("cover");
                        setIsVisible(false);
                    }}
                ></P1>
                <Spacer></Spacer>

                <motion.span
                    initial={onDisappear()}
                    animate={isVisible ? onAppear() : onDisappear()}
                    exit={onDisappear()}
                >
                    <P1
                        id="content"
                        onReveal={() => {
                            scrollToSection("pg1");
                            setIsVisible(true);
                        }}
                    >
                        <P1 id="pg1" className="backdrop-blur bg-background/80" onReveal={() => scrollToSection("pg1")}></P1>
                        <Spacer></Spacer>
                        <P1 id="pg2" className="bg-red-500" onReveal={() => scrollToSection("pg2")}></P1>
                        <Spacer></Spacer>
                        <P1 id="pg3" className="bg-fuchsia-400" onReveal={() => scrollToSection("pg3")}></P1>
                        <Spacer></Spacer>
                        <P1 id="pg4" className="bg-pink-600" onReveal={() => scrollToSection("pg4")}></P1>
                        <Spacer></Spacer>
                        <P1 id="pg5" className="bg-yellow-500" onReveal={() => scrollToSection("pg5")}></P1>
                        <Spacer></Spacer>
                    </P1>
                </motion.span>

                {/* <FadeUp onReveal={() => scrollToSection("cover")} delay={0}>
                    <div id="cover" className="page w-screen ">
                        
                    </div>
                </FadeUp> */}
            </ScrollShadow>
        </main>
    );
}

export default App;

const P1 = ({
    children,
    id,
    className = "",
    onReveal = () => {},
}: {
    children: React.ReactNode;
    id?: string;
    onReveal?: any;
    className?: string;
}) => {
    const { inView, ref } = useInView({
        threshold: 0.1, // Adjust this value to control when the component is considered in the viewport
    });

    useEffect(() => {
        if (inView) {
            onReveal();
        }
    }, [inView]);

    return (
        <div id={id} ref={ref} className={`${className} page w-screen`}>
            {children}
        </div>
    );
};
