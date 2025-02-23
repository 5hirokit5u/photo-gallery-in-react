/* eslint-disable react/prop-types */
import { useRef, useEffect } from "react";

import './photo-modal-slider.styles.css'

const PhotoModalSlider = ({ selectedPhoto, photosInSameGroup, onPhotoSelect }) => {
    const sliderRef = useRef(null);
    
    useEffect(() => {
        if (sliderRef.current && selectedPhoto) {
            const activeElement = sliderRef.current.querySelector(".item-active");
            if (activeElement) {
                activeElement.scrollIntoView({ behavior: "smooth", inline: "center" });
            }
        }
    }, [selectedPhoto]); // Runs when selectedPhoto changes

    return (
        <div className="photo-slider" ref={sliderRef}>
            {photosInSameGroup.length > 0 ? (photosInSameGroup.map((photo) => (
            <div 
                key={photo.id} 
                className={`photo-slider-item ${photo.id === selectedPhoto.id ? "item-active" : ""}`}
            >
                <img 
                src={photo.url} 
                alt={photo.title} 
                onClick={(e) => {
                e.stopPropagation(); // Prevent modal from closing
                onPhotoSelect(photo);
                }} 
            />
            </div>
            ))
            ) : <div className="blank-img"></div>}
    </div>
    )
}

export default PhotoModalSlider