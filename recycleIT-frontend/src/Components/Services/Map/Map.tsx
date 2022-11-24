import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
import './Map.css';

class Map extends Component {
   render() {
   const GoogleMapExample = withGoogleMap((props: any) => (
      <GoogleMap
        defaultCenter = { { lat: 40.756795, lng: -73.954298 } }
        defaultZoom = { 13 }
      />
      
   ));
   return(
      <div className='Googl_Map'>
        <GoogleMapExample
          containerElement={ <div style={{ height: `650px`, width: '100%' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
   );
   }
};
export default Map;