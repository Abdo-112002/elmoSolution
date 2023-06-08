import { useCallback, useEffect, useState } from "react";
import { Logo } from "../reUseComponents";
import { logoImg, amirican, italy } from "../assets";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { toggleLangFun, toggleNavFun } from "../store/reducers/Toggle";

// icons
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { VscListSelection } from "react-icons/vsc";

function NavBar() {
    const [t, i18n] = useTranslation();
    const dispatch = useDispatch();
    const [isDarkMode, setIsDarkMode] = useState(false);
    const { toggleLang, toggleNav } = useSelector((state) => state.toggleMode);

    // toggle dark or light mode
    const handleToggleMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
        const htmlElement = document.querySelector("body");
        if (isDarkMode) {
            htmlElement.classList.add("dark-mode");
        } else {
            htmlElement.classList.remove("dark-mode");
        }
    }, [isDarkMode]);

    // for framer motion animations
    const [navStyle, setNavStyle] = useState({
        initial: {},
        animate: {},
    });

    // toggle navigation
    const toggleMenu = () => {
        dispatch(toggleNavFun());
    };

    // toggle language
    const toggleLanguage = useCallback(
        (language) => {
            dispatch(toggleLangFun(language));
            i18n.changeLanguage(language);
            localStorage.setItem("lang", language);
        },
        [i18n, dispatch]
    );

    const handleScroll = useCallback(() => {
        const scrollY = window.pageYOffset;
        if (scrollY > 20) {
            setNavStyle({
                initial: {
                    y: -100,
                    opacity: 0,
                },
            });
            if (scrollY > 250) {
                setNavStyle({
                    ...navStyle,
                    animate: {
                        y: 0,
                        opacity: 1,
                        boxShadow: "0px -5px 10px 2px rgba(0, 0, 0, 0.3)",
                        transition: {
                            duration: 0.8,
                        },
                    },
                });
            }
        } else {
            setNavStyle({
                ...navStyle,
                animate: {
                    y: 0,
                    opacity: 1,
                    transition: {
                        duration: 0.8,
                    },
                },
            });
        }
    }, []);

    useEffect(() => {
        const getLang = localStorage.getItem("lang");
        dispatch(toggleLangFun(getLang));
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [dispatch, handleScroll]);

    return (
        <motion.header
            variants={navStyle}
            initial="initial"
            animate="animate"
            className="header"
        >
            <div className="container">
                <div className="flex items-center justify-between flex-wrap">
                    <Logo src={logoImg} />
                    <div
                        onClick={toggleMenu}
                        className={`navWrapper flex items-center justify-between gap-10 ${
                            toggleNav ? "open" : null
                        }`}
                    >
                        <nav className="header__nav flex items-center gap-10 flex-wrap">
                            <a
                                href="/"
                                className="header__nav--item defaultActive"
                            >
                                {t("navHome")}
                            </a>
                            <a href="#aboutUs" className="header__nav--item">
                                {t("navAboutUs")}
                            </a>
                            <a href="#services" className="header__nav--item">
                                {t("navServices")}
                            </a>
                            <a href="#technology" className="header__nav--item">
                                {t("navTechnology")}
                            </a>
                            <a href="#" className="header__nav--item">
                                {t("navProjects")}
                            </a>
                            <a href="#contact" className="header__nav--item">
                                {t("navContactUs")}
                            </a>
                        </nav>
                        <div className="header__icons flex items-center gap-5">
                            <div className="flex items-center gap-3">
                                <a href="#">
                                    <FaFacebookF className="socialIcons" />
                                </a>
                                <a href="#">
                                    <FaLinkedinIn className="socialIcons" />
                                </a>
                            </div>
                            <div
                                onClick={() =>
                                    toggleLanguage(
                                        toggleLang === "en" ? "it" : "en"
                                    )
                                }
                            >
                                <img
                                    className="w-10 cursor-pointer"
                                    src={toggleLang === "en" ? italy : amirican}
                                    alt="languageIcons"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="header__menu" onClick={toggleMenu}>
                        <VscListSelection size={"30"} />
                    </div>
                </div>
            </div>
        </motion.header>
    );
}

export default NavBar;
