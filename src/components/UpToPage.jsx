import React, { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";
import { elmoTextImg } from "../assets";
import { motion, useViewportScroll, AnimatePresence } from "framer-motion";

function UpToPage() {
    const { scrollY } = useViewportScroll();
    const [showDiv, setShowDiv] = useState(false);

    const handleButtonClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            setShowDiv(scrollY.get() >= 500);
        };

        scrollY.onChange(handleScroll);

        return () => {
            scrollY.onChange(null);
        };
    }, [scrollY]);

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, x: -300 }}
                animate={{ opacity: showDiv ? 1 : 0, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="fixed right-8 bottom-7 flex items-center justify-center z-50 overflow-hidden"
            >
                <div className="h-auto w-24 flex items-center justify-center  relative">
                    <img
                        src={elmoTextImg}
                        alt="elmoTextImg"
                        className="animate-spin-slow"
                    />
                    <BsArrowUp
                        onClick={handleButtonClick}
                        className="bg-black text-blue-500 w-10 h-10 rounded-full p-2 cursor-pointer absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    />
                </div>
            </motion.div>
        </AnimatePresence>
    );
}

export default UpToPage;
