/* eslint-disable react/prop-types */
import MapboxComponent from "../photo-modal-mapbox/photo-modal-mapbox.component";
import { useLanguage } from "../../context/language-context";

import './photo-modal-details.styles.css';
import translations from '../../data/translations.json'

const ModalDetails = ({ selectedPhoto }) => {
  const { language } = useLanguage();
  
    return (
      <div className="modal-details-container">
            <div className="map-container">
              <MapboxComponent selectedPhoto={selectedPhoto}/>
            </div>
            <div className="info-container">
              <div className="name-and-links">
                <div>
                  <h2>{translations[selectedPhoto.id][language].place}</h2>
                  <h4>{translations[selectedPhoto.id][language].prefecture} | {translations[selectedPhoto.id][language].region}</h4>
                </div>
                <a href={selectedPhoto.googlemaplink} target="_blank" title="Check out google maps for more location info"><div className="googlemaps-link"></div></a>
              </div>
              <div className="details">
                <p>{translations[selectedPhoto.id][language].description}</p>
              </div>
            </div>                
      </div>   
    );
  };
  
  export default ModalDetails;
