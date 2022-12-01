import GoogleMapReact from "google-map-react";
import { useEffect, useState, useContext } from "react";
import {
  IconButton,
  Typography,
  Tooltip,
} from '@mui/material';
import './Map.css';
import Marker from './Marker/Marker';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
import { UserLocation } from './../index';
import { 
  IMapProps, 
  LocationType, 
  ChosenItemType 
} from "../../interfaces/Interfaces";

const UserLocationMarker = (props: LocationType) => {
  return (
    <Tooltip 
      arrow 
      title="Me" 
      placement="top" 
      style={{backgroundColor: 'white', color: 'black'}}>
        <PersonPinCircleIcon fontSize='large' style={{color: '#1034a6'}}/>
    </Tooltip>
  )
}

export default function Map(props: IMapProps){
  const defaultProps = {
    center: {
      lat: 40.730610,
      lng: -73.935242
    },
    zoom: 5
  };
  
  const chosenItemLocation = props.chosenItemLocation as ChosenItemType;
  const userLocation = useContext(UserLocation) as LocationType;
  const [ center, setCenter ] = useState(defaultProps.center);
  const [ zoom, setZoom ] = useState(defaultProps.zoom);
  const [ chosenItemId, setChosenItemId ] = useState(0);
  
  useEffect(() => {
    setCenter(chosenItemLocation);
    setZoom(10);
    if (chosenItemLocation) {
      setChosenItemId(chosenItemLocation.id);
    }
  }, [chosenItemLocation])

  useEffect(() => {
    setCenter(userLocation);
  }, [userLocation]);

  useEffect(() => {
    if (props.servicesList) {
      setCenter({
        lat: props.servicesList[0].latitude, 
        lng: props.servicesList[0].longitude
      });
      setZoom(8);
    }
  }, [props.servicesList])

  let markers = null;

  if (props.servicesList) {
    markers = props.servicesList.map(service => (
      <Marker 
          lat={service.latitude} 
          lng={service.longitude}
          name={service.name}
          rating={service.raiting}
          key={service.id}
          id={service.id}
          showLabel={chosenItemId}
      />
    ))
  }

  return (
    <div className="map-side">
      <div className="map-container">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBX9wy2s_ljVzoNiOBc_ki0fAFpgJCj2G4" }}
          defaultCenter={center}
          center={center}
          defaultZoom={zoom}
          zoom={zoom}
        >
          <UserLocationMarker
            lat={userLocation?.lat} 
            lng={userLocation?.lng}
            />
          {markers}
        </GoogleMapReact>
      </div>
    </div>
  );
}
