/* eslint-disable react/prop-types */
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

import './photo-modal-image.styles.css'
import PhotoModalSlider from "../photo-modal-slider/photo-modal-slider.component";

const ModalImage = ({ selectedPhoto, onPrevious, onNext, onClose, photosInSameGroup, onPhotoSelect }) => {

    return (
        <div 
            className="modal-context" 
            onClick={(e) => e.stopPropagation()}
        >
            <div className="modal-image-container" >
                <div className="modal-image">
                    <img src={selectedPhoto.url} alt="Selected" />
                </div>
            </div>
            <PhotoModalSlider 
                selectedPhoto={selectedPhoto}
                onPhotoSelect={onPhotoSelect}
                photosInSameGroup={photosInSameGroup}
                onPrevious={onPrevious}
                onNext={onNext}
            />
            <button 
                onClick={onPrevious} 
                className='modal-button button-previous'
            ><FaAngleLeft/></button>
             <button 
                onClick={onNext}
                className="modal-button button-next"
            ><FaAngleRight/></button>
            <button onClick={onClose} className='modal-button button-close'><IoClose /></button>
        </div>
    )
}

export default ModalImage