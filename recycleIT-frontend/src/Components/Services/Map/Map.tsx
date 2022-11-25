import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }:any) => <div>{text}</div>;

export default function Map(){
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    <div style={{ height: '700px', width: '70%', marginLeft: '450px' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBX9wy2s_ljVzoNiOBc_ki0fAFpgJCj2G4" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}
