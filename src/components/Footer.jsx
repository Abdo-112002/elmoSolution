import React from "react";
import { Logo } from "../reUseComponents";
import { logoImg } from "../assets";

// icons
import { FaLinkedinIn, FaFacebookF, FaRegEnvelopeOpen } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    <div className="footer__item">
                        <div className="flex flex-col gap-4">
                            <Logo src={logoImg} />
                            <p className="footer__item--text">
                                Accelerate innovation with world-class tech
                                teams We’ll match you to an entire remote team
                                of incredible freelance talent.
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="footer__item--socialLinks">
                                    <FaLinkedinIn />
                                </div>

                                <div className="footer__item--socialLinks">
                                    <FaFacebookF />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer__item">
                        <div className="text-left">
                            <h3 className="footer__item--title font-bold capitalize text-lg mb-5">
                                Useful Links
                            </h3>
                            <ul className="footer__item--list">
                                <li>Terms & Conditions</li>
                                <li>Terms & Conditions</li>
                                <li>Terms & Conditions</li>
                                <li>Terms & Conditions</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__item">
                        <div className="text-left">
                            <h3 className="footer__item--title font-bold capitalize text-lg mb-5">
                                Our Services
                            </h3>
                            <ul className="footer__item--list">
                                <li>IT Managment</li>
                                <li>Automation</li>
                                <li>web design</li>
                                <li>web apps</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__item">
                        <div className="text-left">
                            <h3 className="font-bold capitalize text-lg mb-5 footer__item--title">
                                Contact Information
                            </h3>
                            <ul className="footer__item--list">
                                <li>
                                    <div className="list--icon">
                                        <FiPhoneCall />
                                    </div>
                                    <div>+91 458 654 528</div>
                                </li>
                                <li>
                                    <div className="list--icon">
                                        <FaRegEnvelopeOpen />
                                    </div>
                                    <div>info@example.com</div>
                                </li>
                                <li>
                                    <div className="list--icon">
                                        <GoLocation />
                                    </div>
                                    <div>60 East 65th Street, NY</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer__copyRight">
                    <span>
                        © Copyrights 2023 elom solutions All rights reserved.
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Footer;
