import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import './App.css';
import {MapContainer, TileLayer, GeoJSON } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import locations from './locations.json';
import markerIconx from './images/marker-icon-2x.png'
import markerIcon from './images/marker-icon.png'
import markerShadow from './images/marker-shadow.png'

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIconx,
  iconUrl: markerIcon,
  shadowUrl: markerShadow
});


// const App = React.forwardRef( (props, ref) => {

//   useEffect(() => {
//     // const { current = {} } = ref;
//     // const { leaflelement: map } = current;

//     // if ( !map ) return;

//     // const locationsGeoJSon = new L.GeoJSON(locations);    
//     // locationsGeoJSon.addTo(map);
//     console.log(ref)

//   }, [ref])

//   return (
//     <div className="App">
//       <MapContainer ref={ref} center={[0, 0]} zoom={4}>
//       <TileLayer
//         url="https://api.mapbox.com/styles/v1/celia77940/ckmkla6p53ilr17qvfufknz3v/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY2VsaWE3Nzk0MCIsImEiOiJja21rbHZvejkxMmFwMnZwZnNmOXJmeGkyIn0.QQxS5yjCx08qO4ZCGp6u8A"
//         attribution="Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>"
//       />
//       </MapContainer>
//     </div>
//   );
// })

function App() {
  const [mapRef, setMapRef] = useState(useRef());
  // const mapRef = useRef();

  useEffect(() => {
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;

    // if ( !map ) return;

    // const locationsGeoJSon = new L.GeoJSON(locations);    
    // locationsGeoJSon.addTo(map);
    if (map !== undefined){
      console.log(mapRef)
      console.log(map)
    }

  }, [mapRef])

  return (
    <div className="App">
      {/* <MapContainer whenCreated={mapInstance => {mapRef.current = mapInstance}} center={[45.90828602556521, 6.120929718017578 ]} zoom={10}> */}
      <MapContainer whenCreated={mapInstance => setMapRef(mapRef.current = mapInstance)} center={[45.90828602556521, 6.120929718017578 ]} zoom={10}>
      <TileLayer
        url="https://api.mapbox.com/styles/v1/celia77940/ckmkla6p53ilr17qvfufknz3v/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY2VsaWE3Nzk0MCIsImEiOiJja21rbHZvejkxMmFwMnZwZnNmOXJmeGkyIn0.QQxS5yjCx08qO4ZCGp6u8A"
        attribution="Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>"
      />
      {/* <GeoJSON ref={mapRef}></GeoJSON>      */}
      </MapContainer>
    </div>
  );
}

export default App;