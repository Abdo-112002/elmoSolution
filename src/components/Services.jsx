import React from "react";
import { services4, services3, services2, services1 } from "../assets";

function Services() {
    return (
        <section className="services" id="services">
            <div className="container">
                <div className="baseTitle mb-10">
                    <h2
                        data-subtitle="what we offer"
                        className="title max-w-sm m-auto"
                    >
                        Efficiency through software and automation.
                    </h2>
                </div>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    <div
                        data-aos="fade-up"
                        data-aos-delay="100"
                        className="services__item"
                    >
                        <div className="services__item--icon">
                            <img src={services1} alt="services icon" />
                        </div>
                        <h3 className="services__item--title">web design</h3>
                        <p className="services__item--desc">
                            Accelerate innovation with world-class tech teams
                            We’ll match you to an entire remote team .
                        </p>
                    </div>
                    <div
                        data-aos="fade-up"
                        data-aos-delay="200"
                        className="services__item"
                    >
                        <div className="services__item--icon">
                            <img src={services2} alt="services icon" />
                        </div>
                        <h3 className="services__item--title">softWare apps</h3>
                        <p className="services__item--desc">
                            Accelerate innovation with world-class tech teams
                            We’ll match you to an entire remote team .
                        </p>
                    </div>
                    <div
                        data-aos="fade-up"
                        data-aos-delay="300"
                        className="services__item"
                    >
                        <div className="services__item--icon">
                            <img src={services3} alt="services icon" />
                        </div>
                        <h3 className="services__item--title">
                            softWare solutions
                        </h3>
                        <p className="services__item--desc">
                            Accelerate innovation with world-class tech teams
                            We’ll match you to an entire remote team .
                        </p>
                    </div>
                    <div
                        data-aos="fade-up"
                        data-aos-delay="400"
                        className="services__item"
                    >
                        <div className="services__item--icon">
                            <img src={services4} alt="services icon" />
                        </div>
                        <h3 className="services__item--title">automation</h3>
                        <p className="services__item--desc">
                            Accelerate innovation with world-class tech teams
                            We’ll match you to an entire remote team .
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
