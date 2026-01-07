import React from 'react';
import './Services.css';

const Services = () => {
    return (
        <section className="services" id="service">
            <div className="container services__container">

                <div className="services__left">
                    <span className="text-serif italic-label">Services</span>
                    <h2 className="services__title">What we do</h2>
                    <p className="services__desc">
                        This way, we can cut out all the project management and focus just on the design processes.
                    </p>
                </div>

                <div className="services__right">
                    <ul className="services__list">
                        <li>Portfolio Websites</li>
                        <li>Custom Web Applications</li>
                        <li>Website Redesign</li>
                        <li>E-Commerce Websites</li>
                        <li>SEO & Digital Growth</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Services;
