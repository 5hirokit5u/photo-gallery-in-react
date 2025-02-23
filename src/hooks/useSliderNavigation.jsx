import { useState, useCallback } from "react";

const useSliderNavigation = (totalSlides) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, [totalSlides]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
    }, [totalSlides]);

    return { currentIndex, setCurrentIndex, isTransitioning, setIsTransitioning, nextSlide, prevSlide };
};

export default useSliderNavigation;