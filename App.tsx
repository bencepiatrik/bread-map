import React from 'react';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import './App.css';
import teslaData from "./data/tesla.json";

function App() {

  const filteredData = teslaData.filter(tesla => tesla.address.country == "Italy")

  return (
    <MapContainer center={[51.505, -0.09]} zoom={4} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {filteredData.map(tesla => (
        <Marker
          key={tesla.id}
          position={[tesla.gps.latitude, tesla.gps.longitude]}
        >
          <Popup
            position={[tesla.gps.latitude, tesla.gps.longitude]}
          >
            <div>
              <h2>{"Name: " + [tesla.name]}</h2>
              <p>{"Status: " + [tesla.status]}</p>
              <p>{"Number of chargers: " + [tesla.stallCount]}</p>
            </div>
          </Popup>
        </Marker>
      ))}

    </MapContainer >
  );
}

export default App;
