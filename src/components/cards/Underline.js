"use client"
import React, { useEffect, useRef, useState } from 'react';
import "./Underline.scss";

const Underline = () => {
    const underlineRef = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setInView(entry.isIntersecting),
            { threshold: 0.1 }
        );

        if (underlineRef.current) {
            observer.observe(underlineRef.current);
        }

        return () => {
            if (underlineRef.current) observer.unobserve(underlineRef.current);
        };
    }, []);

    return (
        <div className="underline-wrapper" ref={underlineRef}>
            <div className='wrap-page'>
                <div className={`underline-line ${inView ? 'animate' : ''}`} />
            </div>
        </div>
    );
};

export default Underline;
