import React from "react";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 35.185231,
  lng: -80.908375
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
  fullscreenControl: true,
  scrollwheel:false,
  streetViewControl:true
}

const Map = () => {
    return (
      <React.Fragment>
          <div>
            <LoadScript
              googleMapsApiKey="AIzaSyCnwHRpPZJeVHZbrLhyMqP6XTG3S00xNqw"
            >
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={16}
                options={options}
              >
                <Marker
                  position={center}
                  icon={{ url: 'https://ik.imagekit.io/rc/images/map-marker-icon_PJVYndbGF.png' }}
                />
                <></>
              </GoogleMap>
            </LoadScript>
        </div>
      </React.Fragment>
    );
};

export default Map;