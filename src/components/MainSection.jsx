import React from "react";
import { motion } from "framer-motion";
import { heroImg } from "../assets";
import { useTranslation } from "react-i18next";
import { AnimatedText } from "./../reUseComponents";

function MainSection() {
    const [t] = useTranslation();
    return (
        <div className="hero overflow-hidden">
            <div className="flex w-[95%] h-full m-auto items-center justify-between flex-wrap">
                <div className="hero__info sm:w-full lg:w-1/2 flex flex-col items-start self-end md:self-center gap-5">
                    <AnimatedText
                        className="hero__info--title !text-6xl !text-left"
                        text={`${t("heroTitle1")} Elom Solutions${t(
                            "heroTitle2"
                        )}`}
                    />
                    <p className="hero__info--desc !font-medium">
                        {t("heroDesc")}
                    </p>
                    <button className="hero__info--btn">{t("readMore")}</button>
                </div>
                <div className="hero__img w-1/2">
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
