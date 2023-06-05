import React from "react";
import { motion } from "framer-motion";
import { heroImg } from "../assets";
import { useTranslation } from "react-i18next";

function MainSection() {
    const [t, i18n] = useTranslation();
    return (
        <div className="hero overflow-hidden">
            <div className="flex w-[95%] h-full m-auto items-center justify-between flex-wrap">
                <div className="hero__info flex items-start flex-col gap-5">
                    <h1 className="hero__info--title">
                        {t("heroTitle1")}{" "}
                        <span className="base">Elom Solutions</span> ,{" "}
                        {t("heroTitle2")}
                    </h1>
                    <p className="hero__info--desc">{t("heroDesc")}</p>
                    <button className="hero__info--btn">{t("readMore")}</button>
                </div>
                <div className="hero__img">
                    <motion.img
                        animate={{ translateY: [-15, 15, -15] }}
                        transition={{ repeat: Infinity, duration: 5 }}
                        src={heroImg}
                        alt="heroImg"
                    />
                </div>
            </div>
        </div>
    );
}

export default MainSection;
