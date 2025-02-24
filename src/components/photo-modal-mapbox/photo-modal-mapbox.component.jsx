/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import { NavigationControl } from 'mapbox-gl';
import { useTheme } from '../../context/theme-context';

import 'mapbox-gl/dist/mapbox-gl.css';
import './photo-modal-mapbox.styles.css'

const MapboxComponent = ({ selectedPhoto }) => {
  const mapContainerRef = useRef(null); // Map container reference
  const mapRef = useRef(null); // Persistent map instance
  const markerRef = useRef(null); // Persistent marker instance
  const customMarkerRef = useRef(null); // Persistent custom marker instance

  const { theme } = useTheme();

  // Initialize the Mapbox map
  useEffect(() => {
    if (!mapRef.current) {
      mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: theme === 'dark'
      ? 'mapbox://styles/rakki754/cm6ak1ojh000b01sghvlu8ax3'
      : 'mapbox://styles/mapbox/streets-v11',
      // style: 'mapbox://styles/mapbox/dark-v10',
      center: [0,0], // Default center
      zoom: 3,
      touchZoomRotate: false,
    });

    mapRef.current.addControl(new NavigationControl({ showZoom: true, showCompass: false }), 'top-right');
  }
  }, [theme]);

  useEffect(() => {
    if (mapRef.current) {
      const map = mapRef.current;
      map.setStyle(
        theme === 'dark'
          ? 'mapbox://styles/rakki754/cm6ak1ojh000b01sghvlu8ax3'
          : 'mapbox://styles/mapbox/streets-v11',// Your custom light theme style (or a different style)
      );
    }
  }, [theme]); 


  // Handle marker and map behavior when `selectedPhoto` changes
  useEffect(() => {
    if (!mapRef.current || !selectedPhoto) return;

    const map = mapRef.current;

    // Remove existing markers if they exist
    if (markerRef.current) {
      markerRef.current.remove();
    }
    if (customMarkerRef.current) {
      customMarkerRef.current.remove();
    }


    if (selectedPhoto) {
      // Add the default Mapbox marker
      // markerRef.current = new mapboxgl.Marker()
      //   .setLngLat(selectedPhoto.location)
      //   .addTo(map);

      // Add the custom marker
      customMarkerRef.current = new mapboxgl.Marker({
        element: createCustomMarker(selectedPhoto),
        offset: [5, -10], // Adjust offset to place the marker correctly
      })
        .setLngLat(selectedPhoto.location)
        .addTo(map);

      // Fly to the photo's location
      map.flyTo({
        center: selectedPhoto.location,
        zoom: 6,
        essential:true
      });
    }
  }, [selectedPhoto]);

  const createCustomMarker = (photo) => {
    const markerElement = document.createElement('div');
    markerElement.className = 'custom-marker';
    markerElement.style.width = '55px';  // Custom width
    markerElement.style.height = '55px'; // Custom height
    markerElement.style.backgroundImage = 'url(/kitsu_marker.svg)'; // Image as marker
    markerElement.style.backgroundSize = 'contain'; // Ensure the image covers the marker area
    markerElement.style.backgroundRepeat = 'no-repeat';
    markerElement.style.cursor = 'pointer'; // Cursor for interaction

    if (photo.country === 'New Zealand') {
      markerElement.style.filter = 'hue-rotate(105deg)'; // Change color (example)
    } else {
      markerElement.style.filter = 'none'; // Use original colors
    }
    return markerElement;
  };
  
  return (
    <div ref={mapContainerRef} style={{ width: '100%', height: '100%' }} />
  );
};


export default MapboxComponent;
