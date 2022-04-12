import React from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { NavLink } from 'react-router-dom';
import '../App.css'
import greenImageIcon from '../images/leaf-green.png'
import greenIconShadow from '../images/leaf-shadow.png';

const greenIcon = L.icon({
  iconUrl: greenImageIcon,
  shadowUrl: greenIconShadow,

  iconSize: [38, 95],
  shadowSize: [50, 64],
  iconAnchor: [22, 94],
  shadowAnchor: [4, 62],
  popupAnchor: [-3, -76],
});


function Map() {
  const DEFAULT = [51.508742458803326, -0.1263427734375];
  // Assim que o usuário entra na aplicação eu já preparo ambiente para guardar as features
  const featureCollection = JSON.parse(localStorage.getItem('featureCollection'));
  if (!featureCollection) {
    localStorage.setItem('featureCollection', JSON.stringify({
    type: "FeatureCollection",
    features: [], 
    }))
  }

  return (
    <div>
        <div>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
              <h1>uMAP</h1>
              <div>
                <ul class="btn-group">
                  <li className="links">
                    <NavLink to="/addPoints" className="btn btn-primary">Cadastrar Posições</NavLink>
                  </li>
                  <li className="links">
                    <NavLink to="/addPolygon" className="btn btn-primary links">Cadastrar Polígonos</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <MapContainer className="map" center={DEFAULT} zoom={1.8}>
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {
          featureCollection.features.map((feature) => (
            <Marker position={[feature.geometry.coordinates[0], feature.geometry.coordinates[1]]} icon={greenIcon}>
              <Popup>
                {feature.properties.pointName}
              </Popup>
            </Marker>
          ))
        }
        </MapContainer> 
    </div>
  );
}

export default Map;
