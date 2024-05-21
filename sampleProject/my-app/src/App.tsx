import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

import { User } from './User';
import { Company } from './Company';

const user = new User();
const company = new Company();

const libraries = ['places'];
const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
};
const center = {
  lat: 7.2905715, // default latitude
  lng: 80.6337262, // default longitude
};

function App() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: '',
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap>
      My location tracker
    </div>
  );
}

export default App;
