import { useState, useEffect } from "react";

import './intro-slider.styles.css';
import slides from '../../data/slides.json'
import TextOverlay from "../intro-slider-text-overlay/intro-slider-text-overlay.component";
import useSliderNavigation from '../../hooks/useSliderNavigation'

const Slider = () => {  
    const { currentIndex, setCurrentIndex, isTransitioning, setIsTransitioning, nextSlide, prevSlide } = useSliderNavigation(slides.length);
    const [isHovered, setIsHovered] = useState(false);

    //Automatic slider movement
    useEffect(() => {
        if (isHovered) return;
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, [currentIndex, isHovered, isTransitioning, nextSlide]);

    return (
        <div
            className={`slider-container ${isTransitioning ? 'fade-out' : "" }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="slider">
                {slides.map((slide, index) => (
                    <div 
                        key={index}
                        className={`slides ${index === currentIndex ? "active" : ""}`}
                        style={{
                            transform: `translateX(${(index - currentIndex) * 100}%)`,
                            opacity: index === currentIndex ? 1 : 0,
                        }}
                    >
                        <img src={slide.url} alt={`Slide ${index + 1}`} loading="lazy"/>
                        
                    </div>
                ))}
                <TextOverlay 
                    currentIndex={currentIndex} 
                    setCurrentIndex={setCurrentIndex} 
                    isTransitioning={isTransitioning} 
                    setIsTransitioning={setIsTransitioning}
                    slides={slides}
                    nextSlide={nextSlide}
                    prevSlide={prevSlide}
                />
            </div>
        </div>
    )
}

export default Slider