// import PropTypes from "prop-types";
import { Outlet, useLocation, useNavigate, useParams } from 'react-router';
import { useState, useEffect } from "react";
import { useLanguage } from '../../context/language-context';

import GalleryGrid from '../photo-gallery-grid/photo-gallery-grid-component';
import CountryFilter from '../dashboard-country-filter/dashboard-country-filter.component';

import './dashboard.styles.css'

import photos from '../../data/photos.json'

const Dashboard = () => {
    const { language } = useLanguage();
    const { country } = useParams() 
    const navigate = useNavigate()
    const location = useLocation()
    const { selectedCountry: initialCountry} = location.state || {};
    const [selectedCountry, setSelectedCountry] = useState(initialCountry || "Japan");


    useEffect(() => {
      // Update the URL when selectedCountry changes
      if (country !== selectedCountry) {
        navigate(`/${selectedCountry.toLowerCase().replace(/\s+/g, "-")}/photogallery`);
    }
}, [selectedCountry, country, navigate]);

    const handleCountryChange = (newCountry) => {
      setSelectedCountry(newCountry);
    };

    const filteredPhotos = photos.filter((photo) => photo.countryGroup === selectedCountry )

    return (
        <div className="dashboard-container"
        >
          <Outlet />
          <CountryFilter 
            selectedCountry={selectedCountry} 
            onSelect={handleCountryChange}
            language={language}
          />
          <GalleryGrid 
            selectedCountry={selectedCountry}
            filteredPhotos={filteredPhotos}
          />
          <div className='footer'> © 2025 5HIROKIT5U </div>
        </div>
    );
  };

  
  export default Dashboard;
