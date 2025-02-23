/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

import ModalImage from "../photo-modal-image/photo-modal-image.component";
import ModalDetails from "../photo-modal-details/photo-modal-details.component";


import './photo-modal-container.styles.css'

const PhotoModal = ({ selectedPhoto, setSelectedPhoto, onClose, filteredPhotos}) => {

    if (!selectedPhoto) return null;
    // Get all photos from the same group
    const photosInSameGroup = filteredPhotos.filter((photo) => photo.group === selectedPhoto.group);
    const currentIndex = photosInSameGroup.findIndex(photo => photo.id === selectedPhoto.id);

    // Compute previous and next photos directly in the modal
    const previousPhoto = photosInSameGroup[(currentIndex - 1 + photosInSameGroup.length) % photosInSameGroup.length];
    const nextPhoto = photosInSameGroup[(currentIndex + 1) % photosInSameGroup.length];

    return (
        <motion.div 
            className="modal-container muted-glass" 
            onClick={onClose}
            initial={{ opacity: 0 }}  // Start with opacity 0
            animate={{ opacity: 1 }}  // Fade in to full opacity
            transition={{ duration: 0.5 }}  // Duration of the fade-in
        >   
            <ModalImage 
                selectedPhoto={selectedPhoto} 
                onPrevious={() => setSelectedPhoto(previousPhoto)}
                onNext={() => setSelectedPhoto(nextPhoto)}
                onClose={onClose}
                onPhotoSelect={setSelectedPhoto} 
                photosInSameGroup={photosInSameGroup}
            />
            <ModalDetails 
                selectedPhoto={selectedPhoto}
            />
        </motion.div>
    )
}

export default PhotoModal