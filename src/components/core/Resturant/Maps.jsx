import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

export default function Maps() {
  const position = [12.234, 77.1356242];

  return (
    <>
        <div style={{ width: "50vw", height: "50vh" }}>
          <MapContainer style={{ width: "50vw", height: "100%" }} center={position} zoom={13} scrollWheelZoom={true}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* <Marker position={position}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker> */}
          </MapContainer>
        </div>
    </>
  );
}
