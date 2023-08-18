import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function MapLocationPicker() {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleMapClick = (event) => {
    setSelectedLocation(event.latlng);
  };

  return (
    <div>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={15} // Adjust this value
        style={{ height: '400px', width: '100%' }}
        onClick={handleMapClick}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {selectedLocation && (
          <Marker position={selectedLocation}>
            <Popup>You selected this location</Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
}

export default MapLocationPicker;
