import React from "react";
import { motion } from "framer-motion";
import {
    aboutImgLoop,
    aboutImg,
    aboutIcon1,
    aboutIcon2,
    aboutIcon3,
    aboutIcon4,
} from "../assets";
function AboutUs() {
    return (
        <div className="aboutUs" id="aboutUs">
            <div className="container">
                <div className="flex justify-between flex-wrap gap-4">
                    <div className="aboutUs__img">
                        <img
                            data-aos="fade-up"
                            data-aos-easing="ease-in-sine"
                            src={aboutImg}
                            alt="aboutImg"
                            className="aboutImg"
                        />
                        <motion.img
                            initial={{ translateX: "-50%", translateY: "-50%" }}
                            animate={{
                                rotate: 360,
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 5,
                                ease: "linear",
                            }}
                            src={aboutImgLoop}
                            alt="imgAnimation"
                            className="imgAnimation"
                        />
                    </div>
                    <div className="aboutUs__content">
                        <div className="baseTitle">
                            <h2 data-subtitle="who we are" className="title">
                                We provide truly prominent IT solutions for your
                                success
                            </h2>
                        </div>
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                            <div
                                data-aos="fade-right"
                                className="aboutUs__content--item"
                            >
                                <div className="icon">
                                    <img src={aboutIcon1} alt="aboutIcon" />
                                </div>
                                <div>
                                    <h2 className="itemTitle">Expert Team</h2>
                                    <p className="itemDesc">
                                        Accelerate innovation with world-class
                                        tech teams
                                    </p>
                                </div>
                            </div>
                            <div
                                data-aos="fade-left"
                                className="aboutUs__content--item"
                            >
                                <div className="icon">
                                    <img src={aboutIcon2} alt="aboutIcon" />
                                </div>
                                <div>
                                    <h2 className="itemTitle">Expert Team</h2>
                                    <p className="itemDesc">
                                        Accelerate innovation with world-class
                                        tech teams
                                    </p>
                                </div>
                            </div>
                            <div
                                data-aos="fade-right"
                                className="aboutUs__content--item"
                            >
                                <div className="icon">
                                    <img src={aboutIcon3} alt="aboutIcon" />
                                </div>
                                <div>
                                    <h2 className="itemTitle">Expert Team</h2>
                                    <p className="itemDesc">
                                        Accelerate innovation with world-class
                                        tech teams
                                    </p>
                                </div>
                            </div>
                            <div
                                data-aos="fade-left"
                                className="aboutUs__content--item"
                            >
                                <div className="icon">
                                    <img src={aboutIcon4} alt="aboutIcon" />
                                </div>
                                <div>
                                    <h2 className="itemTitle">Expert Team</h2>
                                    <p className="itemDesc">
                                        Accelerate innovation with world-class
                                        tech teams
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
