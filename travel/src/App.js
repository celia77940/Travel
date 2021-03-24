import React, { useCallback, useEffect, useRef, useState } from "react";
import L from "leaflet";
import "./App.css";
import { MapContainer, TileLayer, GeoJSON, ZoomControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import locations from "./locations.json";
import markerIconx from "./images/marker-icon-2x.png";
import markerIcon from "./images/marker-icon.png";
import markerShadow from "./images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIconx,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

function App() {
  const useHookWithRefCallback = () => {
    const ref = useRef(null);
    const setRef = useCallback((node) => {
      if (ref.current) {
        // Make sure to cleanup any events/references added to the last instance
        console.log("en attendant que la carte se charge je suppose");
      }

      if (node) {
        // Check if a node is actually passed. Otherwise node would be null.
        // You can now do what you need to, addEventListeners, measure, etc.
        console.log("on a enfin accès à cet objet NewClass")
        console.log(node);
        setTimeout(() => {
          node.flyTo([47.637444, 6.862468], 14, {
            duration: 3,
          });
        }, 5000)
      }
      // Save a reference to the node
      ref.current = node;
    }, [ref]);

    return [setRef];
  };

  const [ref] = useHookWithRefCallback();

  return (
    <div className="App">
      <MapContainer
        whenCreated={ref}
        center={[45.90828602556521, 6.120929718017578]}
        zoom={10}
        zoomControl={false}
      >
        <TileLayer
          url="https://api.mapbox.com/styles/v1/celia77940/ckmkla6p53ilr17qvfufknz3v/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY2VsaWE3Nzk0MCIsImEiOiJja21rbHZvejkxMmFwMnZwZnNmOXJmeGkyIn0.QQxS5yjCx08qO4ZCGp6u8A"
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
        />
        <ZoomControl position="bottomright"/>
        {/*<GeoJSON ref={mapRef}></GeoJSON>*/}
      </MapContainer>
    </div>
  );
}

export default App;
