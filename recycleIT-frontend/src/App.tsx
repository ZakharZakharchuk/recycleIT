import GoogleMapReact from "google-map-react";
import React from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Services from "./Components/Services";
import Map from "./Components/Services/Map/Map";
import Support from "./Components/Support/Support";
import Authorization from "./Components/Athorization/Authorization";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./Components/UserContext/UserContextProvider";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <UserContextProvider>
          <Header/>
          <main>
            <Routes>
              <Route path="/" element={ <Main/>}/>
              <Route path="/services" element={<Services/>}/>
              <Route path="/authorization" element={<Authorization/>}/>
              <Route path="/support" element={<Support/>}/>
            </Routes>    
          </main>
        </UserContextProvider>
      </BrowserRouter>
      </div>
    );
  }

export default App