import { useRef, useEffect } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import {
    cIcon,
    cssIcon,
    htmlIcon,
    javaIcon,
    phpIcon,
    pythonIcon,
    sqlIcon,
} from "../assets";

function ParallaxText({ children, baseVelocity = 100 }) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400,
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false,
    });

    const x = useTransform(baseX, (v) => `${wrap(30, -45, v)}%`);

    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className="parallax m-auto mb-4">
            <motion.div className="scroller" style={{ x }}>
                <span>{children}</span>
            </motion.div>
        </div>
    );
}

export default function OurTechnology() {
    return (
        <section className="OurTechnology container" id="technology">
            <div className="baseTitle mb-10">
                <h2
                    data-subtitle="our technology's"
                    className="title max-w-sm m-auto"
                >
                    The tools and languages we work with
                </h2>
            </div>
            <ParallaxText baseVelocity={-10}>
                <div className="flex items-start justify-center gap-10">
                    <img className="w-20" src={htmlIcon} alt="Technology" />
                    <img className="w-20" src={cIcon} alt="Technology" />
                    <img className="w-20" src={pythonIcon} alt="Technology" />
                    
                    <img className="w-20" src={htmlIcon} alt="Technology" />
                    <img className="w-20" src={cIcon} alt="Technology" />
                    <img className="w-20" src={pythonIcon} alt="Technology" />

                    <img className="w-20" src={cssIcon} alt="Technology" />
                    <img className="w-20" src={phpIcon} alt="Technology" />
                    <img className="w-20" src={sqlIcon} alt="Technology" />
                    <img className="w-20" src={javaIcon} alt="Technology" />
                </div>
            </ParallaxText>
            <ParallaxText baseVelocity={10}>
                <div className="flex items-start justify-center gap-5">
                    <img className="w-20" src={cssIcon} alt="Technology" />
                    <img className="w-20" src={phpIcon} alt="Technology" />
                    <img className="w-20" src={sqlIcon} alt="Technology" />
                    <img className="w-20" src={javaIcon} alt="Technology" />

                    <img className="w-20" src={cssIcon} alt="Technology" />
                    <img className="w-20" src={phpIcon} alt="Technology" />
                    <img className="w-20" src={sqlIcon} alt="Technology" />
                    <img className="w-20" src={javaIcon} alt="Technology" />

                    <img className="w-20" src={htmlIcon} alt="Technology" />
                    <img className="w-20" src={cIcon} alt="Technology" />
                    <img className="w-20" src={pythonIcon} alt="Technology" />
                </div>
            </ParallaxText>
        </section>
    );
}
