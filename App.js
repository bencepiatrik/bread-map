import './App.css';
//import ReactMapGL from "react-map-gl"
import { useState } from 'react';


let startLat, startLong;

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  const crd = pos.coords;
  startLat = crd.latitude;
  startLong = crd.longitude;
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);

function App() {
  const [viewport, setviewport] = useState({
    latitude: startLat,
    longitude: startLong
  })


  return (
    <div>aaa
      {/* <ReactMapGL> markers</ReactMapGL> */}
    </div>
  );
}

export default App;
