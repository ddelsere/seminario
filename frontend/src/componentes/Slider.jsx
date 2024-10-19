import React, { useState } from 'react';
import Slide1 from './slides/Slide1';
import Slide2 from './slides/Slide2';
import Slide3 from './slides/Slide3';
import Slide4 from './slides/Slide4';

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [
        <Slide1/>,
        <Slide2/>,
        <Slide3/>,
        <Slide4/>
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    return (
        <div>
            <h2>{slides[currentIndex]}</h2>
            <button onClick={prevSlide}>Anterior</button>
            <button onClick={nextSlide}>Siguiente</button>
        </div>
    );
};

export default Slider;