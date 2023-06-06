import React from "react";
import { m, motion } from "framer-motion";

function AnimatedText({ text, className }) {
    const quote = {
        initial: {
            opacity: 1,
        },
        animate: {
            opacity: 1,
            transition: {
                delay: 0.5,
                staggerChildren: 0.08,
            },
        },
    };
    const singleWord = {
        initial: {
            opacity: 0,
            y: 70,
        },
        animate: {
            opacity: 1,
            y: 1,
            transition: {
                duration: 1,
            },
        },
    };
    return (
        <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden">
            <motion.h1
                variants={quote}
                initial="initial"
                animate="animate"
                className={`inline-block w-full text-white font-bold capitalize text-8xl ${className}`}
            >
                {text.split(" ").map((word, index) => (
                    <motion.span
                        variants={singleWord}
                        className={`inline-block mb-2 ${
                            word == "Elom" ||
                            word == "Solutions" ||
                            word == "Solutionsper"
                                ? "base"
                                : ""
                        }`}
                        key={word + "-" + index}
                    >
                        {word}&nbsp;
                    </motion.span>
                ))}
            </motion.h1>
        </div>
    );
}

export default AnimatedText;
