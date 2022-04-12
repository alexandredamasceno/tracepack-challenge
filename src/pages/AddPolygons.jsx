/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function AddPolygons() {
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const [positionName, setPositionName] = useState('');
  const [geoJSON, setGeoJSON] = useState([]);
  const [coordinates, setCoordinates] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isMapDisabled, setIsMapDisabled] = useState(true);

  // Instancia o useNavigate
  const navigate = useNavigate();

  useEffect(() => {
    if (!longitude || !latitude) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [longitude, latitude]);

  const setIntoCoordinatesArray = (e) => {
    e.preventDefault();
    const newCoordinates = [+longitude, +latitude];
    setCoordinates([...coordinates, newCoordinates]);
  };

  const setPositionsIntoGeoJson = (e) => {
    e.preventDefault();
    const newPolygons = {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [
          coordinates,
        ],
      },
      properties: {
        pointName: positionName,
      },
    };
    setGeoJSON([...geoJSON, newPolygons]);
    const { features } = JSON.parse(localStorage.getItem('featureCollection'));
    features.push(newPolygons);
    localStorage.setItem('featureCollection', JSON.stringify({ type: 'FeatureCollection', features }));
    setIsMapDisabled(false);
  };

  return (
    <div className="container">
      <form>
        <div className="mb-3">
          <h4>Adicione as posições do polígono</h4>
          <label htmlFor="longitude" className="form-label">
            Longitude
          </label>
          <input
            type="text"
            className="form-control"
            id="longitude"
            name="longitude-input"
            placeholder="Insira uma longitude"
            onChange={(e) => setLongitude(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="latitude" className="form-label">
            Latitude
          </label>
          <input
            type="text"
            className="form-control"
            id="latitude"
            name="latitude-input"
            placeholder="Insira uma latitude"
            onChange={(e) => setLatitude(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-success"
          disabled={isDisabled}
          onClick={(e) => setIntoCoordinatesArray(e)}
        >
          Cadastrar posição
        </button>
      </form>
      <hr />
      <form>
        <div className="mb-3">
          <label htmlFor="name-position" className="form-label">
            Dê um nome a sua feature
          </label>
          <input
            type="text"
            className="form-control"
            id="name-position"
            name="position"
            placeholder="Insira um nome para a posição"
            onChange={(e) => setPositionName(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-success"
          disabled={isDisabled}
          onClick={(e) => setPositionsIntoGeoJson(e)}
        >
          Cadastrar coordenada
        </button>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={isMapDisabled}
          onClick={() => navigate('/home')}
        >
          Ver no mapa
        </button>
      </form>
    </div>
  );
}

export default AddPolygons;
