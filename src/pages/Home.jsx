import { AnimatePresence, motion, useAnimation } from "framer-motion";
import Test from "../reUseComponents/Test";
import { Box } from "@chakra-ui/react";
import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

function Home() {
    // const [show, setShow] = useState(true);

    const [t, i18n] = useTranslation();

    // const chiledAnimation1 = useAnimation();
    // const chiledAnimation2 = useAnimation();

    // const initAnimate = {
    //     translateX: -window.innerWidth,
    //     opacity: 0,
    //     rotate: -360,
    // };

    // const endAnimate = {
    //     translateX: 500,
    //     rotate: 0,
    //     opacity: 1,
    // };

    // useEffect(() => {
    //     const timing = setTimeout(() => {
    //         // setShow(false);
    //     }, 5000);

    //     return () => {
    //         clearTimeout(timing);
    //     };
    // }, []);

    // const handelAnimationStart = () => {
    //     chiledAnimation1.start({
    //         opacity: 0,
    //         translateX: 500,
    //     });
    //     chiledAnimation2.start({
    //         opacity: 1,
    //         translateY: 0,
    //     });
    // };
    // const handelAnimationEnd = () => {
    //     chiledAnimation1.start({
    //         opacity: 1,
    //         translateX: 0,
    //     });
    //     chiledAnimation2.start({
    //         opacity: 0,
    //         translateY: 500,
    //     });
    // };

    // const switchLang = useCallback(
    //     (lang) => {
    //         i18n.changeLanguage(lang);
    //     },
    //     [i18n]
    // );

    // const Button = ({ changeLang }) => {
    //     const memoizedChangeLang = useMemo(() => {
    //         return changeLang;
    //     }, [changeLang]);
    //     return (
    //         <>
    //             {show && (
    //                 <AnimatePresence>
    //                     <motion.button
    //                         onClick={() => memoizedChangeLang("it")}
    //                         initial={initAnimate}
    //                         animate={endAnimate}
    //                         transition={{ duration: 2 }}
    //                         exit={{ opacity: 0, x: 200 }}
    //                         onHoverStart={handelAnimationStart}
    //                         onHoverEnd={handelAnimationEnd}
    //                         whileHover={{
    //                             scale: 1.1,
    //                             backgroundColor: "#F9A826",
    //                             rotate: [0, 10, -10, 0],
    //                             transition: { duration: 0.3 },
    //                         }}
    //                         whileTap={{ scale: 0.9 }}
    //                         className="bg-orange-300 overflow-hidden py-3 px-5 capitalize m-8 rounded-md"
    //                     >
    //                         <motion.span
    //                             animate={chiledAnimation1}
    //                             transition={{ delay: 0.5, duration: 1 }}
    //                         >
    //                             Click Me
    //                         </motion.span>
    //                         <motion.span
    //                             initial={{ opacity: 0, translateX: -500 }}
    //                             animate={chiledAnimation2}
    //                             transition={{ delay: 1, duration: 1 }}
    //                         >
    //                             Rest Me
    //                         </motion.span>
    //                     </motion.button>
    //                 </AnimatePresence>
    //             )}
    //         </>
    //     );
    // };

    return (
        <Box>
            <Test title={t("title")} />
            {/* <Button changeLang={switchLang} /> */}
        </Box>
    );
}

export default Home;
