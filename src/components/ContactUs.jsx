import React from "react";
import { FaRegEnvelopeOpen } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import ContactForm from "./ContactForm";

function ContactUs() {
    return (
        <div className="contactUs" id="contact">
            <div className="container">
                <div className="contactUs__wrapper">
                    <div className="flex items-start justify-between gap-7 md:gap-0 flex-wrap">
                        <div className="contactUs__info sm:w-full md:w-1/2">
                            <h2
                                data-aos="fade-up-right"
                                data-aos-delay="100"
                                className="contactUs__info--title"
                            >
                                To make requests for further information,
                                contact us
                            </h2>
                            <div
                                data-aos="fade-up-right"
                                data-aos-delay="300"
                                className="contactUs__info--item"
                            >
                                <div className="contactUs__info--item--icon">
                                    <FiPhoneCall />
                                </div>
                                <div className="contactUs__info--item--text">
                                    <h2>Contact Number</h2>
                                    <p>+00(1) 123 456 7890</p>
                                </div>
                            </div>
                            <div
                                data-aos="fade-up-right"
                                data-aos-delay="400"
                                className="contactUs__info--item"
                            >
                                <div className="contactUs__info--item--icon">
                                    <FaRegEnvelopeOpen />
                                </div>
                                <div className="contactUs__info--item--text">
                                    <h2>Our Mail</h2>
                                    <p>infotechmax@ourmail.com</p>
                                </div>
                            </div>
                            <div
                                data-aos="fade-up-right"
                                data-aos-delay="500"
                                className="contactUs__info--item"
                            >
                                <div className="contactUs__info--item--icon">
                                    <GoLocation />
                                </div>
                                <div className="contactUs__info--item--text">
                                    <h2>Our Location</h2>
                                    <p>
                                        New ipsum dolor amet, eiusmod
                                        adipisicing 147 New Yors, NY Adipisicing
                                        123
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-delay="350"
                            className="contactUs__form w-full sm:w-full md:w-1/2"
                        >
                            <div className="baseTitle mb-10">
                                <h2
                                    data-subtitle="send us message"
                                    className="title max-w-sm m-auto !font-medium"
                                >
                                    How May We Help You!
                                </h2>
                            </div>

                            {/* contact send form */}
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
