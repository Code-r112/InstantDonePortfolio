import React from 'react';
import './Brands.css';

const Brands = () => {
    return (
        <section className="brands">
            <div className="container">
                <div className="brands__header">
                    <span className="section-label">Our Clients</span>
                </div>
                <div className="brands__carousel">
                    <div className="brands__track">
                        {/* Duplicate Key Items for endless loop */}
                        <div className="brand-item">facebook</div>
                        <div className="brand-item">Google</div>
                        <div className="brand-item">logitech</div>
                        <div className="brand-item">LinkedIn</div>
                        <div className="brand-item">PHILIPS</div>

                        {/* Clones */}
                        <div className="brand-item">facebook</div>
                        <div className="brand-item">Google</div>
                        <div className="brand-item">logitech</div>
                        <div className="brand-item">LinkedIn</div>
                        <div className="brand-item">PHILIPS</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Brands;
