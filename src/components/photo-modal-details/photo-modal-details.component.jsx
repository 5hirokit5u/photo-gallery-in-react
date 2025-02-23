/* eslint-disable react/prop-types */
import MapboxComponent from "../photo-modal-mapbox/photo-modal-mapbox.component";

import './photo-modal-details.styles.css';

const ModalDetails = ({selectedPhoto }) => {
  
    return (
      <div className="modal-details-container">
            <div className="map-container">
              <MapboxComponent selectedPhoto={selectedPhoto}/>
            </div>
            <div className="info-container">
              <div className="name-and-links">
                <div>
                  <h2>{selectedPhoto.place}</h2>
                  <h4>{selectedPhoto.prefecture} | {selectedPhoto.region}</h4>
                </div>
                <a href={selectedPhoto.googlemaplink} target="_blank" title="Check out google maps for more location info"><div className="googlemaps-link"></div></a>
              </div>
              <div className="details">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ullam. Nam nostrum pariatur quibusdam praesentium, excepturi neque ab recusandae ex velit nihil, architecto minima, similique voluptate officia corporis harum tempore. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, dolor ratione iusto adipisci magni laudantium deserunt et dignissimos nostrum debitis, distinctio tempora reprehenderit soluta atque voluptatem! Saepe eius dicta illo!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi doloremque non et itaque inventore officia voluptatibus dicta quos amet perferendis eius sint, molestias, numquam possimus ducimus. Aliquid placeat dolor ullam.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, doloribus. Ea voluptatibus voluptatem est quibusdam, placeat vel magni ullam quod sint veritatis repellat, officia maiores perspiciatis pariatur repellendus non facilis.</p>
              </div>
            </div>                
      </div>   
    );
  };
  
  export default ModalDetails;
