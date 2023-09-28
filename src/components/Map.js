import React from "react";
import GoogleMapReact from 'google-map-react';
import Marker from './Marker'


const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 41.212649,
      lng: -114.209627
    },
    zoom: 8
  };


  const handleApiLoaded = (map, maps) => {
    // use map and maps objects
    console.log("Maps be Firing")
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key:"AIzaSyBfmP5yDi6mI-8XTIhwW10PuE8QfpOtnJY"}}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
>
      
        <Marker
            lat= {41.212649}
            lng= {-114.209627}
        text="PSS Home Base"
        />
      </GoogleMapReact>
    </div>
  );
}