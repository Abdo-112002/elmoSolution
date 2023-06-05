import { motion } from "framer-motion";
import React from "react";

function Logo({ src }) {
    const logoVariants = {
        initial: {
            x: "-100vw",
        },
        animate: {
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };
    return (
        <motion.div
            initial="initial"
            animate="animate"
            variants={logoVariants}
            className="header__logo"
        >
            <img src={src} alt="logo" />
        </motion.div>
    );
}

export default Logo;
