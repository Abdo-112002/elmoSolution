import React, { useCallback, useEffect, useState } from "react";
import { Logo } from "../reUseComponents";
import { logoImg, amirican, italy } from "../assets";
import { useTranslation } from "react-i18next";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";

function NavBar() {
    const [t, i18n] = useTranslation();

    const [lang, setLang] = useState(false);

    const toggleLanguage = useCallback(
        (language) => {
            setLang(!lang);
            i18n.changeLanguage(language);
            localStorage.setItem("lang", language);
        },
        [lang, i18n]
    );

    useEffect(() => {
        const getLang = localStorage.getItem("lang");
        setLang(getLang == "en" ? false : true);
    }, []);

    return (
        <header className="header">
            <div className="container">
                <div className="flex items-center justify-between flex-wrap">
                    <Logo src={logoImg} />
                    <div className="navWrapper flex items-center justify-between gap-10">
                        <nav className="header__nav flex items-center gap-10 flex-wrap">
                            <a
                                href="#"
                                className="header__nav--item defaultActive"
                            >
                                {t("navHome")}
                            </a>
                            <a href="#aboutUs" className="header__nav--item">
                                {t("navAboutUs")}
                            </a>
                            <a href="#" className="header__nav--item">
                                {t("navServices")}
                            </a>
                            <a href="#" className="header__nav--item">
                                {t("navTechnology")}
                            </a>
                            <a href="#" className="header__nav--item">
                                {t("navProjects")}
                            </a>
                            <a href="#" className="header__nav--item">
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
                                    toggleLanguage(lang ? "en" : "it")
                                }
                            >
                                <img
                                    className="w-10 cursor-pointer"
                                    src={lang ? amirican : italy}
                                    alt="languageIcons"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default NavBar;
