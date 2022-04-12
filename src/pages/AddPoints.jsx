/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function AddPoints() {
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const [positionName, setPositionName] = useState('');
  const [geoJSON, setGeoJSON] = useState([]);
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

  const sendPositions = (e) => {
    e.preventDefault();
    const newPoints = {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [+longitude, +latitude],
      },
      properties: {
        pointName: positionName,
      },
    };
    setGeoJSON([...geoJSON, newPoints]);
    const { features } = JSON.parse(localStorage.getItem('featureCollection'));
    features.push(newPoints);
    localStorage.setItem('featureCollection', JSON.stringify({ type: 'FeatureCollection', features }));
    setIsMapDisabled(false);
  };

  return (
    <div className="container">
      <form>
        <div className="mb-3">
          <label htmlFor="longitude" className="form-label">Longitude</label>
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
          <label htmlFor="latitude" className="form-label">Latitude</label>
          <input
            type="text"
            className="form-control"
            id="latitude"
            name="latitude-input"
            placeholder="Insira uma latitude"
            onChange={(e) => setLatitude(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name-position" className="form-label">Dê um nome a posição</label>
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
          onClick={(e) => sendPositions(e)}
        >
          Cadastrar posição
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

export default AddPoints;
