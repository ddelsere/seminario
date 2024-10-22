import React, { useState } from 'react';
import Slide1 from './slides/Slide1';
import Slide2 from './slides/Slide2';
import Slide3 from './slides/Slide3';
import Slide4 from './slides/Slide4';
import TutorialStyles from './estilos/TutorialStyles.css';

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [
        <Slide1 />,
        <Slide2 />,
        <Slide3 />,
        <Slide4 />
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    return (
        <div>
            <div className='slider'>
                <h2>{slides[currentIndex]}</h2>
            </div>
            <button className='prev' onClick={prevSlide}>←</button>
            <button className='next' onClick={nextSlide}>→</button>
        </div>
    );
};

export default Slider;