import React, { useEffect, useState } from "react";
import GoogleMapReact from 'google-map-react';
import Marker from './Marker'


export default function SimpleMap({ zipCode }){
    // should be centering landing page on PSS HOME BASE at these coordinates
  const [center, setCenter] = useState({
      lat: 41.212649,
      lng: -114.209627
    });
// fetching the zip code
    useEffect(() => {
        if (zipCode) {
        const apiKey = "AIzaSyBfmP5yDi6mI-8XTIhwW10PuE8QfpOtnJY"
        const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${zipCode}&key=${apiKey}`
        console.log(geocodeUrl)
        fetch(geocodeUrl)
            .then((response) => response.json())
            .then((data) => {
                console.log('Geocoding Response:', data)
                if (data.status === 'OK' && data.results.length > 0) {
                    const location = data.results[0].geometry.location
                    console.log(location)
                    setCenter({
                        lat: location.lat,
                        lng: location.lng
                    })
                    console.log(location.lat, location.lng)
                } else {
                    console.error('Geocoding failed')
                }
            })
            .catch((error) => {
                console.error('Error gittin those coords:', error)
            })
    }
}, [zipCode]) // for the zippy change 

    
    const defaultProps = {
        center,
        zoom: 8
    }
  

  const handleApiLoaded = (map, maps) => {
    // use map and maps objects
    console.log("Maps be Firing")
  };
console.log('center', center)
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key:"AIzaSyBfmP5yDi6mI-8XTIhwW10PuE8QfpOtnJY"}}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        animate={true}
>
      
        <Marker
        lat={41.212649}
        lng={-114.209627}
        text="PSS Home Base"
        />
      </GoogleMapReact>
    </div>
  );
}