/* eslint-disable react/prop-types */
import './intro-slider-text-overlay.styles.css'

import { IoEnterOutline } from "react-icons/io5";
import { useNavigate } from "react-router";

import Dots from '../dots-nav/dots-nav.component'
import SliderControls from '../intro-slider-controls/intro-slider-controls.component';

const TextOverlay = ({ currentIndex, setCurrentIndex, isTransitioning, setIsTransitioning, slides, nextSlide, prevSlide  }) => {

    //Navigating after animation finishes
    const navigate = useNavigate();

    const handleTransitionEnd = () => {
        if (isTransitioning) { 
            const selectedCountry = slides[currentIndex].country
            const countryLocation = slides[currentIndex].location

            navigate(`/${selectedCountry.toLowerCase().replace(/\s+/g, "-")}/photogallery`, { 
                state: {selectedCountry, countryLocation }
            });
        }
    }

    const handleClick = () => {
        setIsTransitioning(true)
    }

    return (
        <div 
            className={`text-overlay ${isTransitioning ? "expand" : ""}`}
            onTransitionEnd={handleTransitionEnd}
        >
            <Dots 
                currentIndex={currentIndex} 
                setCurrentIndex={setCurrentIndex} 
                totalSlides={slides.length}
            />
            <div className="title-container">
                <span>{slides[currentIndex].country}</span>
            </div>                            
            <button 
                className="explore-btn"
                onClick={handleClick}
            >
                <IoEnterOutline />
            </button>
             {/* Reusable Navigation Controls */}
             <SliderControls 
                nextSlide={nextSlide} 
                prevSlide={prevSlide}
            />
        </div>
    )
}

export default TextOverlay