import React from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import '../App.css'
import greenImageIcon from '../images/leaf-green.png'
import greenIconShadow from '../images/leaf-shadow.png';

const greenIcon = L.icon({
  iconUrl: greenImageIcon,
  shadowUrl: greenIconShadow,

  iconSize: [38, 95],
  shadowSize: [50, 64],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
});

function Map() {
  return (
    <MapContainer className="map" center={[-6.493820947466801, -43.703956604003906]} zoom={13}>
      <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-6.493820947466801, -43.703956604003906]} icon={greenIcon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>  
  );
}

export default Map;
