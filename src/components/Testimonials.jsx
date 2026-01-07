import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const testimonialsData = [
    {
        id: 1,
        quote: "“The Bureau impressive expertise and strategy advisory were crucial to achieving our goals. The experience was great in all dimensions.”",
        name: "Xavier Kim",
        position: "CEO at Pixsellz",
        avatar: "https://ui-avatars.com/api/?name=Xavier+Kim&background=random"
    },
    {
        id: 2,
        quote: "“Instant Done transformed our brand identity completely. Their attention to detail and grid-based design philosophy gave us the modern edge we needed.”",
        name: "Sarah Jenkins",
        position: "CMO at TechFlow",
        avatar: "https://ui-avatars.com/api/?name=Sarah+Jenkins&background=random"
    },
    {
        id: 3,
        quote: "“Working with this team was seamless. They understood our vision immediately and delivered a product that exceeded our expectations in record time.”",
        name: "Marcus Chen",
        position: "Founder of StartUpX",
        avatar: "https://ui-avatars.com/api/?name=Marcus+Chen&background=random"
    }
];

const Counter = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime = null;
        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = currentTime - startTime;
            if (progress < duration) {
                setCount(Math.min(Math.floor((progress / duration) * end), end));
                requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };
        requestAnimationFrame(animate);
    }, [end, duration]);

    return <span>{count}</span>;
};

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    const handleNext = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
            setIsAnimating(false);
        }, 300); // 300ms fade out before switch
    };

    const currentTestimonial = testimonialsData[currentIndex];

    return (
        <section className="testimonials">
            <div className="container">
                <div className="testimonials__header">
                    <span className="text-serif italic-label">Testimonials</span>
                    <h2 className="testimonials__title">Clients about us</h2>
                </div>

                <div className={`testimonials__content ${isAnimating ? 'fade-out' : 'fade-in'} `}>
                    <blockquote className="quote">
                        {currentTestimonial.quote}
                    </blockquote>

                    <div className="author">
                        <div className="author__info">
                            <h4>{currentTestimonial.name}</h4>
                            <p>{currentTestimonial.position}</p>
                        </div>
                    </div>
                </div>

                {/* Floating Navigation Button */}
                <button className="next-testimonial-btn" onClick={handleNext} aria-label="Next Testimonial">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </button>

                <div className="stats-grid">
                    <div className="stat-item">
                        <h3><Counter end={6} /></h3>
                        <p>years</p>
                    </div>
                    <div className="stat-item">
                        <h3><Counter end={85} /></h3>
                        <p>clients</p>
                    </div>
                    <div className="stat-item">
                        <h3><Counter end={359} /></h3>
                        <p>projects</p>
                    </div>
                    <div className="stat-item">
                        <h3><Counter end={7} /></h3>
                        <p>awards</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
