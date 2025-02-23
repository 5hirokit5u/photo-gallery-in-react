/* eslint-disable react/prop-types */
import { useState, useMemo, useEffect } from 'react'
import { motion } from "framer-motion";

import PhotoModal from '../photo-modal-container/photo-modal-container.component';
import './photo-gallery-grid-styles.css';

const GalleryGrid = ({ filteredPhotos, selectedCountry }) => {
    const [hoveredIndex, setHoveredIndex] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    //changing the grid outline on load
    const photoSpans = useMemo(() => 
        filteredPhotos.map(() => Math.ceil(Math.random() * 3)), 
    [filteredPhotos]);

    // Close modal when country changes
    useEffect(() => {
        setSelectedPhoto(null);  
    }, [selectedCountry]);

    //on modal close reset the selected photo as well as the hover state
    const handleCloseModal = () => {
        setSelectedPhoto(null);
        setHoveredIndex(null);  // Reset the hover state when the photo is closed
    };


    return (
        <div className="gallery-container">
            <div className={`masonry-grid ${selectedPhoto ? "modal-active": ""}`}
            >
                {filteredPhotos.map((photo, index)=>(
                    <motion.div
                        key={photo.id}
                        className="masonry-grid-item"
                        style={{backgroundImage: `url(${photo.url})`}}
                        data-span={photoSpans[index]}
                        onClick={() => setSelectedPhoto(photo)}
                        onMouseEnter={() => setHoveredIndex(photo.id)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 1, ease: "easeOut" }}
                    >
                        {hoveredIndex === photo.id && 
                            <div className='masonry-grid-item-overlay muted-glass'>
                                <h2>{photo.place}</h2>
                            </div>
                        }  
                    </motion.div>
                ))}      
            </div>
            {selectedPhoto && (
                <PhotoModal
                    selectedPhoto={selectedPhoto}
                    setSelectedPhoto={setSelectedPhoto}
                    selectedCountry={selectedCountry}
                    onClose={handleCloseModal}  // Close the photo and reset hover state
                    filteredPhotos={filteredPhotos}
                />
            )}
        </div>  
    );
  };

  export default GalleryGrid;
