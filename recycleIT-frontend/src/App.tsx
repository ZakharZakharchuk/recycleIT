import React from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './Components/Services/Map/Map';
import ServicesList from './Components/Services/ServicesList/ServicesList';
function App() {
  return (
    <div className="App">
      {/* <Map/> */}
      <ServicesList/>
    </div>
  );
}

export default App;
